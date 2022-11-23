import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
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

const SignUp = () => {
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
        <Text as="h1" fontSize="2xl" fontWeight="semibold">
          Create an Account
        </Text>
        <Text>
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
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <FormControl isRequired>
                    <FormLabel mb={0} fontWeight="semibold">
                      First name
                    </FormLabel>
                    <Input
                      borderWidth="1.2px"
                      placeholder="First name"
                      {...field}
                    />
                  </FormControl>
                )}
              />

              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <FormControl isRequired>
                    <FormLabel mb={0} fontWeight="semibold">
                      Last name
                    </FormLabel>
                    <Input
                      borderWidth="1.2px"
                      placeholder="Last name"
                      {...field}
                    />
                  </FormControl>
                )}
              />
            </Flex>

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

export default SignUp;
