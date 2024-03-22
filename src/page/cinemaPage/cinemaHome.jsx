import MenuPage from '@/components/menu/menu';
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import { AllCinema } from '../cinemaPage/cinema';
import CineamCard from './cineamCard';

export default function CinemaHome() {
	const movies = AllCinema[Math.floor(Math.random() * AllCinema.length)];
	console.log(movies);
	return (
		<>
			<Box w={'full'} position={'relative'} key={movies.id}>
				<Image w={'full'} h={'100vh'} objectFit={'cover'} src={movies.image} title='Cinima page image' alt='Cinima page image' />
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
							{movies.tittle}
						</Text>
						<Button>Watching a movie</Button>
					</Box>
					{/* CinamaCard page */}
					<CineamCard />
				</Box>
				<Box w={'full'} h={'100vh'} position={'absolute'} bg={'blackAlpha.700'} top={0} left={0}></Box>
			</Box>
		</>
	);
}
