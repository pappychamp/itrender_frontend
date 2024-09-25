import { Button } from '@mantine/core';
type props = {
  name: string;
  variant?: string;
  radius?: string;
  onClick?: () => void; // クリックしたときの関数
  color?: string;
  size?: string;
  className?: string; // カスタムCSSクラス
};

const CusotmButton = ({
  name,
  variant,
  radius,
  onClick,
  color = 'indigo',
  size = 'lg',
  className,
}: props) => {
  return (
    <Button
      variant={variant}
      radius={radius}
      className={className}
      color={color}
      onClick={onClick}
      size={size}
    >
      {name}
    </Button>
  );
};
export default CusotmButton;
