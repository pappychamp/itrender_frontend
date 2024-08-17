import { Tabs } from '@mantine/core';

type props = {
  defaultValue: string;
  tabs: string[];
};

const CustomTabs = (props: props) => {
  const { defaultValue, tabs } = props;
  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab} p={20} fz={20}>
      {tab}
    </Tabs.Tab>
  ));
  return (
    <Tabs defaultValue={defaultValue}>
      <Tabs.List>{items}</Tabs.List>
    </Tabs>
  );
};

export default CustomTabs;
