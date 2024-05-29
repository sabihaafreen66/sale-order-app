import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

const EditOrderModal = ({ isOpen, onClose, order, onSave }) => {
  const [product, setProduct] = useState(order?.product || '');
  const [quantity, setQuantity] = useState(order?.quantity || '');
  const [status, setStatus] = useState(order?.status || '');
  const [customerName, setCustomerName] = useState(order?.customer_profile?.name || '');
  const [customerColor, setCustomerColor] = useState(order?.customer_profile?.color || '');
  const [locationName, setLocationName] = useState(order?.location_name || '');
  const [profilePic, setProfilePic] = useState(order?.customer_profile?.profile_pic || '');

  useEffect(() => {
    setProduct(order?.product || '');
    setQuantity(order?.quantity || '');
    setStatus(order?.status || '');
    setCustomerName(order?.customer_profile?.name || '');
    setCustomerColor(order?.customer_profile?.color || '');
    setLocationName(order?.location_name || '');
    setProfilePic(order?.customer_profile?.profile_pic || '');
  }, [order]);

  console.log("Type of onSave prop:", typeof onSave);


  const handleSave = () => {
    console.log("Saving edited order:", {
      product,
      quantity,
      status,
      customer_profile: {
        name: customerName,
        color: customerColor,
        profile_pic: profilePic
      },
      location_name: locationName
    });
  
    onSave({
      ...order,
      product,
      quantity,
      status,
      customer_profile: {
        ...order.customer_profile,
        name: customerName,
        color: customerColor,
        profile_pic: profilePic
      },
      location_name: locationName
    });
    onClose();
  };
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Product</FormLabel>
            <Input value={product} onChange={(e) => setProduct(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Quantity</FormLabel>
            <Input value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Status</FormLabel>
            <Input value={status} onChange={(e) => setStatus(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Customer Name</FormLabel>
            <Input value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Customer Color</FormLabel>
            <Input value={customerColor} onChange={(e) => setCustomerColor(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Location Name</FormLabel>
            <Input value={locationName} onChange={(e) => setLocationName(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Profile Picture URL</FormLabel>
            <Input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSave}>
            Save
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditOrderModal;
