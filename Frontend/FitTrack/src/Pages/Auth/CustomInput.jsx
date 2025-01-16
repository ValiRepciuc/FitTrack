import { Input } from "@chakra-ui/react";

const CustomInput = ({ placeholder, name, value, type = "text", onChange }) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      type={type}
      fontFamily="second"
      color={"white"}
      fontWeight="bold"
      _focus={{
        borderColor: "rgb(127, 246, 114)",
        boxShadow: "0 0 0 3px rgb(127, 246, 114)",
      }}
    />
  );
};

export default CustomInput;
