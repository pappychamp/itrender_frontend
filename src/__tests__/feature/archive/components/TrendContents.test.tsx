import { screen } from '@testing-library/react';
import TrendContents from '@/src/features/archive/components/TrendContents';
import { render } from '../../../test-utils/render';
import { SiteItem } from '@/src/types/trendData';
import { siteItemData } from '@/src/__tests__/common/testData';

// ダミーデータ
const mockItems: SiteItem[] = [siteItemData, siteItemData];

describe('TrendContents コンポーネントのテスト', () => {
  it('初期画面の表示', () => {
    render(
      <TrendContents
        items={[]}
        hasSearched={false}
        loading={false}
        error={null}
      />,
    );

    // 初期状態のメッセージが表示されていることを確認
    expect(
      screen.getByText('過去のトレンド記事を検索できます。'),
    ).toBeInTheDocument();
  });

  it('ローディング画面の表示', () => {
    render(
      <TrendContents
        items={[]}
        hasSearched={true}
        loading={true}
        error={null}
      />,
    );

    // ローディング画面が表示されていることを確認
    expect(screen.getByTestId('loading-circle')).toBeInTheDocument();
  });

  it('一致するデータが無い場合の表示', () => {
    render(
      <TrendContents
        items={[]}
        hasSearched={true}
        loading={false}
        error={null}
      />,
    );

    // "一致するものが見つかりませんでした" というメッセージが表示されていることを確認
    expect(
      screen.getByText('一致するものが見つかりませんでした'),
    ).toBeInTheDocument();
  });

  it('エラーが発生した場合の表示', () => {
    const mockError = new Error('データの取得に失敗しました');
    render(
      <TrendContents
        items={[]}
        hasSearched={true}
        loading={false}
        error={mockError}
      />,
    );

    // エラーメッセージが表示されていることを確認
    expect(screen.getByText('エラー')).toBeInTheDocument();
    expect(screen.getByText(mockError.message)).toBeInTheDocument();
  });

  it('データが存在する場合の表示', () => {
    render(
      <TrendContents
        items={mockItems}
        hasSearched={true}
        loading={false}
        error={null}
      />,
    );

    // `CardContent` がアイテム数だけ表示されていることを確認
    expect(screen.getAllByTestId('card-content')).toHaveLength(
      mockItems.length,
    );
  });
});
