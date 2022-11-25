import { useState } from "react";
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
import PasswordValidationSignals from "./PasswordValidationSignals";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [PasswordValidations, setPasswordValidations] = useState({
    hasUpperCase: {
      status: false,
      message: "Contains at least one uppercase letter",
    },
    hasMinimumLength: {
      status: false,
      message: "Contains eight characters",
    },
    hasANumber: {
      status: false,
      message: "Contains at least one number",
    },
    hasSpecialCharacter: {
      status: false,
      message: "Contains at least one symbol",
    },
  });

  const handleClick = () => setShowPassword(!showPassword);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const handlePasswordChange = ({ target: { value } }: any) => {
    setPasswordValidations((prev) => ({
      ...prev,
      hasMinimumLength: {
        ...prev.hasMinimumLength,
        status: value.match(/[^ ]{8,16}$/),
      },
      hasSpecialCharacter: {
        ...prev.hasSpecialCharacter,
        status: value.match(/(?=.*?[#?!@$%^&*-])/),
      },
      hasUpperCase: {
        ...prev.hasUpperCase,
        status: value.match(/(?=.*?[A-Z])/),
      },
      hasANumber: {
        ...prev.hasANumber,
        status: value.match(/(?=.*?[0-9])/),
      },
    }));
  };

  const onSubmit = (data: any) => {
    console.log(data);

    // signup(data);
    // getItems();
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
                  {...register("first_name", {
                    required: "First Name is required!",
                  })}
                />
                <FormErrorMessage>
                  <>{errors?.first_name && errors.first_name.message}</>
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
                  {...register("last_name", {
                    required: "Last Name is required!",
                  })}
                />
                <FormErrorMessage>
                  <>{errors?.last_name && errors.last_name.message}</>
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

            <FormControl isInvalid={errors?.password && true}>
              <FormLabel mb={0} fontWeight="semibold">
                Password
              </FormLabel>
              <InputGroup>
                <Input
                  borderWidth="1.2px"
                  placeholder="Type your password address here"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                      message:
                        "Password does not meet the minimum requirements!",
                    },
                    onChange: handlePasswordChange,
                  })}
                />
                <InputRightElement onClick={handleClick}>
                  {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </InputRightElement>
              </InputGroup>

              <FormErrorMessage>
                <>{errors?.password && errors.password.message}</>
              </FormErrorMessage>

              <Box textAlign="start" mt={2}>
                {Object.keys(PasswordValidations).map((type) => (
                  <PasswordValidationSignals
                    key={type}
                    {...{ PasswordValidations, type }}
                  />
                ))}
              </Box>
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
