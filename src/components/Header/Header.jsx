import { Box, HStack, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import React from 'react';
import Login from '../registratsiya/login';

export default function Header() {
	return (
		<Box>
			<Box w={'full'} position={'relative'}>
				<Image
					w={'full'}
					h={'100vh'}
					src='https://content.onliner.by/news/original_size/9b235bc7335fbe24c6ce71fc71df27c4.jpeg'
					title='ss'
					alt='ljh'
					objectFit={'cover'}
				/>
				<Box w={'full'} h={24} position={'absolute'} top={0} left={0} zIndex={1}>
					<Box w={'full'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} px={28} py={8}>
						<Box w={'full'} display={'flex '} alignItems={'center'} gap={2}>
							<Image
								w={'80px'}
								h={'80px'}
								src='https://file1.removal.ai/preview/3130e5af-1ab6-41e2-a83b-b11c861ca83e_png-clipart-planet-computer-icons-earth-symbol-astronomy-planet-miscellaneous-computer-wallpaper.png'
								alt='kh'
							/>
							<Text color={'red'} fontSize={'5xl'} fontStyle={'oblique'}>
								{' '}
								Universe
							</Text>
						</Box>
						<Box w={'full'} display={'flex'} justifyContent={'right'}>
							<select name='language' className='w-[100px] h-[50px] rounded-xl px-4 outline-none text-2xl bg-gray-950'>
								<option value='Uzb'>Uzb</option>
								<option value='Rus'>Rus</option>
								<option value='Eng'>Eng</option>
							</select>
						</Box>
					</Box>
					<Login />
				</Box>
			</Box>
			<Box w={'full'} h={'full'} position={'absolute'} bg={'blackAlpha.600'} top={0} left={0}></Box>
		</Box>
	);
}
