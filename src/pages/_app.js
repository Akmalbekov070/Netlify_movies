import Header from '@/components/Header/Header';
import '@/styles/globals.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { ClerkProvider, SignIn, SignedIn, SignedOut } from '@clerk/nextjs';

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<ClerkProvider>
				<SignedIn>
					<Component {...pageProps} />
				</SignedIn>
				<SignedOut>
					<Box
						w={'full'}
						position={'relative'}
						zIndex={50}
						display={'flex'}
						justifyContent={'center'}
						alignItems={'center'}
						pt={28}
					>
						<SignIn />
					</Box>
					<Box w={'full'} position={'absolute'} top={0} left={0}>
						<Header />
					</Box>
				</SignedOut>
			</ClerkProvider>
		</ChakraProvider>
	);
}
