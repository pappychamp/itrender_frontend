import { AspectRatio, Container, Grid, Text } from '@mantine/core';
import classes from '../../styles/home/YoutubeContent.module.css';
import parse from 'html-react-parser';
import CustomAvatar from '../atoms/CustomAvatar';
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

const YoutubeContent = ({ data }: props) => {
  return (
    <>
      <Grid>
        {data.contents.map((item, index) => {
          return (
            <Grid.Col
              key={index}
              span={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 3 }}
            >
              <Container className={`${classes['main-container']}`}>
                <Container className={`${classes['avatar-container']}`}>
                  <CustomAvatar name={item.ranking} />
                  <Text className={`${classes['title-text']}`}>
                    {item.title}
                  </Text>
                </Container>
                <AspectRatio ratio={16 / 9}>
                  {parse(item.embed_html)}
                </AspectRatio>
              </Container>
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
};
export default YoutubeContent;
