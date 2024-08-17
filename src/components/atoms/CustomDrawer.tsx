import { Drawer } from '@mantine/core';

type props = {
  opened: boolean;
  closed: () => void;
};
const CustomDrawer = (props: props) => {
  const { opened, closed } = props;

  return (
    <>
      <Drawer opened={opened} onClose={closed} title="Authentication">
        {/* Drawer content */}
      </Drawer>
    </>
  );
};
export default CustomDrawer;
