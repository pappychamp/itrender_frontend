import { screen } from '@testing-library/react';
import FilterDataContents from '@/src/features/search/components/FilterDataContents';
import { render } from '../../../test-utils/render';
import { siteItemData } from '@/src/__tests__/unit/common/testData';
import { FilterWordsProvider } from '@/src/features/search/context/FilterWordsContext.tsx';
import { ApiData } from '@/src/features/search/types/api';

// ダミーデータ
const mockItems: ApiData = {
  items: [siteItemData, siteItemData],
  total: 100,
  page: 1,
  size: 20,
  pages: 5,
};

describe('FilterDataContents コンポーネントのテスト', () => {
  beforeEach(() => {
    vi.mock('@/src/features/search/hooks/useFilterWords', () => ({
      useFilterWords: () => ({
        state: { words: ['test'] },
      }),
    }));
  });
  afterEach(() => {
    vi.clearAllMocks();
  });
  it('初期画面の表示', () => {
    render(
      <FilterWordsProvider>
        <FilterDataContents
          data={null}
          hasSearched={false}
          loading={false}
          error={null}
          message={''}
          mobile={false}
        />
      </FilterWordsProvider>,
    );

    // 初期状態のメッセージが表示されていることを確認
    expect(
      screen.getByText('記事,タグ,サイト名から検索します。'),
    ).toBeInTheDocument();
  });

  it('ローディング画面の表示', () => {
    render(
      <FilterWordsProvider>
        <FilterDataContents
          data={null}
          hasSearched={true}
          loading={true}
          error={null}
          message={''}
          mobile={false}
        />
      </FilterWordsProvider>,
    );

    // ローディング画面が表示されていることを確認
    expect(screen.getByTestId('loading-circle')).toBeInTheDocument();
  });

  it('一致するデータが無い場合の表示', () => {
    render(
      <FilterWordsProvider>
        <FilterDataContents
          data={{ ...mockItems, total: 0 }}
          hasSearched={true}
          loading={false}
          error={null}
          message={''}
          mobile={false}
        />
      </FilterWordsProvider>,
    );

    // "一致するものが見つかりませんでした" というメッセージが表示されていることを確認
    expect(
      screen.getByText('testに一致するものが見つかりませんでした'),
    ).toBeInTheDocument();
  });

  it('エラーが発生した場合の表示', () => {
    const mockError = new Error('データの取得に失敗しました');
    render(
      <FilterWordsProvider>
        <FilterDataContents
          data={null}
          hasSearched={true}
          loading={false}
          error={mockError}
          message={''}
          mobile={false}
        />
      </FilterWordsProvider>,
    );

    // エラーメッセージが表示されていることを確認
    expect(screen.getByText('エラー')).toBeInTheDocument();
    expect(
      screen.getByText(
        'サーバー内部エラーが発生しました。後ほど再度お試しください。',
      ),
    ).toBeInTheDocument();
  });

  it('データが存在する場合の表示', () => {
    render(
      <FilterWordsProvider>
        <FilterDataContents
          data={mockItems}
          hasSearched={true}
          loading={false}
          error={null}
          message={''}
          mobile={false}
        />
      </FilterWordsProvider>,
    );

    // `CardContent` がアイテム数だけ表示されていることを確認
    expect(screen.getAllByTestId('card-content')).toHaveLength(
      mockItems.items.length,
    );
  });

  it('メッセージが存在する場合の表示', () => {
    render(
      <FilterWordsProvider>
        <FilterDataContents
          data={mockItems}
          hasSearched={true}
          loading={false}
          error={null}
          message={'test message'}
          mobile={false}
        />
      </FilterWordsProvider>,
    );

    // messageが表示されることを確認
    expect(screen.getByText('test message')).toBeInTheDocument();
  });
});
