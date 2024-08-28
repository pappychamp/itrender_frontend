import { Group } from '@mantine/core';
import classes from '../../styles/Header.module.css';
import CustomTabs from '../atoms/CustomTabs';
// import BurgerDrawer from '../molecules/BurgerDrawer';

const tabs = [
  { name: 'Home', path: '/' },
  { name: 'Trend', path: '/trend' },
];

const Header = () => {
  return (
    <header className={classes.header}>
      <Group>
        {/* <BurgerDrawer /> */}
        <CustomTabs tabs={tabs} />
      </Group>
    </header>
  );
};
export default Header;
