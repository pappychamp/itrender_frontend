import { Container, Image, Title, Text } from '@mantine/core';
import imagesrc from '../../assets/desktop.png';
import classes from '../../styles/home/Eyecatch.module.css';
const Eyecatch = () => {
  return (
    <>
      <Container className={`${classes['title-container']}`}>
        <Text className={`${classes['title-text']}`}>今のトレンドが分かる</Text>
        <Text className={`${classes['title-text']}`}>
          トレンドまとめサービス
        </Text>
        <Title className={classes.title}>Trender</Title>
      </Container>
      <Container className={`${classes['image-container']}`}>
        <Image src={imagesrc} className={classes.image} />
      </Container>
    </>
  );
};

export default Eyecatch;
