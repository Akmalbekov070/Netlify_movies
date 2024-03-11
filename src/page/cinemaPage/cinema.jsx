import MenuPage from '@/components/menu/menu';
import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { AllCinema } from './cinema';

export default function Cinema() {
	console.log(AllCinema);
	return (
		<Box w={'full'} position={'relative'}>
			<Image
				w={'full'}
				h={'100vh'}
				objectFit={'cover'}
				src='https://content.onliner.by/news/original_size/9b235bc7335fbe24c6ce71fc71df27c4.jpeg'
				title='Cinima page image'
				alt='Cinima page image'
			/>
			<Box w={'full'} h={'100vh'} position={'absolute'} top={0} left={0} zIndex={10}>
				<MenuPage />
				<Box pt={'300px'} textAlign={'center'}>
					<Heading color={'white'}>I LOVE YOU Rayhona❤️😘</Heading>
				</Box>
			</Box>
			<Box w={'full'} h={'100vh'} position={'absolute'} bg={'blackAlpha.700'} top={0} left={0}></Box>
		</Box>
	);
}
