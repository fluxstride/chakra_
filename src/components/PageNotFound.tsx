import { Center, Link, Text } from "@chakra-ui/react";
import PageLink from "./common/PageLink";

const PageNotFound = () => {
  return (
    <Center bg="gray.100" h="100vh" flexDirection="column">
      <Text as="h2" fontSize={["2xl", "3xl", "3rem"]} fontWeight="semibold">
        <Text as="span" color="blue.400" fontWeight="bold">
          404
        </Text>{" "}
        Page Not Found
      </Text>
      <PageLink to="/dashboard">
        <Link as="span" color="blue.600" textDecor="underline">
          Go back home
        </Link>
      </PageLink>
    </Center>
  );
};

export default PageNotFound;
