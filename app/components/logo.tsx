import Image from "next/image";

interface LogoProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}
const imageStyle = {
  borderRadius: "50%",
  border: "0.5px solid white",
  animation: "glowing 2s ease-in-out infinite",
  boxShadow: "0 0 5px white",
};

const Logo: React.FC<LogoProps> = ({ src, width, height, alt }) => {
  return <Image src={src} width={width} height={height} alt={alt} style={imageStyle} />;
};

export default Logo;
