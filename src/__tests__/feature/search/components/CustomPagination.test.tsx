import CustomPagination from '@/src/features/search/components/FilterDataContents/CustomPagination';
import { screen } from '@testing-library/react';
import { render } from '../../../test-utils/render';
import { FilterWordsProvider } from '@/src/features/search/context/FilterWordsContext.tsx';
import userEvent from '@testing-library/user-event';

const dispatchMock = vi.fn();

describe('CustomPagination コンポーネントのテスト', () => {
  beforeEach(() => {
    vi.mock('@/src/features/search/hooks/useFilterWords', () => ({
      useFilterWords: () => ({
        dispatch: dispatchMock,
      }),
    }));
  });
  afterEach(() => {
    vi.clearAllMocks();
  });
  it('ページネーション画面の表示', () => {
    render(
      <FilterWordsProvider>
        <CustomPagination totalPage={5} activePage={1} size="md" siblings={1} />
      </FilterWordsProvider>,
    );
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('1')).toHaveAttribute('data-active', 'true');
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });
  it('ページを変更するとdispatchが呼び出されること', async () => {
    render(
      <FilterWordsProvider>
        <CustomPagination totalPage={5} activePage={1} size="md" siblings={1} />
      </FilterWordsProvider>,
    );
    // 次のページをクリック
    const page2 = screen.getByText('2');
    await userEvent.click(page2);
    // dispatch が正しく呼び出されたかを確認
    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'SET_PAGE',
      payload: 2,
    });
  });
});
