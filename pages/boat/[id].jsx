import { useRouter } from "next/router";

const BoatsDetails = ({ boat }) => {
	const router = useRouter();

	const { id } = router.query;

	return (
		<>
			<h1>Los barcos</h1>
			<h1>esta es la pagina de los detalles del bote numero {id}</h1>
		</>
	);
};

export default BoatsDetails;
