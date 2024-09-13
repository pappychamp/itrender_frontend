import { Anchor } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import classes from '../../styles/Header.module.css';
import { useEffect, useState } from 'react';

type tabs = {
  name: string;
  path: string;
};

type props = {
  tabs: tabs[];
};

const CustomTabs = (props: props) => {
  const { tabs } = props;
  const [active, setActive] = useState(0);
  const location = useLocation();

  // 現在のパスを監視し、active 状態を更新する
  useEffect(() => {
    const currentTab = tabs.findIndex((tab) => tab.path === location.pathname);
    if (currentTab !== -1) {
      setActive(currentTab);
    }
  }, [location.pathname, tabs]);

  return (
    <>
      {tabs.map((tab, index) => (
        <Anchor
          component={Link}
          to={tab.path}
          key={tab.name}
          p={20}
          fz={20}
          underline="never"
          data-active={index === active || undefined}
          className={`${classes['anchor']}`}
        >
          {tab.name}
        </Anchor>
      ))}
    </>
  );
};

export default CustomTabs;
