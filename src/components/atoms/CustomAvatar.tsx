import { Avatar } from '@mantine/core';
import classes from '../../styles/CustomAvatar.module.css';
type props = {
  name: string;
};

const CustomAvatar = (props: props) => {
  const { name } = props;
  let className;
  if (name === '1') {
    className = classes.gold;
  } else if (name === '2') {
    className = classes.silver;
  } else if (name === '3') {
    className = classes.bronze;
  } else {
    className = classes.others; // 他の名前のときはデフォルトのスタイルを適用
  }
  return <Avatar key={name} name={name} color="black" className={className} />;
};
export default CustomAvatar;
