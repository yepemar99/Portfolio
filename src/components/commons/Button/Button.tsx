import { Button } from "@chakra-ui/react";

interface IProps {
  children: JSX.Element;
  color?: string;
  padding?: string;
  borderRadius?: string;
  height?: string;
  type?: "button" | "submit" | "reset";
}

const ButtonS: React.FC<IProps> = (props) => {
  return (
    <Button
      w={"100%"}
      p={`${props.padding ? props.padding : "10px 10px"}`}
      borderRadius={`${props.borderRadius ? props.borderRadius : "8px"}`}
      color={"primary"}
      bg={`${props.color ? props.color : "buttonColor"}`}
      height={props.height ? props.height : "2rem"}
      _hover={{ transform: "scale(1.1)" }}
      overflow={"hidden"}
      type={!props.type ? "button" : props.type}
    >
      {props.children}
    </Button>
  );
};

export default ButtonS;
