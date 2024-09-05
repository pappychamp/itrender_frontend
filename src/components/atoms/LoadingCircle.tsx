import { Loader } from '@mantine/core';
import classes from '../../styles/LoadingCircle.module.css';

const LoadingCircle = () => {
  return (
    <div className={`${classes['loader-section']}`}>
      <Loader color="blue" type="bars" size={50} />
    </div>
  );
};

export default LoadingCircle;
