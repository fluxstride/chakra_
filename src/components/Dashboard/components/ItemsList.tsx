import { AddIcon } from "@chakra-ui/icons";
import {
  Container,
  Box,
  Flex,
  Button,
  Circle,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { IItem } from "../../../@types";
import { itemsContext } from "../../../contexts/itemsContext";
import { API } from "../../../helpers/api";
import { endpoint } from "../../../utils";
import CreateItemModal from "./CreateItemModal";

const ItemsList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dispatch, state: items } = useContext(itemsContext);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await API.get("/items");
        console.log(response.data.items);

        dispatch({ type: "FETCH_ITEMS", payload: response.data.items });
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, [dispatch]);

  const deleteItem = async (uuid: string) => {
    await API.delete(endpoint.items + "/" + uuid);

    dispatch({ type: "DELETE_ITEM", payload: { uuid } });
  };

  return (
    <>
      <Container maxW={1600}>
        <Flex flexWrap="wrap" p={2} gap={6} mt={4}>
          {items.length > 0 ? (
            items.map(({ name, description, uuid }: IItem) => (
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
                  <Button
                    bg="#555658"
                    color="#fff"
                    onClick={() => deleteItem(uuid)}
                  >
                    Delete
                  </Button>
                </Flex>
              </Box>
            ))
          ) : (
            <Text
              fontSize="lg"
              color="gray.600"
              textAlign="center"
              width="full"
            >
              No item to display
            </Text>
          )}
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
      <CreateItemModal {...{ isOpen, onClose }} />
    </>
  );
};

export default ItemsList;
