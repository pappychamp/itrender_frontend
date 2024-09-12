import { screen } from '@testing-library/react';
import CustomBadge from '../../../components/atoms/CustomBadge';
import { render } from '../../test-utils/render';

describe('CustomBadge コンポーネントのテスト', () => {
  const mockProps = {
    name: 'test',
    size: 'md',
  };
  it('nameプロパティが正しくレンダリングされること', () => {
    render(<CustomBadge {...mockProps} />);
    // expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('test').parentElement).toHaveAttribute(
      'data-size',
      'md',
    );
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
