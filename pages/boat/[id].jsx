import { BookNowButton } from "../../components/buttons/BookNowButton";
import { SupportBanner } from "../../components/SupportBanner";
import { Footer } from "../../components/Footer";

import { Paper, Typography } from "@mui/material";

//importing boats data

import { boats } from "../../database/boat_data";

const BoatsDetails = ({ boat }) => {
	return (
		<>
			<Paper
				sx={{
					backgroundImage: `url(${boat.principalImage})`,
					width: "100%",
					height: { xs: "300px", sm: "400px", md: "500px", lg: "700px" },
					backgroundPosition: {
						sm: "30% 30%",
						md: "50% 50%",
					},
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			></Paper>

			<Typography variant="h1">{boat.name}</Typography>
			<BookNowButton />
			<SupportBanner />
			<Footer />
		</>
	);
};

export default BoatsDetails;

export const getStaticPaths = async () => {
	const paths = boats.map((boat) => ({
		params: { id: boat.id.toString() },
	}));

	return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
	const boat = boats.filter((boat) => boat.id.toString() === params.id);
	return {
		props: {
			boat: boat[0],
		},
	};
};
