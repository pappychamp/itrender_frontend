import { IconCircleX } from '@tabler/icons-react';
import CustomAlert from '../atoms/CustomAlert';
import Contact from '@/src/features/contact/Contact';

const ErrorBoundaryFallback = () => {
  return (
    <>
      <CustomAlert
        icon={<IconCircleX />}
        title="エラー"
        message="予期しないエラーが発生しました。下記よりご連絡ください。"
        color="red"
      />
      <Contact />
    </>
  );
};
export default ErrorBoundaryFallback;
