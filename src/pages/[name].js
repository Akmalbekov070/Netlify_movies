import ModalPage from '@/page/cinemaPage/modalPage';
import { useParams } from 'next/navigation';
import React from 'react';

export default function ModalId() {
	const param = useParams();
	console.log(param);
	return <ModalPage param={param} />;
}
