import { Card, Text, Image, Box } from '@mantine/core';
import CustomAvatar from '../../../../components/atoms/CustomAvatar';
import classes from '../../styles/CardContent.module.css';
import { SiteItem } from '../../../../types/trendData';
import noImage from '../../../../assets/noimage.png';
import { useMediaQuery } from '@mantine/hooks';
import theme from '../../../../constants/theme';

type props = {
  data: SiteItem;
};

const CardContent = ({ data }: props) => {
  const { title, ranking, url, embed_html } = data;
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints?.sm})`);
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
          <Image
            src={embed_html ? embed_html : noImage}
            className={`${classes['content-image']}`}
          />
        </Box>
        <Box className={`${classes['title-box']}`}>
          <Text
            className={`${classes['title-text']}`}
            truncate="end"
            lineClamp={mobile ? 2 : 3}
          >
            {title}
          </Text>
        </Box>
      </Card>
    </a>
  );
};
export default CardContent;
