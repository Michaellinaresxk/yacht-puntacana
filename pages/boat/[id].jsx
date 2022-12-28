import { BookNowButton } from "../../components/buttons/BookNowButton";
import { SupportBanner } from "../../components/SupportBanner";
import { Footer } from "../../components/Footer";
import { DescriptionBoatComponent } from "../../components/DescriptionBoatComponent";
import { ImageBoatsGallery } from "../../components/ImageBoatsGallery";
import { BoatsBanner } from "../../components/BoatsBanner";
import { BoatServices } from "../../components/BoatServices";
import { BoatsTechnicalData } from "../../components/BoatsTechnicalData";

//importing boats data

import { boats } from "../../database/boat_data";

const BoatsDetails = ({ boat }) => {
	return (
		<>
			<BoatsBanner data={boat} />
			<DescriptionBoatComponent data={boat} />
			<ImageBoatsGallery data={boat} />
			<BoatServices data={boat} />
			<SupportBanner />
			<BoatsTechnicalData data={boat} />
			<BookNowButton />
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
