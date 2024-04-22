import NewModalPage from '@/page/cinemaPage/newModalPage';
import { useParams } from 'next/navigation';
import React from 'react';

export default function ModalId() {
	const param = useParams();
	console.log(param);
	return <NewModalPage />;
}
