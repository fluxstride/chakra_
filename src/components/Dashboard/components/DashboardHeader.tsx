import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Container,
  Flex,
  Center,
  Heading,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { IUser } from "../../../@types";
import { authContext } from "../../../contexts/authContext";
import NotVerified from "./NotVerified";

const DashboardHeader = () => {
  const navigate = useNavigate();
  const {
    dispatch,
    state: { user },
  } = useContext(authContext);
  const authUser: IUser = JSON.parse(user);

  return (
    <>
      {authUser?.email_verification_token && (
        <NotVerified verificationToken={authUser.email_verification_token} />
      )}

      <Container maxW={1600} bg="#fff">
        <Flex height="72px" px={2} justifyContent="space-between">
          <Center>
            <Heading size="md">Dashboard</Heading>
          </Center>
          <Center>
            <Menu>
              <MenuButton
                bg="transparent"
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                John Jones
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => {
                    dispatch({ type: "LOGOUT" });
                    navigate("/login");
                  }}
                  color="#ff0000"
                >
                  Log Out
                </MenuItem>
              </MenuList>
            </Menu>
          </Center>
        </Flex>
      </Container>
    </>
  );
};

export default DashboardHeader;
