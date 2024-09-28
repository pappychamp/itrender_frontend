import { screen } from '@testing-library/react';
import CustomAvatar from '@/src/components/atoms/CustomAvatar';
import { render } from '../../test-utils/render';
import classes from '@/src/styles/CustomAvatar.module.css';

describe('CustomAvatar コンポーネントのテスト', () => {
  it('nameプロパティが1のとき正しくレンダリングされること', () => {
    render(<CustomAvatar name="1" />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('1').parentElement).toHaveClass(classes.gold);
  });
  it('nameプロパティが2のとき正しくレンダリングされること', () => {
    render(<CustomAvatar name="2" />);
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('2').parentElement).toHaveClass(classes.silver);
  });
  it('nameプロパティが3のとき正しくレンダリングされること', () => {
    render(<CustomAvatar name="3" />);
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('3').parentElement).toHaveClass(classes.bronze);
  });
  it('nameプロパティがその他のとき正しくレンダリングされること', () => {
    render(<CustomAvatar name="4" />);
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('4').parentElement).toHaveClass(classes.others);
  });
});
