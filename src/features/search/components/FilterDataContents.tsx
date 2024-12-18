import CustomAlert from '../../../components/atoms/CustomAlert';
import {
  IconCircleX,
  IconInfoCircle,
  IconCircleCheck,
} from '@tabler/icons-react';
import LoadingCircle from '@/src/components/atoms/LoadingCircle';
import Content from './FilterDataContents/Content';
import { useFilterWords } from '../hooks/useFilterWords.ts';
import { ApiData } from '../types/api';
import CustomPagination from './FilterDataContents/CustomPagination';
import classes from '../styles/FilterDataContents.module.css';
import { Text } from '@mantine/core';

type props = {
  data: ApiData | null;
  hasSearched: boolean;
  loading: boolean;
  error: Error | null;
  message: string;
  mobile: boolean | undefined;
};
const FilterDataContents = ({
  data,
  hasSearched,
  loading,
  error,
  message,
  mobile,
}: props) => {
  const { state } = useFilterWords();

  // ローディング画面
  if (loading) return <LoadingCircle />;
  // エラー画面
  if (error)
    return (
      <CustomAlert
        icon={<IconCircleX />}
        title="エラー"
        message="サーバー内部エラーが発生しました。後ほど再度お試しください。"
        color="red"
      />
    );
  // 初期画面
  if (!hasSearched || !data)
    return (
      <CustomAlert
        icon={<IconCircleCheck />}
        message="記事,タグ,サイト名から検索します。"
        color="green"
      />
    );
  // 検索したがデータが無いときの画面
  if (data && !data.total)
    return (
      <CustomAlert
        icon={<IconInfoCircle />}
        message={`${state.words}に一致するものが見つかりませんでした`}
        color="orange"
      />
    );
  return (
    <>
      {message ? (
        // validationアウトの場合
        <CustomAlert
          icon={<IconInfoCircle />}
          message={`${message}`}
          color="orange"
        />
      ) : (
        <></>
      )}
      <Text size="lg">{data.total}件の検索結果</Text>
      <Content data={data.items} mobile={mobile} />
      <CustomPagination
        activePage={data.page}
        totalPage={data.pages}
        size={mobile ? 'lg' : 'xl'}
        siblings={mobile ? 0 : 1}
        className={`${classes['pagination']}`}
      />
    </>
  );
};
export default FilterDataContents;
