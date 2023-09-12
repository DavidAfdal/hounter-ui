type IconSvg = {
  src: string;
  alt: string;
  size: number;
};

const IconsSvg = ({ src, alt, size }: IconSvg) => {
  return <img src={src} alt={alt} width={size} height={size} />;
};

export default IconsSvg;
