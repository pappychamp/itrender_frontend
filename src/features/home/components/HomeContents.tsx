import classes from '../styles/HomeContents.module.css';
import { Box, Text } from '@mantine/core';
import CarouselContent from './HomeContents/CarouselContent.tsx';
import replaceText from '../../../utils/format/replaceText.ts';
import { SiteData, SiteKey } from '../../../types/trendData.ts';
import LoadingCircle from '../../../components/atoms/LoadingCircle.tsx';
import CustomAlert from '../../../components/atoms/CustomAlert.tsx';
import { IconCircleX } from '@tabler/icons-react';

type props = {
  data: SiteData;
  loading: boolean;
  error: Error | null;
};

const HomeContents = ({ data, loading, error }: props) => {
  // ローディング画面
  if (loading) return <LoadingCircle />;
  // エラー画面
  if (error)
    return (
      <CustomAlert
        icon={<IconCircleX />}
        title="エラー"
        message={error.message}
        color="red"
      />
    );
  return (
    <>
      {Object.entries(data).map(([key, value], index) => {
        const siteKey = key as SiteKey;
        return (
          <Box key={index} className={`${classes['main-box']}`}>
            <Text className={`${classes['site-text']}`}>
              {replaceText(siteKey)}
            </Text>
            <CarouselContent data={value} />
          </Box>
        );
      })}
    </>
  );
};
export default HomeContents;
