import { IconProps } from './IconProps';

export const Union = ({ size }: IconProps) => {
  return (
    <img
      src="https://app.fanfix.io/static/icons/union.png"
      alt="union"
      style={{
        width: size || '24px',
        height: size || '24px'
      }}
    />
  );
};
