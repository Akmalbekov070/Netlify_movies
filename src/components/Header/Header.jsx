import { Box, Button, HStack, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import React from 'react';
import Login from '../registratsiya/login';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
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
												<Link href='/Home'>Home</Link>
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
												<Link href='/Contact'>UploadPost</Link>
											</MenuItem>
											<MenuItem>
												{' '}
												<Link href='/Contact'>MyPost</Link>
											</MenuItem>
										</MenuList>
									</Menu>
								</Box>
								<HStack display={{ base: 'none', sm: 'flex' }} gap={5}>
									<Link href='/Home'>Home</Link>
									<Link href='/About'>About</Link>
									<Link href='/Contact'>Contact</Link>
									<Link href='/Contact'>UploadPost</Link>
									<Link href='/Contact'>MyPost</Link>
								</HStack>
							</HStack>
							{/* email button */}
							<UserButton />
						</Box>
					</Box>
					{/* button page */}
					<Login />
				</Box>
			</Box>
			<Box w={'full'} h={'full'} position={'absolute'} bg={'blackAlpha.700'} top={0} left={0}></Box>
		</Box>
	);
}
