import { getALLTrendData } from '../../api/dataFetcher';
import { SiteData } from '../../types/trendApi';
import { trendDataFormat } from '../format/dataFormatter';

type SetTrend = (value: SiteData | null) => void;

const fetchAllTrendData = async (date: string, setTrend: SetTrend) => {
  try {
    const trendData = await getALLTrendData(date);
    const formattedData = trendDataFormat(trendData);
    setTrend(formattedData);
  } catch (error) {
    console.log(error);
  }
};
export default fetchAllTrendData;
