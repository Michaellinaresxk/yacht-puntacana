import { BookNowButton } from "../../components/buttons/BookNowButton";
import { SupportBanner } from "../../components/SupportBanner";
import { Footer } from "../../components/Footer";
import { DescriptionCranchiBoat } from "../../components/boats_description/DescriptionCranchiBoat";
import { ImageBoatsGallery } from "../../components/ImageBoatsGallery";
import { BoatsBanner } from "../../components/BoatsBanner";
import { BoatServices } from "../../components/BoatServices";
import { BoatsTechnicalData } from "../../components/BoatsTechnicalData";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const cranchi_boat = () => {
	const boat_image =
		"https://res.cloudinary.com/michaelxk-com/image/upload/v1653911999/PC-YACHTS/yachts/cranchi-50/bg_dxwftv.jpg";

	const gallery = [
		{
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1653911999/PC-YACHTS/yachts/cranchi-50/12_tunpng.jpg",
		},
		{
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1653911998/PC-YACHTS/yachts/cranchi-50/4_toicol.jpg",
		},
		{
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1653911998/PC-YACHTS/yachts/cranchi-50/3_ck2qws.jpg",
		},
		{
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1653911999/PC-YACHTS/yachts/cranchi-50/bg_dxwftv.jpg",
		},
		{
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1653911998/PC-YACHTS/yachts/cranchi-50/8_xtvv1i.jpg",
		},
		{
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1653911998/PC-YACHTS/yachts/cranchi-50/7_vol2bn.jpg",
		},
	];

	const features = {
		Builder: "Cranchi",
		boatType: "Motor Yacht",
		year: "2012",
		remodeling: "2019",
		Length: "15,32 m",
		beam: "4,90 m",
		draft: "1,05",
		maxSpeed: "35 knots",
		hulkmaterial: "Fiberglass",
		engines: "2x800 hp",
		fueltype: "Diesel",
		Bathrooms: "2",
		capacity: "16",
	};

	return (
		<>
			<BoatsBanner url={boat_image} name="Cranchi 50" />
			<DescriptionCranchiBoat />
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
