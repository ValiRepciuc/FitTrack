import React from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

function PasswordInput({ value, onChange, name }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        name={name}
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
        value={value}
        onChange={onChange}
        fontFamily="second"
        fontWeight="bold"
        _focus={{
          borderColor: "rgb(127, 246, 114)",
          boxShadow: "0 0 0 3px rgb(127, 246, 114)",
        }}
        color={"white"}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;
