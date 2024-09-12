import * as hook from '../../../features/trend/hooks/useSiteTrendData';
import * as fetchApi from '../../../features/trend/api/getSiteTrendData';
import { SiteItem, SiteKey } from '../../../types/trendData';
import { renderHook, waitFor } from '@testing-library/react';

describe('useSiteTrendDataテスト', () => {
  const mockSite: SiteKey = 'qiita';
  const mockDate = '2024-01-01';
  const mockData: SiteItem[] = [
    {
      title: 'test title',
      ranking: 1,
      category: null,
      published_at: '2024-01-01T00:00:00Z',
      url: 'https://test.com',
      embed_html: null,
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
  ];
  // 非同期処理をmock化
  const spy = vi.spyOn(fetchApi, 'getSiteTrendData');

  afterEach(() => {
    vi.clearAllMocks(); // モックをクリーンアップ
  });
  it('正常系:データ取得に成功する場合', async () => {
    spy.mockResolvedValue(mockData);

    // カスタムフック(useSiteTrendData)をレンダリング
    const { result } = renderHook(() =>
      hook.useSiteTrendData(mockSite, mockDate),
    );

    // 非同期処理(getSiteTrendData)前のstate検証
    expect(result.current.trendData).toEqual([]);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();

    // 非同期処理後のstate検証
    await waitFor(() => {
      expect(result.current.trendData).toEqual(mockData);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeNull();
      // getSiteTrendDataが正しく呼び出されたかを検証
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(mockSite, mockDate);
    });
  });
  it('異常系: データ取得に失敗する場合', async () => {
    const mockError = new Error('API fetch failed');
    spy.mockRejectedValue(mockError); // エラーを投げる

    const { result } = renderHook(() =>
      hook.useSiteTrendData(mockSite, mockDate),
    );
    expect(result.current.trendData).toEqual([]);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();
    await waitFor(() => {
      expect(result.current.trendData).toEqual([]);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toEqual(mockError);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(mockSite, mockDate);
    });
  });
  it('異常系: 引数siteが空だった場合', async () => {
    const mockError = new Error('API fetch failed');
    spy.mockRejectedValue(mockError); // エラーを投げる

    const { result } = renderHook(() => hook.useSiteTrendData('', mockDate));
    expect(result.current.trendData).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });
  it('異常系: 引数dateが空だった場合', async () => {
    const mockError = new Error('API fetch failed');
    spy.mockRejectedValue(mockError); // エラーを投げる

    const { result } = renderHook(() => hook.useSiteTrendData(mockSite, ''));
    expect(result.current.trendData).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });
});
