import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '@/src/components/layout/Header';
import { render } from '../../test-utils/render';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Header コンポーネントのテスト', () => {
  const renderWithRouter = (path: string) => {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="*" element={<Header />} />
        </Routes>
      </MemoryRouter>,
    );
  };
  it('ロゴとタイトルとタブが正しく表示されること', () => {
    renderWithRouter('/');
    expect(screen.getByText('ITrender')).toBeInTheDocument();
    expect(screen.getByAltText('ITrender logo')).toHaveAttribute(
      'src',
      '/src/assets/logo.png',
    );
    expect(screen.getByText('ホーム')).toBeInTheDocument();
    expect(screen.getByText('アーカイブ')).toBeInTheDocument();
    expect(screen.getByText('調べる')).toBeInTheDocument();
  });

  it('パスに基づいてアクティブなタブが変更されること', async () => {
    renderWithRouter('/');
    const homeTab = screen.getByText('ホーム');
    expect(homeTab).toHaveAttribute('data-active', 'true');
    const archiveTab = screen.getByText('アーカイブ');
    expect(archiveTab).not.toHaveAttribute('data-active');

    // Tab のクリックをトリガー
    await userEvent.click(archiveTab);
    expect(screen.getByText('アーカイブ')).toHaveAttribute(
      'data-active',
      'true',
    );
    expect(screen.getByText('ホーム')).not.toHaveAttribute('data-active');
    // Tab のクリックをトリガー
    await userEvent.click(homeTab);
    expect(homeTab).toHaveAttribute('data-active', 'true');
    expect(archiveTab).not.toHaveAttribute('data-active');
  });
});
