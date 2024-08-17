import { Group } from '@mantine/core';
import classes from '../../styles/Header.module.css';
import CustomTabs from '../atoms/CustomTabs';
// import BurgerDrawer from '../molecules/BurgerDrawer';

const tabs = ['Home', 'Trend'];

const HeaderTabs = () => {
  return (
    <header className={classes.header}>
      <Group>
        {/* <BurgerDrawer /> */}
        <CustomTabs defaultValue="Home" tabs={tabs} />
      </Group>
    </header>
  );
};
export default HeaderTabs;
