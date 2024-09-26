import { screen } from '@testing-library/react';
import CustomBadge from '@/src/components/atoms/CustomBadge';
import { render } from '../../test-utils/render';
import userEvent from '@testing-library/user-event';

describe('CustomBadge コンポーネントのテスト', () => {
  const mockProps = {
    name: 'test',
  };
  it('name プロパティが正しく表示されること', () => {
    render(<CustomBadge {...mockProps} />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
  it('variant プロパティが正しく適用されること', () => {
    render(<CustomBadge {...mockProps} variant="filled" />);
    expect(screen.getByText('test').closest('div')).toHaveAttribute(
      'data-variant',
      'filled',
    );
  });
  it('leftSection プロパティが正しく表示されること', () => {
    render(
      <CustomBadge
        {...mockProps}
        leftSection={<span data-testid="left-icon">Icon</span>}
      />,
    );
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
  });
  it('rightSection プロパティが正しく表示されること', () => {
    render(
      <CustomBadge
        {...mockProps}
        rightSection={<span data-testid="right-icon">X</span>}
      />,
    );
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });
  it('onClick プロパティが正しく機能すること', async () => {
    const onClickMock = vi.fn();
    render(<CustomBadge {...mockProps} onClick={onClickMock} />);

    const badge = screen.getByText('test');
    await userEvent.click(badge);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
  it('sizeプロパティが正しくレンダリングされること', () => {
    render(<CustomBadge {...mockProps} size="xs" />);
    // expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('test').parentElement).toHaveAttribute(
      'data-size',
      'xs',
    );
  });
});
