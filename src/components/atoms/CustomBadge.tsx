import { Badge } from '@mantine/core';
import classes from '../../styles/CustomBadge.module.css';
type props = {
  name: string;
  size: string;
};

const CustomBadge = (props: props) => {
  const { name, size } = props;
  return (
    <Badge radius="sm" className={classes.badge} size={size}>
      {name}
    </Badge>
  );
};
export default CustomBadge;
