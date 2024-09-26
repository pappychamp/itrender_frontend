import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CusotmButton from '@/src/components/atoms/CustomButton.tsx';
import { render } from '../../test-utils/render';

describe('CusotmButton コンポーネントのテスト', () => {
  const mockProps = {
    name: 'test',
  };
  it('name プロパティが正しく表示されること', () => {
    render(<CusotmButton {...mockProps} />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('variant プロパティが正しく適用されること', () => {
    render(<CusotmButton {...mockProps} variant="outline" />);
    expect(screen.getByRole('button')).toHaveAttribute(
      'data-variant',
      'outline',
    );
  });

  it('onClick プロパティが正しく機能すること', async () => {
    const onClickMock = vi.fn();
    render(<CusotmButton {...mockProps} onClick={onClickMock} />);

    const button = screen.getByText('test');
    await userEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('size プロパティが正しく適用されること', () => {
    render(<CusotmButton {...mockProps} size="lg" />);
    expect(screen.getByRole('button')).toHaveAttribute('data-size', 'lg');
  });
});
