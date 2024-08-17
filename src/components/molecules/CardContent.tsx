import { Card, Text, Container, Group, Image } from '@mantine/core';
import CustomAvatar from '../atoms/CustomAvatar';
import CustomBadge from '../atoms/CustomBadge';
import classes from '../../styles/home/CardContent.module.css';
import qiitaImage from '../../assets/qiita.png';
import zennImage from '../../assets/zenn.png';

type item = {
  sitename: string;
  title: string;
  link: string;
  tags: string[];
  ranking: string;
};
type props = {
  item: item;
};

const CardContent = ({ item }: props) => {
  const { sitename, link, title, tags, ranking } = item;
  let srcImage;
  if (sitename === 'qiita') {
    srcImage = qiitaImage;
  } else if (sitename === 'zenn') {
    srcImage = zennImage;
  }
  return (
    <a href={link} style={{ textDecoration: 'none' }}>
      <Card shadow="sm" radius="md" withBorder className={classes.card}>
        <Container className={`${classes['avatar-container']}`}>
          <CustomAvatar name={ranking} />
        </Container>
        <Container className={`${classes['content-container']}`}>
          <Image src={srcImage} className={`${classes['content-image']}`} />
        </Container>
        <Container className={`${classes['title-container']}`}>
          <Text className={`${classes['title-text']}`} truncate="end">
            {title}
          </Text>
        </Container>
        <Container className={`${classes['badge-container']}`}>
          <Group className={`${classes['badge-group']}`}>
            {tags.map((tag, index) => {
              return <CustomBadge name={tag} key={index} />;
            })}
          </Group>
        </Container>
      </Card>
    </a>
  );
};
export default CardContent;
