import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import PageLink from "./common/PageLink";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClick = () => setShowPassword(!showPassword);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: {}) => {
    console.log(data);
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
        <Heading size="md"> Create an Account</Heading>
        <Text>
          If you have no account,
          <PageLink to="/signup">
            <Link as="span" ml={1} color="blue.600" fontWeight="semibold">
              Sign up
            </Link>{" "}
          </PageLink>
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap={4} direction="column">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <FormControl isRequired>
                  <FormLabel mb={0} fontWeight="semibold">
                    Email
                  </FormLabel>
                  <Input
                    borderWidth="1.2px"
                    placeholder="Type your email address here"
                    type="email"
                    {...field}
                  />
                </FormControl>
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <FormControl isRequired>
                  <FormLabel mb={0} fontWeight="semibold">
                    Password
                  </FormLabel>
                  <InputGroup>
                    <Input
                      borderWidth="1.2px"
                      placeholder="Type your password address here"
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                    <InputRightElement onClick={handleClick}>
                      {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              )}
            />
            <Button bg="#B7BCC3" color="#fff" type="submit">
              Sign Up
            </Button>
          </Flex>
        </form>
      </Box>
    </Center>
  );
};

export default Login;
