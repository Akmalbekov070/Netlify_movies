import { Box, Button, Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AllCinema } from './cinema';

export default function CineamCard() {
	console.log(AllCinema);
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<Box w={'full'} pt={'50px'} px={{ base: 16, xl: 10 }}>
			<Carousel responsive={responsive}>
				{AllCinema.map(item => (
					<Card key={item.id} maxW='280px' maxH='700px'>
						<CardBody>
							<Image
								w={'full'}
								h={'300px'}
								objectFit={'cover'}
								position={'relative'}
								src={item.image}
								alt='image'
								borderRadius='lg'
							/>
							<Box w={'full'} h={'340px'} bg={'blackAlpha.700'} position={'absolute'} top={0} left={0}></Box>
							<Box position={'absolute'} w={'full'} h={'full'} left={0} top={0}></Box>
							<Stack position={'absolute'} bottom={5} py={1} mt='6' spacing='1'>
								<Heading textAlign={'center'} size='lg'>
									{item.Name}
								</Heading>
								<Box>
									<Text color='white' fontSize='lg' mt={2}>
										{item.tittle.slice(0, 26)}...
									</Text>
								</Box>
								<Box w={'full'} textAlign={'center'}>
									<Button w={'100px'} variant={'outline'} colorScheme='yellow' borderRadius={'xl'} textAlign={'center'}>
										Watch Now
									</Button>
								</Box>
							</Stack>
						</CardBody>
					</Card>
				))}
			</Carousel>
		</Box>
	);
}
