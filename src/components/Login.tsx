import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import PageLink from "./common/PageLink";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClick = () => setShowPassword(!showPassword);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data: {}) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <Center bg="#FAFAFA" height="100vh" color="#000" p={4}>
      <Box
        textAlign="center"
        p="4"
        bg="#Fff"
        width="2xl"
        borderRadius=".5rem"
        borderColor="#F0F0F0"
        borderWidth="2px"
      >
        <Heading size="md"> Login</Heading>
        <Text mb="2rem">
          If you have no account,
          <PageLink to="/signup">
            <Link as="span" ml={1} color="blue.600" fontWeight="semibold">
              Sign up
            </Link>{" "}
          </PageLink>
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap={4} direction="column">
            <FormControl isInvalid={errors?.email && true}>
              <FormLabel mb={0} fontWeight="semibold">
                Email
              </FormLabel>
              <Input
                borderWidth="1.2px"
                placeholder="Type your email address here"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/,
                    message: "Wrong email format!",
                  },
                })}
              />
              <FormErrorMessage>
                <>{errors?.email && errors.email.message}</>
              </FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel mb={0} fontWeight="semibold">
                Password
              </FormLabel>
              <InputGroup>
                <Input
                  borderWidth="1.2px"
                  placeholder="Type your password address here"
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement onClick={handleClick}>
                  {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              bg="#B7BCC3"
              color="#fff"
              type="submit"
              isLoading={isSubmitting}
            >
              Sign Up
            </Button>
          </Flex>
        </form>
      </Box>
    </Center>
  );
};

export default Login;
