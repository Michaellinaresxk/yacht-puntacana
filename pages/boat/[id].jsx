import { useRouter } from "next/router";

const BoatsDetails = ({ boat }) => {
	const router = useRouter();

	const { id } = router.query;

	return (
		<>
			<h1>esta es la pagina de los detalles del bote numero {id}</h1>
		</>
	);
};

export default BoatsDetails;
