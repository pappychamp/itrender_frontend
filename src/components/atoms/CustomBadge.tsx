import { Badge } from '@mantine/core';
type props = {
  name: string;
  variant?: string;
  radius?: string;
  leftSection?: React.ReactNode; // バッジの左に表示するアイコン
  rightSection?: React.ReactNode; // バッジの右に表示するアイコン
  onClick?: () => void; // クリックしたときの関数
  color?: string;
  size?: string;
  className?: string; // カスタムCSSクラス
};

const CustomBadge = ({
  name,
  variant,
  radius,
  leftSection,
  rightSection, // デフォルトはXアイコン
  onClick,
  color = 'indigo',
  size = 'lg',
  className,
}: props) => {
  return (
    <Badge
      variant={variant}
      radius={radius}
      leftSection={leftSection}
      rightSection={rightSection}
      className={className}
      color={color}
      onClick={onClick}
      size={size}
      data-testid="custom-badge"
    >
      {name}
    </Badge>
  );
};
export default CustomBadge;
