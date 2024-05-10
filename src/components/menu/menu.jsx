import React from 'react';
import { Box, Button, HStack, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { UserButton } from '@clerk/nextjs';
import Login from '../registratsiya/login';

export default function MenuPage() {
	return (
		<Box w={'full'} position={'absolute'} top={0} left={0} zIndex={50}>
			<Box
				w={'full'}
				display={'flex'}
				alignItems={'center'}
				justifyContent={'space-between'}
				px={{ xl: 28, lg: 16, base: 5 }}
				py={8}
			>
				{/* header right */}
				<Box w={'full'} display={'flex '} alignItems={'center'} gap={2}>
					<Link href={'/'}>
						<Image
							w={{ xl: '80px', lg: '60px', base: '40px' }}
							h={{ xl: '80px', lg: '60px', base: '40px' }}
							src='https://cdn.pixabay.com/photo/2019/08/11/18/54/icon-4399690_1280.png'
							alt='kh'
						/>
					</Link>
					<Text color={'red'} fontSize={{ xl: '5xl', base: '3xl' }} fontStyle={'oblique'}>
						{' '}
						Universe
					</Text>
				</Box>
				<Box w={'full'} display={'flex'} justifyContent={'right'} alignItems={'center'} gap={5}>
					{/* header left  */}
					<HStack gap={6} fontSize={'xl'} cursor={'pointer'} color={'white'}>
						<Box display={{ base: 'flex', sm: 'none' }}>
							<Menu>
								<MenuButton as={Button} color={'white'} fontSize={'25'} variant='outline'>
									<RxHamburgerMenu />
								</MenuButton>
								<MenuList color={'black'}>
									<MenuItem>
										<Link href='/Header'>Home</Link>
									</MenuItem>
									<MenuItem>
										{' '}
										<Link href='/About'>About</Link>
									</MenuItem>
									<MenuItem>
										{' '}
										<Link href='/Contact'>Contact</Link>
									</MenuItem>
									<MenuItem>
										{' '}
										<Link href='/MyPost'>UploadPost</Link>
									</MenuItem>
									<MenuItem>
										{' '}
										<Link href='/Post'>MyPost</Link>
									</MenuItem>
								</MenuList>
							</Menu>
						</Box>
						<HStack display={{ base: 'none', sm: 'flex' }} gap={5}>
							<Link href='/Header'>Home</Link>
							<Link href='/About'>About</Link>
							<Link href='/Contact'>Contact</Link>
							<Link href='/MyPost'>UploadPost</Link>
							<Link href='/Post'>MyPost</Link>
						</HStack>
					</HStack>
					{/* email button */}
					<UserButton />
				</Box>
			</Box>
			{/* button page */}
		</Box>
	);
}
