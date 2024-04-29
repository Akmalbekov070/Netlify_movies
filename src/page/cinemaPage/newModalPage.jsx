import { Box, Button, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React from 'react';

export default function NewModalPage({ isOpen, onClose }) {
	return (
		<Box>
			<Modal size={'5xl'} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader></ModalHeader>
					<ModalHeader>
						<Image w={'full'} h={'400px'} objectFit={'cover'} src='' alt='' />
					</ModalHeader>
					<ModalBody></ModalBody>
					<ModalFooter>
						<Button colorScheme='blue' mr={3} onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
}
