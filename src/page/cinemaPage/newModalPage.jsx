import { Box, Button, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@chakra-ui/react';
import React from 'react';

export default function NewModalPage() {
	return (
		<Box>
			<Modal size={'5xl'} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{movies.Name}</ModalHeader>
					<ModalHeader>
						<Image w={'full'} h={'400px'} objectFit={'cover'} src={movies.image} alt={movies.Name} />
					</ModalHeader>
					<ModalBody>{movies.tittle}</ModalBody>
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
