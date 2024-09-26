import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TagContent from '@/src/components/molecules/TagContent';
import { render } from '../../test-utils/render';

describe('TagContent コンポーネントのテスト', () => {
  const mockProps = {
    tags: [{ name: 'test1' }, { name: 'test2' }, { name: 'test3' }],
  };
  it('プロパティが正しくレンダリングされること', () => {
    render(<TagContent {...mockProps} />);
    expect(screen.getByText('#test1, #test2, #test3')).toBeInTheDocument();
  });

  it('ホバー時に全タグが表示されること', async () => {
    render(<TagContent {...mockProps} />);

    // HoverCard の表示をトリガー
    await userEvent.hover(screen.getByText('#test1, #test2, #test3'));

    // ドロップダウン内のタグが表示されるか確認
    expect(screen.getByText('#test1')).toBeInTheDocument();
    expect(screen.getByText('#test2')).toBeInTheDocument();
    expect(screen.getByText('#test3')).toBeInTheDocument();
  });
});
