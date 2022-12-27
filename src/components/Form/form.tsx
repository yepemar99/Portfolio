import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  closeAlertStatus,
  openAlertStatus,
} from "../../redux/alertStatusSlice/alertStatusSlice";
import { userSchema } from "../../validations/validations";
const Form = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const form = useRef();
  const dispatch = useDispatch();

  const closeAlert = () => {
    dispatch(closeAlertStatus());
    console.log("desactivate");
  };

  const send = async (e) => {
    e.preventDefault();
    let formData = {
      to_name: e.target[0].value,
      from_name: e.target[1].value,
      message: e.target[2].value,
    };
    const isValid = await userSchema.isValid(formData);
    if (isValid) {
      emailjs
        .sendForm(
          "service_iq3urxd",
          "template_4vije2q",
          form.current,
          "3BUIs0kQ2f-vJ6zWe"
        )
        .then(
          (result) => {
            console.log(result.text);
            dispatch(
              openAlertStatus({
                message: "message sent successfully",
                valid: "success",
              })
            );
            setTimeout(closeAlert, 3000);
          },
          (error) => {
            console.log(error.text);
            console.log("no send");
            dispatch(
              openAlertStatus({
                message: "Error, Message not sent ",
                valid: "error",
              })
            );
            setTimeout(closeAlert, 3000);
          }
        );
    } else {
      console.log("No valido");
      dispatch(
        openAlertStatus({
          message: "Please, Fill in all fields",
          valid: "error",
        })
      );
      setTimeout(closeAlert, 3000);
    }
  };

  return (
    <Flex width={"100%"}>
      <Box mt={2} width={"100%"}>
        <form ref={form} onSubmit={send}>
          <VStack spacing={4} align="flex-end">
            <FormControl>
              <Input
                id="to_name"
                name="to_name"
                type="text"
                border={"none"}
                borderRadius={"1px"}
                bg={"buttonColor"}
                placeholder="Name"
                focusBorderColor="secondary"
                _hover={{ backgroundColor: "buttonColor" }}
              />
            </FormControl>
            <FormControl>
              <Input
                id="from_name"
                name="from_name"
                type="email"
                borderRadius={"1px"}
                border={"none"}
                bg={"buttonColor"}
                placeholder="Email"
                focusBorderColor="secondary"
                _hover={{ backgroundColor: "buttonColor" }}
              />
            </FormControl>
            <FormControl>
              <Textarea
                id="message"
                name="message"
                placeholder="Write your message"
                size="sm"
                bg={"buttonColor"}
                border={"none"}
                _hover={{ backgroundColor: "buttonColor" }}
                borderRadius={"1px"}
                focusBorderColor="secondary"
              />
            </FormControl>

            <Button
              type="submit"
              border={"3px solid"}
              borderColor={"secondary"}
              bg={"bg"}
              _hover={{ backgroundColor: "buttonColor" }}
              borderRadius="3px"
              padding="25px 10px"
            >
              Send Message
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default Form;
