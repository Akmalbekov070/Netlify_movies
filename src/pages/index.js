import Login from '@/components/registratsiya/login';
import { Box, HStack, Image, Text } from '@chakra-ui/react';

export default function Home() {
	return (
		<Box w={'full'}>
			{/* salom
			<Login /> */}
			<Box w={'full'} position={'relative'}>
				<Image
					w={'full'}
					h={'100vh'}
					src='https://content.onliner.by/news/original_size/9b235bc7335fbe24c6ce71fc71df27c4.jpeg'
					title='ss'
					alt='ljh'
					objectFit={'cover'}
				/>
				<Box position={'absolute'} top={0} left={0} zIndex={1}>
					<Text>salom</Text>
					<HStack w={'full'}>
						<Image
							w={'20px'}
							h={'20px'}
							src='https://cdn4.iconfinder.com/data/icons/music-and-entertainment/512/Music_Entertainment_camera_movie-1024.png'
							alt='kh'
						/>
						<Text>universe</Text>
					</HStack>
				</Box>
			</Box>
			<Box w={'full'} h={'full'} position={'absolute'} bg={'blackAlpha.600'} top={0} left={0}></Box>
		</Box>
	);
}
