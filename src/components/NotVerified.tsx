import { Alert, AlertDescription, Center, Link, Text } from "@chakra-ui/react";

const NotVerified = ({ verificationLink }: { verificationLink: string }) => {
  return (
    <Alert status="warning">
      <AlertDescription>
        <Center width="100vw">
          <Text>
            You have not verified your email address. Click{" "}
            <Link color="blue.500" href={verificationLink}>
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
