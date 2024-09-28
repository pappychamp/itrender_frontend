import Content from '@/src/features/search/components/FilterDataContents/Content';
import { screen } from '@testing-library/react';
import { render } from '../../../test-utils/render';
import { SiteItem } from '@/src/types/trendData';
import { siteItemData } from '@/src/__tests__/unit/common/testData';

// ダミーデータ
const mockItems: SiteItem[] = [siteItemData, siteItemData];
describe('TrendContents コンポーネントのテスト', () => {
  it('初期画面の表示', () => {
    render(<Content data={mockItems} mobile={false} />);
    expect(screen.getAllByTestId('card-content')).toHaveLength(2);
  });
});
