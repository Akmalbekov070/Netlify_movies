import MenuPage from '@/components/menu/menu';
import {
	Box,
	Button,
	Heading,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { AllCinema } from '../cinemaPage/cinema';
import CineamCard from './cineamCard';

export default function CinemaHome() {
	const movies = AllCinema[Math.floor(Math.random() * AllCinema.length)];
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Box w={'full'} position={'relative'} key={movies.id}>
				<Image
					w={'full'}
					h={{ base: '122vh', xl: '120vh' }}
					objectFit={'cover'}
					src={movies.image}
					title='Cinima page image'
					alt='Cinima page image'
				/>
				<MenuPage />
				<Box w={'full'} position={'absolute'} top={0} left={0} zIndex={20}>
					<Box
						w={'full'}
						pt={{ base: '150px', lg: '190px', xl: '200px' }}
						px={{ base: '30px', sm: '120px', lg: '150px', xl: '250px' }}
						color={'white'}
					>
						<Heading fontSize={{ base: '2xl', sm: '3xl', lg: '4xl', xl: '5xl' }} fontFamily={'-moz-initial'}>
							{movies.Name}
						</Heading>
						<Text w={{ xl: '80%' }} fontSize={'lg'} py={6} fontWeight={'500'}>
							{movies.tittle.slice(0, 230)}..
						</Text>
						<Button onClick={onOpen} color={'white'} bg={'transparent'}>
							Watching a movie
						</Button>

						<Modal size={'4xl'} isOpen={isOpen} onClose={onClose}>
							<ModalOverlay />
							<ModalContent>
								<ModalHeader>Modal Title</ModalHeader>
								<ModalCloseButton />
								<ModalBody>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolore aspernatur inventore, ea reprehenderit
									omnis! Molestiae, fugit. Officia similique mollitia tenetur aliquam necessitatibus amet, itaque, blanditiis
									dolor eius eligendi facilis iusto recusandae eum maxime, rerum sapiente et omnis perspiciatis reprehenderit
									incidunt voluptates nesciunt assumenda fugit alias. Nostrum asperiores voluptatibus voluptates ducimus
									voluptate, maiores velit culpa ipsam. Consectetur rem officiis omnis, velit earum consequuntur qui minima
									delectus voluptates fuga. Voluptatum, sint saepe consectetur soluta vero nam facilis sed provident magnam beatae
									quos dignissimos quia eligendi magni aspernatur totam accusamus ratione sit sunt veritatis aliquam! Corrupti,
									repellat et. Accusamus enim voluptatem veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Inventore eaque quis exercitationem, porro nulla magni animi excepturi quam modi alias consectetur tempore
									corporis ea reprehenderit voluptatibus voluptate deleniti, dolorum eos ipsa. Maiores ad exercitationem totam
									quaerat, recusandae quasi voluptatem excepturi voluptas dolorem? Ducimus voluptatem voluptas et explicabo ullam
									nam fuga iure minus nemo, corrupti repudiandae assumenda vero totam quidem odit delectus at unde amet velit
									accusantium sequi tenetur ex. Accusantium atque, fugit at repellat fuga temporibus pariatur soluta quibusdam
									provident sapiente perspiciatis, cupiditate asperiores aut accusamus qui minima eligendi, omnis maxime expedita
									veniam illum laborum numquam id necessitatibus? Ab, rem.
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
					{/* CinamaCard page */}
					<CineamCard />
				</Box>
				<Box w={'full'} h={{ base: '122vh', xl: '120vh' }} position={'absolute'} bg={'blackAlpha.700'} top={0} left={0}></Box>
			</Box>
		</>
	);
}
