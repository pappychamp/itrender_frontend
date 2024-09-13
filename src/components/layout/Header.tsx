import { Container, Group, Image, Text } from '@mantine/core';
import classes from '../../styles/Header.module.css';
import CustomTabs from '../molecules/CustomTabs';
// import BurgerDrawer from '../molecules/BurgerDrawer';
import logoImage from '../../assets/logo.png';
const tabs = [
  { name: 'Home', path: '/' },
  { name: 'Trend', path: '/trend' },
];

const Header = () => {
  return (
    <header className={classes.header}>
      <Container className={`${classes['image-section']}`}>
        <Image src={logoImage} className={`${classes['content-logo']}`} />
        <Text className={`${classes['content-title']}`}>Trender</Text>
      </Container>
      <Group>
        {/* <BurgerDrawer /> */}
        <CustomTabs tabs={tabs} />
      </Group>
    </header>
  );
};
export default Header;
