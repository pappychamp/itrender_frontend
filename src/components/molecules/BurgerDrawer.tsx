import { Burger, Drawer, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { headerTabs } from '@/src/constants/layout';
import classes from '@/src/styles/BurgerDrawer.module.css';

const BurgerDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const handleClick = () => {
    return opened ? close : open;
  };
  return (
    <>
      <Drawer
        position="left"
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size="60%"
        zIndex={1}
        padding={0}
        classNames={{ content: `${classes['drawer-section']}` }}
      >
        {headerTabs.map((tab, index) => {
          const Icon = tab.icon;
          return (
            <NavLink
              href={tab.path}
              label={tab.name}
              key={index}
              leftSection={<Icon size={32} />}
              classNames={{ label: `${classes['navlink-section']}` }}
            />
          );
        })}
      </Drawer>
      <Burger opened={opened} onClick={handleClick()} />
    </>
  );
};
export default BurgerDrawer;
