import classes from '../../styles/home/Contents.module.css';
import { Container, Text } from '@mantine/core';
import CarouselContent from '../organisms/CarouselContent.tsx';
import YoutubeContent from '../organisms/YoutubeContent.tsx';

type item = {
  sitename: string;
  title: string;
  link: string;
  tags: string[];
  ranking: string;
  embed_html: string;
};

type example = {
  site: string;
  contents: item[];
};
type props = {
  data: example;
};

const HomeContents = ({ data }: props) => {
  return (
    <>
      <Container className={`${classes['site-text-container']}`}>
        <Text className={`${classes['site-text']}`}>{data.site}</Text>
      </Container>
      {data.site === 'youtube' ? (
        <YoutubeContent data={data} />
      ) : (
        <CarouselContent data={data} />
      )}
    </>
  );
};
export default HomeContents;
