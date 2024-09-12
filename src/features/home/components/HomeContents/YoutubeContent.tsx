import { AspectRatio, Container, Grid, Text } from '@mantine/core';
import classes from '../../styles/YoutubeContent.module.css';
import parse from 'html-react-parser';
import CustomAvatar from '../../../../components/atoms/CustomAvatar';
import { SiteItem } from '../../../../types/trendData';

type props = {
  data: SiteItem[];
};

const YoutubeContent = ({ data }: props) => {
  return (
    <>
      <Grid>
        {data.slice(0, 10).map((item, index) => {
          return (
            <Grid.Col
              key={index}
              span={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
            >
              <Container className={`${classes['main-container']}`}>
                <Container className={`${classes['avatar-container']}`}>
                  <CustomAvatar name={String(item.ranking)} />
                  <Text className={`${classes['title-text']}`}>
                    {item.title}
                  </Text>
                </Container>
                <AspectRatio ratio={16 / 9}>
                  {parse(item.embed_html ?? '#')}
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
