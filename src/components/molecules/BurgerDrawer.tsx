import { useDisclosure } from '@mantine/hooks';
import CustomBurger from '../atoms/CustomBurger';
import CustomDrawer from '../atoms/CustomDrawer';

const BugerDrawer = () => {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <CustomDrawer opened={opened} closed={close}>
        {/* Drawer content */}
      </CustomDrawer>

      <CustomBurger opened={opened} toggle={toggle} />
    </>
  );
};
export default BugerDrawer;
