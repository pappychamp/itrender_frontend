import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from '../../routes/Routes';
import { render } from '../test-utils/render';

describe('AppRoutes コンポーネントのテスト', () => {
  it('"/" にアクセスしたときに Home コンポーネントが表示されること', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>,
    );
    const homeTab = screen.getByText('Home');
    expect(homeTab).toHaveAttribute('data-active', 'true');
    const archiveTab = screen.getByText('Archive');
    expect(archiveTab).not.toHaveAttribute('data-active');
  });

  it('"/archive" にアクセスしたときに Trend コンポーネントが表示されること', () => {
    render(
      <MemoryRouter initialEntries={['/archive']}>
        <AppRoutes />
      </MemoryRouter>,
    );
    const homeTab = screen.getByText('Home');
    expect(homeTab).not.toHaveAttribute('data-active');
    const archiveTab = screen.getByText('Archive');
    expect(archiveTab).toHaveAttribute('data-active', 'true');
  });
  it('"/search" にアクセスしたときに Search コンポーネントが表示されること', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <AppRoutes />
      </MemoryRouter>,
    );
    const homeTab = screen.getByText('Home');
    expect(homeTab).not.toHaveAttribute('data-active');
    const archiveTab = screen.getByText('Search');
    expect(archiveTab).toHaveAttribute('data-active', 'true');
  });
});
