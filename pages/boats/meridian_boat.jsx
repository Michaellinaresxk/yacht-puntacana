import { BookNowButton } from "../../components/buttons/BookNowButton";
import { SupportBanner } from "../../components/SupportBanner";
import { Footer } from "../../components/Footer";
import { DescriptionMeridianBoat } from "../../components/boats_description/DescriptionMeridianBoat";
import { ImageBoatsGallery } from "../../components/ImageBoatsGallery";
import { BoatsBanner } from "../../components/BoatsBanner";
import { BoatServices } from "../../components/BoatServices";
import { BoatsTechnicalData } from "../../components/BoatsTechnicalData";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const cranchi_boat = () => {
	const boat_image =
		"https://res.cloudinary.com/michaelxk-com/image/upload/v1624144245/nuestra%20flota/meridian-42/Yate-5_wzfnuv.jpg";

	const gallery = [
		{
			id: "1",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1624144239/nuestra%20flota/meridian-42/Nuevaimagen4_mbhyqu.jpg",
		},
		{
			id: "2",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1624144238/nuestra%20flota/meridian-42/Nueva_5_qavqrq.jpg",
		},
		{
			id: "3",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1624144245/nuestra%20flota/meridian-42/Nuevaimagen9_deumze.jpg",
		},
		{
			id: "4",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1625674777/nuestra%20flota/meridian-42/EXTERIOR1_t7gyy8.jpg",
		},
		{
			id: "5",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1624144245/nuestra%20flota/meridian-42/Yate-5_wzfnuv.jpg",
		},
		{
			id: "6",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1624144226/nuestra%20flota/meridian-42/Nuevaimagen2_ideva7.jpg",
		},
	];

	const features = {
		Builder: "Meridian Yacht",
		boatType: "Motor Yacht",
		year: "2008",
		remodeling: "2014",
		Length: "12,49 m",
		beam: "4,21 m",
		Capacity: "14 Paxs",
		maxSpeed: "30 knots",
		hulkmaterial: "Fiberglass",
		engines: "2x280 hp",
		fueltype: "Diesel",
		Bathrooms: "2",
	};

	return (
		<>
			<BoatsBanner url={boat_image} name="Meridian" />
			<DescriptionMeridianBoat />
			<ImageBoatsGallery image_array={gallery} />
			<BoatServices />
			<SupportBanner />
			<BoatsTechnicalData features={features} />
			<BookNowButton />
			<Footer />
		</>
	);
};

export default cranchi_boat;

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
}
