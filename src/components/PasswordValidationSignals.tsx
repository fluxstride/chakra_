import { Circle, Flex, Text } from "@chakra-ui/react";

const PasswordValidationSignals = ({ PasswordValidations, type }: any) => {
  return (
    <Flex alignItems="center">
      <Circle
        bg={PasswordValidations[type].status ? "#07982F" : "#fff"}
        border={`2px solid ${
          PasswordValidations[type].status ? "#07982F" : "#999B9F"
        } `}
        size="10px"
        mr={2}
      />
      <Text color={PasswordValidations[type].status ? "#07982F" : "#999B9F"}>
        {PasswordValidations[type].message}
      </Text>
    </Flex>
  );
};

export default PasswordValidationSignals;
