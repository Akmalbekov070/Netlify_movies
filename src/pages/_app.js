import Header from '@/components/Header/Header';
import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Header />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
