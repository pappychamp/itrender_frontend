import { Badge } from '@mantine/core';
import classes from '../../styles/CustomBadge.module.css';
type props = {
  name: string;
};

const CustomBadge = (props: props) => {
  const { name } = props;
  return (
    <Badge radius="sm" className={classes.badge} size="md">
      {name}
    </Badge>
  );
};
export default CustomBadge;
