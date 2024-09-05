import { Alert, DefaultMantineColor } from '@mantine/core';

type props = {
  icon: React.ReactNode;
  title: string;
  message: string;
  color: DefaultMantineColor;
};
const CustomAlert = ({ icon, title, message, color }: props) => {
  return (
    <Alert variant="light" color={color} radius="md" title={title} icon={icon}>
      {message}
    </Alert>
  );
};
export default CustomAlert;
