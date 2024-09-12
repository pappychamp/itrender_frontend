import { Card, Text, Image, Box } from '@mantine/core';
import CustomAvatar from '../../../../components/atoms/CustomAvatar';
import classes from '../../styles/CardContent.module.css';
import qiitaImage from '../../../../assets/qiita.png';
import zennImage from '../../../../assets/zenn.svg';
import { SiteItem } from '../../../../types/trendData';

type props = {
  data: SiteItem;
};

const CardContent = ({ data }: props) => {
  const { title, ranking, url, site } = data;
  let srcImage;
  if (site.name === 'qiita') {
    srcImage = qiitaImage;
  } else if (site.name === 'zenn') {
    srcImage = zennImage;
  }
  return (
    <a
      href={url ?? '#'}
      style={{ textDecoration: 'none' }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card shadow="sm" radius="md" withBorder className={classes.card}>
        <Box className={`${classes['avatar-box']}`}>
          <CustomAvatar name={String(ranking)} />
        </Box>
        <Box className={`${classes['content-box']}`}>
          <Image src={srcImage} className={`${classes['content-image']}`} />
        </Box>
        <Box className={`${classes['title-box']}`}>
          <Text
            className={`${classes['title-text']}`}
            truncate="end"
            lineClamp={4}
          >
            {title}
          </Text>
        </Box>
      </Card>
    </a>
  );
};
export default CardContent;
