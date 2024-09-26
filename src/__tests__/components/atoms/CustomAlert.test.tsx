import { screen } from '@testing-library/react';
import CustomAlert from '@/src/components/atoms/CustomAlert';
import { IconCircleX } from '@tabler/icons-react';
import { render } from '../../test-utils/render';

describe('CustomAlert コンポーネントのテスト', () => {
  const mockProps = {
    icon: <IconCircleX data-testid="custom-icon" />,
    title: 'Test Title',
    message: 'This is a test message',
    color: 'red',
  };
  it('プロパティが正しくレンダリングされること', () => {
    render(<CustomAlert {...mockProps} />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('This is a test message')).toBeInTheDocument();
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });
});
