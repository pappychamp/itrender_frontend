import { AspectRatio, Box, Grid, Text } from '@mantine/core';
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
              span={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 3 }}
            >
              <Box className={`${classes['avatar-box']}`}>
                <CustomAvatar name={String(item.ranking)} />
                <Text className={`${classes['title-text']}`} lineClamp={1}>
                  {item.title}
                </Text>
              </Box>
              <AspectRatio ratio={16 / 9}>
                {parse(item.embed_html ?? '#')}
              </AspectRatio>
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
};
export default YoutubeContent;
