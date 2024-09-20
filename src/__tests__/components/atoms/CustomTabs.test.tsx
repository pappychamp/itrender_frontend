import { screen } from '@testing-library/react';
import { render } from '../../test-utils/render';
import { BrowserRouter as Router } from 'react-router-dom'; // リンクのためにラップ
import CustomTabs from '../../../components/atoms/CustomTabs';

const tabs = [
  { name: 'Home', path: '/' },
  { name: 'Trend', path: '/trend' },
];

describe('CustomTabs コンポーネントのテスト', () => {
  test('タブの数が正しく表示されること', () => {
    render(
      <Router>
        <CustomTabs tabs={tabs} active={0} />
      </Router>,
    );
    const anchors = screen.getAllByRole('link'); // 全てのアンカータグを取得
    expect(anchors).toHaveLength(tabs.length); // タブの数が正しいか
  });

  test('activeプロパティが正しくレンダリングされること', () => {
    render(
      <Router>
        <CustomTabs tabs={tabs} active={1} />
      </Router>,
    );

    const activeTab = screen.getByText('Trend'); // active になっているタブを取得
    expect(activeTab).toHaveAttribute('data-active', 'true'); // data-active 属性がついているか
  });

  test('タブのパスが正しいこと', () => {
    render(
      <Router>
        <CustomTabs tabs={tabs} active={0} />
      </Router>,
    );

    const homeTab = screen.getByText('Home');
    const trendTab = screen.getByText('Trend');

    // リンクが正しいか
    expect(homeTab.closest('a')).toHaveAttribute('href', '/');
    expect(trendTab.closest('a')).toHaveAttribute('href', '/trend');
  });
});
