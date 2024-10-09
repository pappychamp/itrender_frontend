import { Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from '@/src/styles/CustomTabs.module.css';

type tabs = {
  name: string;
  path: string;
};

type props = {
  tabs: tabs[];
  active: number;
};

const CustomTabs = (props: props) => {
  const { tabs, active } = props;

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
