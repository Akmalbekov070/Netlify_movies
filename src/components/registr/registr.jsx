import React from 'react';

export default function Registr() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const toast = useToast();
	const router = useRouter();

	// console.log('name: ' + name);
	// console.log('email: ' + email);
	// console.log('password: ' + password);

	const postData = () => {
		if (
			!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				email
			)
		) {
			toast({
				title: 'please enter the correct email',
				status: 'error',
				duration: 3000,
				position: 'top-right',
				isClosable: true,
			});
			return;
		}
		fetch('http://localhost:8000/signup', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})
			.then(res => res.json())
			.then(data => {
				if (data.error) {
					toast({ title: data.error, status: 'error', duration: 3000, position: 'top-right', isClosable: true });
				} else {
					toast({ title: 'success', status: 'success', duration: 3000, position: 'top-right', isClosable: true });
					router.push('/login');
				}
			});
	};
	return <div>Registr</div>;
}
