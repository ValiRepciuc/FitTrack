import { Input } from "@chakra-ui/react";

const CustomInput = ({ placeholder, value, onChange }) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
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
