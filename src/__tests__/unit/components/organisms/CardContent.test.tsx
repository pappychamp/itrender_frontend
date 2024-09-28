import { screen } from '@testing-library/react';
import CardContent from '@/src/components/organisms/CardContent';
import { render } from '../../test-utils/render';
import { siteItemData } from '../../common/testData';

describe('CustomBadge コンポーネントのテスト', () => {
  const mockProps = {
    data: siteItemData,
    mobile: false,
    isRanking: true,
  };
  it('ランキングが正しく表示されること', () => {
    render(<CardContent {...mockProps} />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
  it('ランキングが正しく表示されないこと', () => {
    render(<CardContent {...mockProps} isRanking={false} />);
    expect(screen.queryByText('1')).not.toBeInTheDocument();
  });
  it('タグが正しく表示されること', () => {
    render(<CardContent {...mockProps} />);
    expect(screen.getByText('#test1, #test2')).toBeInTheDocument();
  });
  it('タグがないとき表示されないこと', () => {
    const customProps = Object.assign({}, mockProps, {
      data: Object.assign({}, mockProps.data, { tags: [] }), // tagだけを上書き
    });
    render(<CardContent {...customProps} />);
    expect(screen.queryByText('#test1, #test2')).not.toBeInTheDocument();
  });
  it('リンクが正しく機能すること', () => {
    render(<CardContent {...mockProps} />);
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://test.com',
    );
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link')).toHaveAttribute(
      'rel',
      'noopener noreferrer',
    );
  });
  it('タイトルが正しく表示されること', () => {
    render(<CardContent {...mockProps} />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
  it('画像が正しく表示されること', () => {
    render(<CardContent {...mockProps} />);
    expect(screen.getByAltText('contents image')).toHaveAttribute(
      'src',
      'https://test-image.com',
    );
  });
  it('画像がなくても正しく表示されること', () => {
    const customProps = Object.assign({}, mockProps, {
      data: Object.assign({}, mockProps.data, { image_url: '' }), // tagだけを上書き
    });
    render(<CardContent {...customProps} />);
    expect(screen.getByAltText('contents image')).toHaveAttribute(
      'src',
      '/src/assets/noimage.png',
    );
  });
});
