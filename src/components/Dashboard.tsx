import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Circle,
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { notes } from "../data";
import CreateItemModal from "./CreateItemModal";
import NotVerified from "./NotVerified";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const user = null;

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // });

  return (
    <Box bg="#FAFAFA" height="100vh">
      {/* check email verification */}
      {!isVerified && <NotVerified verificationLink="https:facebook.com" />}

      {/* modal to create a new item */}
      <CreateItemModal {...{ isOpen, onClose }} />
      <Box bg="#fff">
        <Container maxW={1600}>
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
      </Box>
      <Container maxW={1600}>
        <Flex flexWrap="wrap" p={2} gap={6} mt={4}>
          {notes.map(({ name, description }, index) => (
            <Box
              key={name}
              width="md"
              bg="#fff"
              p={6}
              borderWidth={2}
              borderColor="#F0F0F0"
              borderRadius=".5rem"
              flexGrow={1}
            >
              <Box mb={2}>
                <Text>Name</Text>
                <Text fontWeight="bold">{name}</Text>
              </Box>
              <Text color="#555658">Description</Text>
              <Text fontSize="lg">{description}</Text>
              <Flex gap={4} float="right" mt={6}>
                <Button variant="outline">Edit</Button>
                <Button bg="#555658" color="#fff">
                  Delete
                </Button>
              </Flex>
            </Box>
          ))}
        </Flex>
        <Circle
          bg="#004CBD"
          size="70px"
          position="fixed"
          bottom="40px"
          right="40px"
          zIndex={2}
          shadow="md"
          onClick={onOpen}
          cursor="pointer"
        >
          <AddIcon color="#Fff" />
        </Circle>
      </Container>
    </Box>
  );
};

export default Dashboard;
