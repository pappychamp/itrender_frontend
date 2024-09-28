import { siteItemData } from '@/src/__tests__/unit/common/testData';
import HomeContents from '@/src/features/home/components/HomeContents';
import { SiteData } from '@/src/types/trendData';
import { render } from '../../../test-utils/render';
import { screen } from '@testing-library/react';

// ダミーデータ
const mockItems: SiteData = {
  qiita: [siteItemData, siteItemData],
  zenn: [siteItemData, siteItemData],
};

describe('HomeContents コンポーネントのテスト', () => {
  it('ローディング画面の表示', () => {
    render(<HomeContents data={{}} loading={true} error={null} />);
    // ローディング画面が表示されていることを確認
    expect(screen.getByTestId('loading-circle')).toBeInTheDocument();
  });
  it('エラーが発生した場合の表示', () => {
    const mockError = new Error('データの取得に失敗しました');
    render(<HomeContents data={{}} loading={false} error={mockError} />);

    // エラーメッセージが表示されていることを確認
    expect(screen.getByText('エラー')).toBeInTheDocument();
    expect(screen.getByText(mockError.message)).toBeInTheDocument();
  });

  it('データが存在する場合の表示', () => {
    render(<HomeContents data={mockItems} loading={false} error={null} />);

    // `CardContent` がアイテム数だけ表示されていることを確認
    expect(screen.getByText('Qiita')).toBeInTheDocument();
    expect(screen.getByText('Zenn')).toBeInTheDocument();
    expect(screen.getAllByTestId('site-name')).toHaveLength(2);
    expect(screen.getAllByTestId('card-content')).toHaveLength(4);
  });
});
