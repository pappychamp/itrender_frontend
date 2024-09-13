import { Container, Group, Image, Text } from '@mantine/core';
import classes from '../../styles/Header.module.css';
import CustomTabs from '../atoms/CustomTabs';
// import BurgerDrawer from '../molecules/BurgerDrawer';
import logoImage from '../../assets/logo.png';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { headerTabs } from '../../constants/layout';

const Header = () => {
  const [active, setActive] = useState(0);
  const location = useLocation();

  // 現在のパスを監視し、active 状態を更新する
  useEffect(() => {
    const currentTab = headerTabs.findIndex(
      (tab) => tab.path === location.pathname,
    );
    if (currentTab !== -1) {
      setActive(currentTab);
    }
  }, [location.pathname]);

  return (
    <header className={classes.header}>
      <Container className={`${classes['image-section']}`}>
        <Image src={logoImage} className={`${classes['content-logo']}`} />
        <Text className={`${classes['content-title']}`}>Trender</Text>
      </Container>
      <Group>
        {/* <BurgerDrawer /> */}
        <CustomTabs tabs={headerTabs} active={active} />
      </Group>
    </header>
  );
};
export default Header;
