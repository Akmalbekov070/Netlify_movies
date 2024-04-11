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
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
export default function ModalPage({ isOpen, onClose, param }) {
	// const [scillDetail, setScillDetail] = useState([]);
	// useEffect(() => {
	// 	AllCinema().then(res => setScillDetail(res));
	// }, []);

	// const scillItem = scillDetail.filter(item => item.Name == param.name);
	return (
		<Box>
			<Modal size={'4xl'} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolore aspernatur inventore, ea reprehenderit omnis!
						Molestiae, fugit. Officia similique mollitia tenetur aliquam necessitatibus amet, itaque, blanditiis dolor eius
						eligendi facilis iusto recusandae eum maxime, rerum sapiente et omnis perspiciatis reprehenderit incidunt voluptates
						nesciunt assumenda fugit alias. Nostrum asperiores voluptatibus voluptates ducimus voluptate, maiores velit culpa
						ipsam. Consectetur rem officiis omnis, velit earum consequuntur qui minima delectus voluptates fuga. Voluptatum, sint
						saepe consectetur soluta vero nam facilis sed provident magnam beatae quos dignissimos quia eligendi magni aspernatur
						totam accusamus ratione sit sunt veritatis aliquam! Corrupti, repellat et. Accusamus enim voluptatem veritatis. Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque quis exercitationem, porro nulla magni animi
						excepturi quam modi alias consectetur tempore corporis ea reprehenderit voluptatibus voluptate deleniti, dolorum eos
						ipsa. Maiores ad exercitationem totam quaerat, recusandae quasi voluptatem excepturi voluptas dolorem? Ducimus
						voluptatem voluptas et explicabo ullam nam fuga iure minus nemo, corrupti repudiandae assumenda vero totam quidem odit
						delectus at unde amet velit accusantium sequi tenetur ex. Accusantium atque, fugit at repellat fuga temporibus
						pariatur soluta quibusdam provident sapiente perspiciatis, cupiditate asperiores aut accusamus qui minima eligendi,
						omnis maxime expedita veniam illum laborum numquam id necessitatibus? Ab, rem.
					</ModalBody>

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
