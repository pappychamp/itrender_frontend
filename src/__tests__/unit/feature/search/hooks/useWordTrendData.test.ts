import * as hook from '@/src/features/search/hooks/useWordTrendData';
import * as fetchApi from '@/src/features/search/api/getFilterWordData';
import { ApiData } from '@/src/features/search/types/api';
import { renderHook, waitFor } from '@testing-library/react';
import * as Sentry from '@sentry/react';

describe('useWordTrendDataテスト', () => {
  const mockFilterWords = ['test'];
  const mockPage = 1;
  const mockData: ApiData = {
    items: [
      {
        title: 'test title',
        ranking: 1,
        category: null,
        published_at: '2024-01-01T00:00:00Z',
        url: 'https://test.com',
        embed_html: null,
        image_url: null,
        tags: [
          {
            name: 'test tag',
          },
        ],
        site: {
          name: 'qiita',
          content: 'article',
        },
      },
    ],

    total: 100,
    page: 1,
    size: 20,
    pages: 5,
  };
  // 非同期処理をmock化
  const spy = vi.spyOn(fetchApi, 'getFilterWordData');

  afterEach(() => {
    vi.clearAllMocks(); // モックをクリーンアップ
  });
  it('正常系:データ取得に成功する場合', async () => {
    spy.mockResolvedValue(mockData);

    // カスタムフック(useWordTrendData)をレンダリング
    const { result } = renderHook(() =>
      hook.useWordTrendData(mockFilterWords, mockPage),
    );

    // 非同期処理(getFilterWordData)前のstate検証
    expect(result.current.filterData).toBeNull();
    expect(result.current.hasSearched).toBe(true);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();

    // 非同期処理後のstate検証
    await waitFor(() => {
      expect(result.current.filterData).toEqual(mockData);
      expect(result.current.hasSearched).toBe(true);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeNull();
      // getFilterWordDataが正しく呼び出されたかを検証
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(mockFilterWords, mockPage);
    });
  });
  it('異常系: データ取得に失敗する場合', async () => {
    const mockError = new Error('API fetch failed');
    spy.mockRejectedValue(mockError); // エラーを投げる
    // Sentry.captureExceptionをモック化
    vi.mock('@sentry/react', () => ({
      captureException: vi.fn(),
    }));

    const { result } = renderHook(() =>
      hook.useWordTrendData(mockFilterWords, mockPage),
    );
    expect(result.current.filterData).toBeNull();
    expect(result.current.hasSearched).toBe(true);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();
    await waitFor(() => {
      expect(result.current.filterData).toBeNull();
      expect(result.current.hasSearched).toBe(true);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toEqual(mockError);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(mockFilterWords, mockPage);
      expect(Sentry.captureException).toHaveBeenCalledTimes(1);
      expect(Sentry.captureException).toHaveBeenCalledWith(mockError);
    });
  });
  it('異常系: 引数filterWordsが空だった場合', async () => {
    const mockError = new Error('API fetch failed');
    spy.mockRejectedValue(mockError); // エラーを投げる

    const { result } = renderHook(() => hook.useWordTrendData([], mockPage));
    expect(result.current.filterData).toBeNull();
    expect(result.current.hasSearched).toBe(false);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });
});
