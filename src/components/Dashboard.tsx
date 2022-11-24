import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import NotVerified from "./NotVerified";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);
  const user = null;

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // });

  const notes = [
    {
      name: "Note 1",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quas assumenda adipisci veritatis eligendi rem obcaecati. Id architecto beatae similique enim sit! Temporibus unde accusamus iure fugit ut ipsa amet.",
    },
    {
      name: "Note 2",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quas assumenda adipisci veritatis eligendi rem obcaecati. Id architecto beatae similique enim sit! Temporibus unde accusamus iure fugit ut ipsa amet.",
    },
    {
      name: "Note 3",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quas assumenda adipisci veritatis eligendi rem obcaecati. Id architecto beatae similique enim sit! Temporibus unde accusamus iure fugit ut ipsa amet.",
    },
    {
      name: "Note 4",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quas assumenda adipisci veritatis eligendi rem obcaecati. Id architecto beatae similique enim sit! Temporibus unde accusamus iure fugit ut ipsa amet.",
    },
  ];

  return (
    <Box bg="#FAFAFA" height="100vh">
      {!isVerified && <NotVerified verificationLink="https:facebook.com" />}
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
      </Container>
    </Box>
  );
};

export default Dashboard;
