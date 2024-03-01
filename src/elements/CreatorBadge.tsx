interface Props {
  height?: number;
  width?: number;
}

export const CreatorBadge = (props: Props) => {
  const { height = 18, width = 18 } = props;

  return (
    <img
      style={{ width: `${width}px`, height: `${height}px` }}
      src="https://app.fanfix.io/static/images/favicon.png"
      alt="Fanfix Icon"
    />
  );
};
