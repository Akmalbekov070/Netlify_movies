import { Box, Button, Link, Stack } from '@chakra-ui/react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function Login() {
	return (
		<Box w={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={5} pt={36}>
			<Stack>
				<Link href='/'>
					<Button w={'220px'} h={'50px'} rightIcon={<FaArrowRight />} fontSize={'2xl'} bg={'green'} variant={'outlline'}>
						Next
					</Button>
				</Link>
			</Stack>
		</Box>
	);
}
