import { BookNowButton } from "../../components/buttons/BookNowButton";
import { SupportBanner } from "../../components/SupportBanner";
import { Footer } from "../../components/Footer";
import { DescriptionAiconFlyBoat } from "../../components/boats_description/DescriptionAiconFlyBoat";
import { ImageBoatsGallery } from "../../components/ImageBoatsGallery";
import { BoatsBanner } from "../../components/BoatsBanner";
import { BoatServices } from "../../components/BoatServices";
import { BoatsTechnicalData } from "../../components/BoatsTechnicalData";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const cranchi_boat = () => {
	const boat_image =
		"https://res.cloudinary.com/michaelxk-com/image/upload/v1624143983/nuestra%20flota/aicon-fly-56/Aicon%20fly%2056.jpg";

	const gallery = [
		{
			id: "1",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1624143983/nuestra%20flota/aicon-fly-56/Aicon%20fly%2056.jpg",
		},
		{
			id: "2",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1624143984/nuestra%20flota/aicon-fly-56/img3_uik3gb.jpg",
		},
		{
			id: "3",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1624143984/nuestra%20flota/aicon-fly-56/img6_gtyzgk.jpg",
		},
		{
			id: "4",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1624143975/nuestra%20flota/aicon-fly-56/img4_pasrjs.jpg",
		},
		{
			id: "5",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1625361080/nuestra%20flota/aicon-fly-56/Nueva_imagen6_2_dbs8oz.jpg",
		},
		{
			id: "6",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1624143980/nuestra%20flota/aicon-fly-56/img5_ux8zkm.jpg",
		},
	];

	const features = {
		Builder: "Aicon Fly 60",
		boatType: "Motor Yacht",
		year: "2008",
		remodeling: "2014",
		Length: "1,8 m",
		beam: "4,8 m",
		draft: "1,05 M",
		maxSpeed: "30 knots",
		hulkmaterial: "Fiberglass",
		engines: "2x800 hp",
		fueltype: "Diesel",
		Bathrooms: "2",
		capacity: "16",
	};

	return (
		<>
			<BoatsBanner url={boat_image} name="Icon Fly 60" />
			<DescriptionAiconFlyBoat />
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
