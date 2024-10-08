import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from '@/src/routes/Routes';
import { render } from '../test-utils/render';

describe('AppRoutes コンポーネントのテスト', () => {
  it('"/" にアクセスしたときに Home コンポーネントが表示されること', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>,
    );
    const homeTab = screen.getByText('ホーム');
    expect(homeTab).toHaveAttribute('data-active', 'true');
    const archiveTab = screen.getByText('アーカイブ');
    expect(archiveTab).not.toHaveAttribute('data-active');
  });

  it('"/archive" にアクセスしたときに Trend コンポーネントが表示されること', () => {
    render(
      <MemoryRouter initialEntries={['/archive']}>
        <AppRoutes />
      </MemoryRouter>,
    );
    const homeTab = screen.getByText('ホーム');
    expect(homeTab).not.toHaveAttribute('data-active');
    const archiveTab = screen.getByText('アーカイブ');
    expect(archiveTab).toHaveAttribute('data-active', 'true');
  });
  it('"/search" にアクセスしたときに Search コンポーネントが表示されること', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <AppRoutes />
      </MemoryRouter>,
    );
    const homeTab = screen.getByText('ホーム');
    expect(homeTab).not.toHaveAttribute('data-active');
    const archiveTab = screen.getByText('調べる');
    expect(archiveTab).toHaveAttribute('data-active', 'true');
  });
  it('"/contact" にアクセスしたときに Contact コンポーネントが表示されること', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <AppRoutes />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('google-form')).toBeInTheDocument();
  });
});
