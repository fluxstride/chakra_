import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import PageLink from "./common/PageLink";

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClick = () => setShowPassword(!showPassword);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: {}) => {
    console.log({ data });
  };

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
        <Text as="h1" fontSize="2xl" fontWeight="semibold">
          Create an Account
        </Text>
        <Text mb=".7rem">
          Already have an account?
          <PageLink to="/login ">
            <Link as="span" ml={1} color="blue.600" fontWeight="semibold">
              Log in
            </Link>{" "}
          </PageLink>
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap={4} direction="column">
            <Flex mt="1.5rem" gap={2}>
              <FormControl isInvalid={errors?.firstName && true}>
                <FormLabel mb={0} fontWeight="semibold">
                  First name
                </FormLabel>
                <Input
                  borderWidth="1.2px"
                  placeholder="First name"
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                />
                <FormErrorMessage>
                  <>{errors?.firstName && errors.firstName.message}</>
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors?.lastName && true}>
                <FormLabel mb={0} fontWeight="semibold">
                  Last Name
                </FormLabel>
                <Input
                  borderWidth="1.2px"
                  placeholder="Last Name"
                  type="text"
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                />
                <FormErrorMessage>
                  <>{errors?.lastName && errors.lastName.message}</>
                </FormErrorMessage>
              </FormControl>
            </Flex>

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

export default SignUp;
