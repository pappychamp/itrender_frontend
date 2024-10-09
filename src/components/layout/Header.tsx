import { Container, Group, Image } from '@mantine/core';
import classes from '@/src/styles/Header.module.css';
import CustomTabs from '../atoms/CustomTabs';
import BurgerDrawer from '../molecules/BurgerDrawer';
import logoImage from '@/src/assets/logo.png';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { headerTabs } from '@/src/constants/layout';
import { SITE_NAME } from '@/src/constants/config';
import theme from '@/src/constants/theme';
import { useMediaQuery } from '@mantine/hooks';
import { Link } from 'react-router-dom';

const Header = () => {
  const [active, setActive] = useState(0);
  const location = useLocation();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);

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
      {mobile ? (
        <>
          <BurgerDrawer />
          <Container className={`${classes['image-section']}`}>
            <Link to="/" className={`${classes['content-title']}`}>
              {SITE_NAME}
            </Link>
          </Container>
        </>
      ) : (
        <>
          <Container className={`${classes['image-section']}`}>
            <Image
              src={logoImage}
              className={`${classes['content-logo']}`}
              alt="ITrender logo"
            />
            <Link to="/" className={`${classes['content-title']}`}>
              {SITE_NAME}
            </Link>
          </Container>
          <Group>
            <CustomTabs tabs={headerTabs} active={active} />
          </Group>
        </>
      )}
    </header>
  );
};
export default Header;
