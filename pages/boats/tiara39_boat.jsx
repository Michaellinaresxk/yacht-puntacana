import { BookNowButton } from "../../components/buttons/BookNowButton";
import { SupportBanner } from "../../components/SupportBanner";
import { Footer } from "../../components/Footer";
import { DescriptionTiara39Boat } from "../../components/boats_description/DescriptionTiara39Boat";
import { ImageBoatsGallery } from "../../components/ImageBoatsGallery";
import { BoatsBanner } from "../../components/BoatsBanner";
import { BoatServices } from "../../components/BoatServices";
import { BoatsTechnicalData } from "../../components/BoatsTechnicalData";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const tiara39_boat = () => {
	const boat_image =
		"https://res.cloudinary.com/michaelxk-com/image/upload/v1654298934/PC-YACHTS/yachts/tiara-39-open/3_mnzxmo.jpg";

	const gallery = [
		{
			id: "1",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1654298935/PC-YACHTS/yachts/tiara-39-open/1_jyyf3n.jpg",
		},
		{
			id: "2",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1654298935/PC-YACHTS/yachts/tiara-39-open/4_yamiku.jpg",
		},
		{
			id: "3",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1654298935/PC-YACHTS/yachts/tiara-39-open/2_shqnea.jpg",
		},
		{
			id: "4",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1654298937/PC-YACHTS/yachts/tiara-39-open/9_imljrj.jpg",
		},
		{
			id: "5",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1654298936/PC-YACHTS/yachts/tiara-39-open/8_wkllsi.jpg",
		},
		{
			id: "6",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1654298935/PC-YACHTS/yachts/tiara-39-open/6_qeeaz5.jpg",
		},
	];

	const features = {
		Builder: "Tiara Yachts",
		boatType: "Motor Yacht",
		year: "2008",
		remodeling: "2018",
		Length: "11,58 m",
		beam: "4,26 m",
		Capacity: "12 Paxs",
		draft: "1,05 M",
		maxSpeed: "30 knots",
		hulkmaterial: "Fiberglass",
		engines: "2x400 hp",
		fueltype: "Diesel",
		Bathrooms: "1",
	};
	return (
		<>
			<BoatsBanner url={boat_image} name="Tiara 39 Open" />
			<DescriptionTiara39Boat />
			<ImageBoatsGallery image_array={gallery} />
			<BoatServices />
			<SupportBanner />
			<BoatsTechnicalData features={features} />
			<BookNowButton />
			<Footer />
		</>
	);
};

export default tiara39_boat;

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
}
