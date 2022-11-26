import { Alert, AlertDescription, Center, Link, Text } from "@chakra-ui/react";
import { API } from "../../../helpers/api";
import { endpoint } from "../../../utils";

const NotVerified = ({ verificationToken }: { verificationToken: string }) => {
  const resendVerificationToken = async () => {
    try {
      const response = await API.post(
        endpoint.user + "/verification-email/send",
        {
          token: verificationToken,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Alert status="warning">
      <AlertDescription>
        <Center width="100vw">
          <Text textAlign="center">
            You have not verified your email address. Click
            <Link color="blue.500" onClick={resendVerificationToken}>
              {" "}
              here{" "}
            </Link>{" "}
            to resend verification link.
          </Text>
        </Center>
      </AlertDescription>
    </Alert>
  );
};

export default NotVerified;
