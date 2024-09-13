import { Image } from '@mantine/core';
import classes from '../styles/Eyecatch.module.css';
import eyecatch from '../../../assets/eyechatch.png';

const Eyecatch = () => {
  return <Image src={eyecatch} className={`${classes['image']}`}></Image>;
};

export default Eyecatch;
