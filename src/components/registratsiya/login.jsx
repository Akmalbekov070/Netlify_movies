import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function Login() {
	const Login = () => {
		const [showPassword, setShowPassword] = useState(false);

		const handleShowClick = () => setShowPassword(!showPassword);

		const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');
		const toast = useToast();
		const router = useRouter();

		const postData = () => {
			fetch('http://localhost:8000/signin', {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: email,
					password: password,
				}),
			})
				.then(res => res.json())
				.then(data => {
					if (data.error) {
						toast({ title: data.error, status: 'error', duration: 3000, position: 'top-right', isClosable: true });
					} else {
						toast({ title: 'success', status: 'success', duration: 3000, position: 'top-right', isClosable: true });
						router.push('/post');
					}
				});
		};
	};
	return (
		<>
			<div>Login</div>
		</>
	);
}
