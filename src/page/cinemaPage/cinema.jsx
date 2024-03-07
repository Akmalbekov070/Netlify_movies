import MenuPage from '@/components/menu/menu';
import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

export default function Cinema() {
	return (
		<Box w={'full'} h={'100vh'} bg={'black'}>
			<MenuPage />
			<Box pt={'300px'} textAlign={'center'}>
				<Heading color={'white'}>I LOVE YOU Rayhona❤️😘</Heading>
			</Box>
		</Box>
	);
}
