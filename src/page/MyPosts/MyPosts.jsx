import MenuPage from '@/components/menu/menu';
import { Box, Button, Image, Input } from '@chakra-ui/react';
import React from 'react';

export default function MyPosts() {
	return (
		<>
			<MenuPage />
			<Box w={'50%'} mx={'auto'} pt={32} display={'flex'} flexDirection={'column'} gap={2} alignItems={'center'}>
				<Image
					w={'full'}
					h={'300px'}
					src='https://i.ytimg.com/vi/hv438lRFkOs/maxresdefault.jpg'
					title='Post Image'
					objectFit={'cover'}
					borderRadius={'md'}
				/>
				<Input type='text' title='Post Name' placeholder='Enter Post Name' />
				<Input type='text' title='Body' placeholder='Body' />

				<div class='flex items-center justify-center w-full'></div>
				<Button w={'full'}>Enter New Post</Button>
			</Box>
		</>
	);
}
