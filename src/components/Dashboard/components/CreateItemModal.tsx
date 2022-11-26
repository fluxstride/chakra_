import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { itemsContext } from "../../../contexts/itemsContext";
import { API } from "../../../helpers/api";
import { endpoint } from "../../../utils";

const CreateItemModal = ({ isOpen, onClose }: any) => {
  const { dispatch } = useContext(itemsContext);
  const { register, handleSubmit } = useForm();

  const createItem = async ({ name, description }: any) => {
    const response = await API.post(endpoint.items, {
      name,
      description,
    });

    dispatch({
      type: "CREATE_ITEM",
      payload: {
        ...response.data.item,
      },
    });

    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount>
        <ModalOverlay />
        <form onSubmit={handleSubmit(createItem)}>
          <ModalContent maxW="500px">
            <ModalHeader fontSize="md">Create Item</ModalHeader>
            <hr />
            <ModalBody>
              <FormControl mb={4} color="#5F6166">
                <FormLabel fontWeight="semibold">Name</FormLabel>
                <Input
                  borderWidth="1.2px"
                  placeholder="Input item name here"
                  {...register("name", { required: true })}
                />
              </FormControl>
              <FormControl color="#5F6166">
                <FormLabel fontWeight="semibold">Add Note</FormLabel>
                <Textarea
                  rows={5}
                  borderWidth="1.2px"
                  placeholder="Type here"
                  {...register("description", { required: true })}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter gap={4}>
              <Button colorScheme="gray" mr={3} onClick={onClose}>
                Cancle
              </Button>
              <Button bg="#999A9B" color="white" type="submit">
                Create Event
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default CreateItemModal;
