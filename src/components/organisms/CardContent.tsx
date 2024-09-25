import { Card, Text, Image, Box } from '@mantine/core';
import CustomAvatar from '../atoms/CustomAvatar';
import classes from '../../styles/CardContent.module.css';
import { SiteItem } from '../../types/trendData';
import noImage from '../../assets/noimage.png';
import TagContent from '../molecules/TagContent';

type props = {
  data: SiteItem;
  mobile: boolean | undefined;
  isRanking?: boolean;
};

const CardContent = ({ data, mobile, isRanking = true }: props) => {
  const { title, url, ranking, image_url, tags } = data;
  return (
    <Card shadow="sm" radius="md" withBorder className={classes.card}>
      <Box className={`${classes['head-box']}`}>
        {isRanking ? <CustomAvatar name={String(ranking)} /> : <></>}
        {tags.length === 0 ? (
          <></>
        ) : (
          <div className={`${classes['head-tag']}`}>
            <TagContent tags={tags} />
          </div>
        )}
      </Box>
      <Box className={`${classes['main-box']}`}>
        <a
          href={url ?? '#'}
          style={{ textDecoration: 'none', color: '#000000' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text
            className={`${classes['main-text']}`}
            truncate="end"
            lineClamp={mobile ? 3 : 4}
          >
            {title}
          </Text>
        </a>
        <Image
          src={image_url}
          className={`${classes['main-image']}`}
          fallbackSrc={noImage}
          alt="contents image"
        />
      </Box>
    </Card>
  );
};
export default CardContent;
