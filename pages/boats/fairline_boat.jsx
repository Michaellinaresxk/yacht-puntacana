import { BookNowButton } from "../../components/buttons/BookNowButton";
import { SupportBanner } from "../../components/SupportBanner";
import { Footer } from "../../components/Footer";
import { DescriptionFairlineBoat } from "../../components/boats_description/DescriptionFairlineBoat";
import { ImageBoatsGallery } from "../../components/ImageBoatsGallery";
import { BoatsBanner } from "../../components/BoatsBanner";
import { BoatServices } from "../../components/BoatServices";
import { BoatsTechnicalData } from "../../components/BoatsTechnicalData";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const fairline_boat = () => {
	const boat_image =
		"https://res.cloudinary.com/michaelxk-com/image/upload/v1654295753/PC-YACHTS/yachts/fairline-48-targa/bg1_gvvwgv.jpg";

	const gallery = [
		{
			id: "1",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1654295753/PC-YACHTS/yachts/fairline-48-targa/1_lbziwz.jpg",
		},
		{
			id: "2",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1654295753/PC-YACHTS/yachts/fairline-48-targa/3_mhat7b.jpg",
		},
		{
			id: "3",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1654295754/PC-YACHTS/yachts/fairline-48-targa/2_sdxztq.jpg",
		},
		{
			id: "4",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1654295754/PC-YACHTS/yachts/fairline-48-targa/5_ahjg8p.jpg",
		},
		{
			id: "5",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1654295753/PC-YACHTS/yachts/fairline-48-targa/bg1_gvvwgv.jpg",
		},
		{
			id: "6",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1654295754/PC-YACHTS/yachts/fairline-48-targa/4_vaujdg.jpg",
		},
	];

	const features = {
		Builder: "Fairline",
		boatType: "Motor Yacht",
		year: "2012",
		remodeling: "2019",
		Length: "15,24 m",
		beam: "4,87 m",
		draft: "1,05 M",
		maxSpeed: "30 knots",
		hulkmaterial: "Fiberglass",
		engines: "2x480 hp",
		fueltype: "Diesel",
		Bathrooms: "2",
		capacity: "16",
	};
	return (
		<>
			<BoatsBanner url={boat_image} name="Fairline 48 Targa" />
			<DescriptionFairlineBoat />
			<ImageBoatsGallery image_array={gallery} />
			<BoatServices />
			<SupportBanner />
			<BoatsTechnicalData features={features} />
			<BookNowButton />
			<Footer />
		</>
	);
};

export default fairline_boat;

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
}
