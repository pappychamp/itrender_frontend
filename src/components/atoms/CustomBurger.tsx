import { Burger } from '@mantine/core';

type props = {
  opened: boolean;
  toggle: () => void;
};

const CustomBurger = (props: props) => {
  const { opened, toggle } = props;
  return (
    <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
  );
};
export default CustomBurger;
