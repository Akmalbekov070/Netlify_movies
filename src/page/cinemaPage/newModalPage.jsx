'use client';
import { Box, Button, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function NewModalPage({ isOpen, onClose, AllCinema }) {
	// const params = useParams();
	// const scillItem = AllCinema.filter(item => item.Name === params.Name);
	// console.log(params);
	// console.log(scillItem);
	return (
		<Box>
			<Modal size={'5xl'} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader></ModalHeader>
					<ModalHeader></ModalHeader>
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
