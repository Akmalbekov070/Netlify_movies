import Header from '@/components/Header/Header';
import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { ClerkProvider } from 'clerk/nextjs';

export default function App({ Component, pageProps }) {
	return (
		<ClerkProvider>
			<ChakraProvider>
				<Header />
				<Component {...pageProps} />
			</ChakraProvider>
		</ClerkProvider>
	);
}
