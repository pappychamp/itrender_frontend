import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SiteForm from '@/src/features/archive/components/TrendSearchForm/SiteForm';
import { render } from '../../../test-utils/render';
import { TrendProvider } from '@/src/features/archive/context/TrendContext.tsx';
import { siteOptions } from '@/src/constants/selectOptions';

const dispatchMock = vi.fn();

describe('SiteForm コンポーネントのテスト', () => {
  beforeEach(() => {
    vi.mock('@/src/features/archive/hooks/useTrend', () => ({
      useTrend: () => ({
        state: { site: siteOptions[1].value }, // 必要なら初期状態を設定
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
        <SiteForm siteOptions={siteOptions} />
      </TrendProvider>,
    );

    // ラベルが正しくレンダリングされているか確認
    expect(screen.getByPlaceholderText('サイト選択')).toBeInTheDocument();
    // オプションが正しく設定されているか確認
    siteOptions.forEach((site) => {
      expect(screen.getByText(site.label)).toBeInTheDocument();
    });
  });
  it('サイトを選択したとき、dispatchが正しく呼ばれること', async () => {
    render(
      <TrendProvider>
        <SiteForm siteOptions={siteOptions} />
      </TrendProvider>,
    );

    // 日付の選択
    await userEvent.click(screen.getByText(siteOptions[2].label));

    // dispatch が正しく呼び出されたかを確認
    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'SET_SITE',
      payload: siteOptions[2].value,
    });
  });
  it('null の場合 dispatch が空文字で呼び出されること', async () => {
    render(
      <TrendProvider>
        <SiteForm siteOptions={siteOptions} />
      </TrendProvider>,
    );

    // 日付の選択
    await userEvent.click(screen.getByText(siteOptions[1].label));

    // dispatch が正しく呼び出されたかを確認
    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'SET_SITE',
      payload: '',
    });
  });
});
