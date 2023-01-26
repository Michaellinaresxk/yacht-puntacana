import { BookNowButton } from "../../components/buttons/BookNowButton";
import { SupportBanner } from "../../components/SupportBanner";
import { Footer } from "../../components/Footer";
import { DescriptionTiara43Boat } from "../../components/boats_description/DescriptionTiara43Boat";
import { ImageBoatsGallery } from "../../components/ImageBoatsGallery";
import { BoatsBanner } from "../../components/BoatsBanner";
import { BoatServices } from "../../components/BoatServices";
import { BoatsTechnicalData } from "../../components/BoatsTechnicalData";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const tiara43_boat = () => {
	const boat_image =
		"https://res.cloudinary.com/michaelxk-com/image/upload/v1654297562/PC-YACHTS/yachts/Tiara-43-Sovran/1_gvy77c.jpg";

	const gallery = [
		{
			id: "1",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1654297562/PC-YACHTS/yachts/Tiara-43-Sovran/2_g1hcyr.jpg",
		},
		{
			id: "2",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1654297562/PC-YACHTS/yachts/Tiara-43-Sovran/3_tfc0uf.jpg",
		},
		{
			id: "3",
			src: "https://res.cloudinary.com/michaelxk-com/image/upload/v1654297562/PC-YACHTS/yachts/Tiara-43-Sovran/6_nnouck.jpg",
		},
	];

	const features = {
		Builder: "Tiara 43 Sovran",
		boatType: "Motor Yacht",
		year: "2012",
		remodeling: "2019",
		Length: "13,10 m",
		beam: "4,57 m",
		Capacity: "14 Paxs",
		draft: "1,05 M",
		maxSpeed: "30 knots",
		hulkmaterial: "Fiberglass",
		engines: "2x450 hp",
		fueltype: "Diesel",
		Bathrooms: "2",
	};
	return (
		<>
			<BoatsBanner url={boat_image} name="Tiara 43 Sovran" />
			<DescriptionTiara43Boat />
			<ImageBoatsGallery image_array={gallery} />
			<BoatServices />
			<SupportBanner />
			<BoatsTechnicalData features={features} />
			<BookNowButton />
			<Footer />
		</>
	);
};

export default tiara43_boat;

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
}
