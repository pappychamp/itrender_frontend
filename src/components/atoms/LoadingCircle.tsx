import { Loader } from '@mantine/core';
import classes from '@/src/styles/LoadingCircle.module.css';

const LoadingCircle = () => {
  return (
    <div className={`${classes['loader-section']}`}>
      <Loader color="blue" type="bars" size={50} data-testid="loading-circle" />
    </div>
  );
};

export default LoadingCircle;
