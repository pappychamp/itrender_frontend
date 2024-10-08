import { screen } from '@testing-library/react';
import Footer from '@/src/components/layout/Footer';
import { render } from '../../test-utils/render';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Footer コンポーネントのテスト', () => {
  const renderWithRouter = (path: string) => {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="*" element={<Footer />} />
        </Routes>
      </MemoryRouter>,
    );
  };
  it('お問い合わせ が表示される', () => {
    renderWithRouter('/');
    expect(screen.getByText('お問い合わせ')).toBeInTheDocument();
  });
});
