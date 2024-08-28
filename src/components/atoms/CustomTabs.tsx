import { Anchor } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import classes from '../../styles/Header.module.css';
import { useState } from 'react';

type tabs = {
  name: string;
  path: string;
};

type props = {
  tabs: tabs[];
};

const CustomTabs = (props: props) => {
  const { tabs } = props;
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  return (
    <>
      {tabs.map((tab, index) => (
        <Anchor
          key={tab.name}
          p={20}
          fz={20}
          underline="never"
          data-active={index === active || undefined}
          onClick={() => {
            setActive(index);
            navigate(tab.path);
          }}
          className={`${classes['anchor']}`}
        >
          {tab.name}
        </Anchor>
      ))}
    </>
  );
};

export default CustomTabs;
