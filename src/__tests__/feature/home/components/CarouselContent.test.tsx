import CarouselContent from '@/src/features/home/components/HomeContents/CarouselContent';
import { screen } from '@testing-library/react';
import { render } from '../../../test-utils/render';
import { SiteItem } from '@/src/types/trendData';
import { siteItemData } from '@/src/__tests__/common/testData';

// ダミーデータ
const mockItems: SiteItem[] = [siteItemData, siteItemData];

describe('CarouselContent コンポーネントのテスト', () => {
  it('初期画面の表示', () => {
    render(<CarouselContent data={mockItems} />);

    expect(screen.getByTestId('carousel')).toBeInTheDocument();
    expect(screen.getAllByTestId('carousel-slide')).toHaveLength(
      mockItems.length,
    );
    expect(screen.getAllByTestId('card-content')).toHaveLength(
      mockItems.length,
    );
  });
});
