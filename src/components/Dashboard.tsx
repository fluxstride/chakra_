import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import NotVerified from "./NotVerified";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);
  const user = null;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  return (
    <Box bg="#FAFAFA" height="100vh">
      {!isVerified && <NotVerified verificationLink="https:facebook.com" />}
      <Flex height="72px" bg="#fff" px={[4, 10]} justifyContent="space-between">
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
      Dashboard
    </Box>
  );
};

export default Dashboard;
