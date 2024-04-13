import {
	Box,
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
	Image,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function ModalPage({ isOpen, onClose, movies }) {
	console.log(movies);
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
						<Button variant='ghost'>Secondary Action</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
}
