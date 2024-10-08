import { render } from './test-utils/render';
import App from '@/src/App';
import { screen } from '@testing-library/react';

describe('App コンポーネントのテスト', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  it('App コンポーネントのレンダリング', () => {
    render(<App />);

    // Appコンポーネントがレンダリングされていることを確認
    expect(screen.getByTestId('app-component')).toBeInTheDocument();
  });

  //   it('Sentry.ErrorBoundary の動作確認', () => {
  //   });
});
