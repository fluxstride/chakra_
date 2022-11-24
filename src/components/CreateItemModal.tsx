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

const CreateItemModal = ({ isOpen, onClose }: any) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount>
        <ModalOverlay />
        <ModalContent maxW="500px">
          <ModalHeader fontSize="md">Create Item</ModalHeader>
          <hr />
          <ModalBody>
            <form onSubmit={() => {}}>
              <FormControl mb={4} color="#5F6166">
                <FormLabel fontWeight="semibold">Name</FormLabel>
                <Input borderWidth="1.2px" placeholder="Input item name here" />
              </FormControl>
              <FormControl color="#5F6166">
                <FormLabel fontWeight="semibold">Add Note</FormLabel>
                <Textarea
                  rows={5}
                  borderWidth="1.2px"
                  placeholder="Type here"
                />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter gap={4}>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Cancle
            </Button>
            <Button bg="#999A9B" color="white">
              Create Event
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateItemModal;
