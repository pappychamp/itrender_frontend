import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DateForm from '@/src/features/archive/components/TrendSearchForm/DateForm';
import { render } from '../../../test-utils/render';
import { TrendProvider } from '@/src/features/archive/context/TrendContext.tsx';

const dispatchMock = vi.fn();
const mockDates = ['2024-01-01', '2024-01-02', '2024-01-03'];

describe('DateForm コンポーネントのテスト', () => {
  beforeEach(() => {
    vi.mock('@/src/features/archive/hooks/useTrend', () => ({
      useTrend: () => ({
        state: { date: mockDates[1] }, // 必要なら初期状態を設定
        dispatch: dispatchMock,
      }),
    }));
  });
  afterEach(() => {
    vi.clearAllMocks();
  });
  it('Selectコンポーネントが正しいオプションでレンダリングされること', () => {
    render(
      <TrendProvider>
        <DateForm date={mockDates} />
      </TrendProvider>,
    );

    // ラベルが正しくレンダリングされているか確認
    expect(screen.getByPlaceholderText('日付選択')).toBeInTheDocument();
    // オプションが正しく設定されているか確認
    mockDates.forEach((date) => {
      expect(screen.getByText(date)).toBeInTheDocument();
    });
  });
  it('日付を選択したとき、dispatchが正しく呼ばれること', async () => {
    render(
      <TrendProvider>
        <DateForm date={mockDates} />
      </TrendProvider>,
    );

    // 日付の選択
    await userEvent.click(screen.getByText(mockDates[2]));

    // dispatch が正しく呼び出されたかを確認
    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'SET_DATE',
      payload: mockDates[2],
    });
  });
  it('null の場合 dispatch が空文字で呼び出されること', async () => {
    render(
      <TrendProvider>
        <DateForm date={mockDates} />
      </TrendProvider>,
    );

    // 日付を一度選択し、次に選択を解除するシミュレーション
    await userEvent.click(screen.getByText(mockDates[1]));

    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'SET_DATE',
      payload: '',
    });
  });
});
