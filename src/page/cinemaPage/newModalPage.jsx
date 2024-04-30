'use client';
import { Box, Button, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AllCinema } from './cinema';

export default function NewModalPage({ isOpen, onClose, param }) {
	// const [scillDetail, setScillDetail] = useState([]);

	const scillItem = AllCinema.filter(item => item.Name == param);
	console.log(scillItem);
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
