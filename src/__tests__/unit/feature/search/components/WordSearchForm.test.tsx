import { screen } from '@testing-library/react';
import WordSearchForm from '@/src/features/search/components/WordSearchForm';
import { render } from '../../../test-utils/render';
import { FilterWordsProvider } from '@/src/features/search/context/FilterWordsContext.tsx';
import userEvent from '@testing-library/user-event';
import * as validation from '@/src/features/search/utils/validation/validation';

const mockSetMessage = vi.fn();
const dispatchMock = vi.fn();

describe('WordSearchForm コンポーネントのテスト', () => {
  beforeEach(() => {
    vi.mock('@/src/features/search/hooks/useFilterWords', () => ({
      useFilterWords: () => ({
        state: { words: ['test'] },
        dispatch: dispatchMock,
      }),
    }));
  });
  afterEach(() => {
    vi.clearAllMocks();
  });
  it('WordSearchForm コンポーネントが正しくレンダリングされること', () => {
    render(
      <FilterWordsProvider>
        <WordSearchForm setMessage={mockSetMessage} mobile={false} />
      </FilterWordsProvider>,
    );
    expect(
      screen.getByPlaceholderText('気になる単語を検索'),
    ).toBeInTheDocument();
    expect(screen.getByText('Enterで検索')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByTestId('custom-badge')).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('単語を追加したときdispatchが正しく呼ばれること', async () => {
    const spy = vi.spyOn(validation, 'validateInput');
    spy.mockReturnValue('');
    render(
      <FilterWordsProvider>
        <WordSearchForm setMessage={mockSetMessage} mobile={false} />
      </FilterWordsProvider>,
    );
    await userEvent.type(
      screen.getByPlaceholderText('気になる単語を検索'),
      'test2',
    );
    await userEvent.click(screen.getByText('Enterで検索'));

    expect(mockSetMessage).toHaveBeenCalledTimes(1);
    expect(mockSetMessage).toHaveBeenCalledWith('');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'ADD_WORD',
      payload: 'test2',
    });
    expect(dispatchMock).toHaveBeenCalledWith({ type: 'SET_PAGE', payload: 1 });
  });
  it('単語を追加したときvalidationに引っかかったとき', async () => {
    const spy = vi.spyOn(validation, 'validateInput');
    spy.mockReturnValue('validatation error');
    render(
      <FilterWordsProvider>
        <WordSearchForm setMessage={mockSetMessage} mobile={false} />
      </FilterWordsProvider>,
    );
    await userEvent.type(
      screen.getByPlaceholderText('気になる単語を検索'),
      'test2',
    );
    await userEvent.click(screen.getByText('Enterで検索'));

    expect(mockSetMessage).toHaveBeenCalledTimes(1);
    expect(mockSetMessage).toHaveBeenCalledWith('validatation error');
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('単語を削除したときdispatchが正しく呼ばれること', async () => {
    render(
      <FilterWordsProvider>
        <WordSearchForm setMessage={mockSetMessage} mobile={false} />
      </FilterWordsProvider>,
    );
    await userEvent.click(screen.getByText('test'));

    expect(mockSetMessage).toHaveBeenCalledTimes(1);
    expect(mockSetMessage).toHaveBeenCalledWith('');
    expect(dispatchMock).toHaveBeenCalledTimes(2);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'REMOVE_WORD',
      payload: 'test',
    });
    expect(dispatchMock).toHaveBeenCalledWith({ type: 'SET_PAGE', payload: 1 });
  });
});
