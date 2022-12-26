import { useRouter } from "next/router";
import { BookNowButton } from "../../components/buttons/BookNowButton";
import { Footer } from "../../components/Footer";

const BoatsDetails = ({ boat }) => {
	const router = useRouter();

	const { id } = router.query;

	return (
		<>
			<h1>Los barcos</h1>
			<h1>esta es la pagina de los detalles del bote { name } {id}</h1>
			<BookNowButton />
			<Footer />
		</>
	);
};

export default BoatsDetails;


