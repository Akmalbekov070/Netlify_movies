import { Box, HStack, Heading, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import React from 'react';
import Login from '../registratsiya/login';
import { UserButton } from '@clerk/nextjs';

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
							<Image w={'80px'} h={'80px'} src='https://cdn.pixabay.com/photo/2019/08/11/18/54/icon-4399690_1280.png' alt='kh' />
							<Text color={'red'} fontSize={'5xl'} fontStyle={'oblique'}>
								{' '}
								Universe
							</Text>
						</Box>
						<Box w={'full'} display={'flex'} justifyContent={'right'} alignItems={'center'} gap={5}>
							{/* header left  */}
							<HStack gap={6} fontSize={'xl'} textDecoration={'none'}>
								<a href='/' className='text-red-600'>
									Home
								</a>
								<a href='/' className='hover:text-red-600 text-white'>
									About
								</a>
								<a href='/' className='hover:text-red-600 text-white'>
									Contact
								</a>
							</HStack>
							{/* email button */}
						</Box>
					</Box>
					{/* button page */}
					<Login />
				</Box>
			</Box>
			<Box w={'full'} h={'full'} position={'absolute'} bg={'blackAlpha.600'} top={0} left={0}></Box>
		</Box>
	);
}
