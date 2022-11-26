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
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { authContext } from "../../../contexts/authContext";
import NotVerified from "./NotVerified";

const DashboardHeader = () => {
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  return (
    <>
      {!isVerified && <NotVerified verificationLink="https:facebook.com" />}

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
