import { Box, SystemStyleObject } from "@chakra-ui/react";
import Image from "next/image";
import { INextImage } from "../../../types/interfaces";

interface IProps {
  src: string | INextImage;
  alt?: string;
  quality?: number;
  unoptimized?: boolean;
  sxProps?: SystemStyleObject;
}

const Img: React.FC<IProps> = (props) => {
  return (
    <Box
      sx={props.sxProps}
      as={Image}
      objectFit="contain"
      backgroundPosition={"center"}
      layout="fill"
      src={props.src}
      alt={""}
      quality={props.quality || 80}
      placeholder="blur"
      blurDataURL={typeof props.src === "string" ? props.src : props.src.src}
      unoptimized={props.unoptimized}
    />
  );
};

export default Img;
