import MenuPage from '@/components/menu/menu';
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { AllCinema } from '../cinemaPage/cinema';

export default function CinemaHome() {
	console.log(AllCinema);
	return (
		<>
			{AllCinema.map(item => (
				<Box w={'full'} position={'relative'} key={item.id}>
					<Image w={'full'} h={'100vh'} objectFit={'cover'} src={item.image} title='Cinima page image' alt='Cinima page image' />
					<MenuPage />
					<Box w={'full'} position={'absolute'} top={0} left={0} zIndex={20}>
						<Box
							w={'full'}
							pt={{ base: '150px', lg: '190px', xl: '200px' }}
							px={{ base: '30px', sm: '120px', lg: '150px', xl: '250px' }}
							color={'white'}
						>
							<Heading fontSize={{ lg: '4xl' }} fontFamily={'-moz-initial'}>
								{item.Name}
							</Heading>
							<Text w={{ xl: '80%' }} fontSize={'lg'} py={6} fontWeight={'500'}>
								{item.tittle}
							</Text>
							<Button>Watching a movie</Button>
						</Box>
					</Box>
					<Box w={'full'} h={'100vh'} position={'absolute'} bg={'blackAlpha.800'} top={0} left={0}></Box>
				</Box>
			))}
		</>
	);
}
