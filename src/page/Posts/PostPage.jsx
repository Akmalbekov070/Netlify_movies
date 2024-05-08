import MenuPage from '@/components/menu/menu';
import { Box, Image } from '@chakra-ui/react';
import React from 'react';

export default function PostPage() {
	return (
		<>
			<MenuPage />
			<Box>
				<Image
					w={'full'}
					h={'100vh'}
					src='https://luxe-host.ru/wp-content/uploads/f/8/5/f853048277ea372e0c0bab8a4bed7e9f.gif'
					alt='Loading '
				/>
			</Box>
		</>
	);
}
