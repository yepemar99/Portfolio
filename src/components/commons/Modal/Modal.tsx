import {
  Box,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useBreakpointValue,
  UseDisclosureProps,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";

//Components

interface IProps {
  statusModal: UseDisclosureProps;
}

const ModalP: React.FC<IProps> = ({ children, statusModal }) => {
  const dispatch = useDispatch();

  const movilView: boolean = useBreakpointValue({ base: true, xl: false });
  return (
    <Box sx={{ maxHeight: "100px" }}>
      <Modal isOpen={statusModal.isOpen} onClose={statusModal.onClose}>
        <ModalOverlay />

        <ModalContent
          sx={{
            backgroundColor: "rgb(0,0,0,0)",
            maxWidth: `${movilView ? "98vw" : "60vw"}`,
            maxHeight: "85vh",
            position: "relative",
          }}
        >
          <ModalCloseButton
            sx={{
              border: "2px solid",
              borderColor: "#2D628F",
              zIndex: "999",
              position: "absolute",
              top: "20px",
              right: "10px",
            }}
          />
          <Box
            w={"100%"}
            height={"100%"}
            borderRadius={"10px"}
            bg={"buttonColor"}
            sx={{
              overflowY: "scroll",
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {children}
          </Box>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ModalP;
