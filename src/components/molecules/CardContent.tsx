import { Card, Text, Container, Image } from '@mantine/core';
import CustomAvatar from '../atoms/CustomAvatar';
import classes from '../../styles/home/CardContent.module.css';
import qiitaImage from '../../assets/qiita.png';
import zennImage from '../../assets/zenn.png';
import { SiteItem } from '../../types/trendData';

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
        <Container className={`${classes['avatar-container']}`}>
          <CustomAvatar name={String(ranking) ?? '0'} />
        </Container>
        <Container className={`${classes['content-container']}`}>
          <Image src={srcImage} className={`${classes['content-image']}`} />
        </Container>
        <Container className={`${classes['title-container']}`}>
          <Text className={`${classes['title-text']}`} truncate="end">
            {title}
          </Text>
        </Container>
        {/* <Container className={`${classes['badge-container']}`}>
          <Group className={`${classes['badge-group']}`}>
            {tags.map((tag, index) => {
              return <CustomBadge name={tag.name} key={index} size="md" />;
            })}
          </Group>
        </Container> */}
      </Card>
    </a>
  );
};
export default CardContent;
