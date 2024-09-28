import * as hook from '@/src/features/home/hooks/useLatestTrendData';
import * as fetchApi from '@/src/features/home/api/getLatestTrendData';
import { renderHook, waitFor } from '@testing-library/react';
import { ApiData } from '@/src/features/home/types/api';

describe('useLatestTrendDataテスト', () => {
  const mockDate = '2024-01-01';
  const mockData: ApiData = {
    [mockDate]: {
      qiita: [
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
    },
  };
  // 非同期処理をmock化
  const spy = vi.spyOn(fetchApi, 'getLatestTrendData');

  afterEach(() => {
    vi.clearAllMocks(); // モックをクリーンアップ
  });
  it('正常系:データ取得に成功する場合', async () => {
    spy.mockResolvedValue(mockData);

    // カスタムフック(useLatestTrendData)をレンダリング
    const { result } = renderHook(() => hook.useLatestTrendData());

    // 非同期処理(getLatestTrendData)前のstate検証
    expect(result.current.latestTrendData).toEqual({});
    expect(result.current.latestDate).toEqual('');
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();

    // 非同期処理後のstate検証
    await waitFor(() => {
      expect(result.current.latestDate).toEqual(mockDate);
      expect(result.current.latestTrendData).toEqual(mockData[mockDate]);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeNull();
      // getLatestTrendDataが正しく呼び出されたかを検証
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
  it('異常系: データ取得に失敗する場合', async () => {
    const mockError = new Error('API fetch failed');
    spy.mockRejectedValue(mockError); // エラーを投げる

    const { result } = renderHook(() => hook.useLatestTrendData());
    expect(result.current.latestTrendData).toEqual({});
    expect(result.current.latestDate).toEqual('');
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();
    await waitFor(() => {
      expect(result.current.latestTrendData).toEqual({});
      expect(result.current.latestDate).toEqual('');
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toEqual(mockError);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
