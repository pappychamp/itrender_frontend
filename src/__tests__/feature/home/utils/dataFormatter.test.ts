import { trendDataFormat } from '@/src/features/home/utils/format/dataFormatter';
import { SiteData } from '@/src/types/trendData';
import { siteItemData } from '../../../common/testData';

describe('trendDataFormat 関数のテスト', () => {
  const mockProps: SiteData = {
    thinkit: [siteItemData],
    qiita: [siteItemData],
    yahoo: [siteItemData],
  };
  it('データが存在する場合、正しくフォーマットされること', () => {
    const formattedData = trendDataFormat(mockProps);
    expect(Object.keys(formattedData)).toEqual(['yahoo', 'qiita', 'thinkit']);
  });
  it('データが存在しない場合、空のキーが削除されること', () => {
    const formattedData = trendDataFormat({
      ...mockProps,
      qiita: [],
      zenn: undefined,
    });
    expect(Object.keys(formattedData)).toEqual(['yahoo', 'thinkit']);
  });
});
