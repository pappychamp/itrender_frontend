import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BurgerDrawer from '@/src/components/molecules/BurgerDrawer';
import { render } from '../../test-utils/render';

describe('BurgerDrawer コンポーネントのテスト', () => {
  it('Burger がレンダリングされること', () => {
    render(<BurgerDrawer />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Burger をクリックしたときにDrawerが表示される', async () => {
    render(<BurgerDrawer />);

    // Burger をクリック
    await userEvent.click(screen.getByRole('button'));
    const navLink = screen.getAllByRole('link');
    expect(navLink).toHaveLength(3);
  });
});
