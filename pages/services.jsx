import { ServicesHero } from "../components/hero/ServicesHero";
import { Footer } from "../components/Footer";
import { BookNowButton } from "../components/buttons/BookNowButton";
import { OurServicesLogo } from "../components/OurServicesLogo";
import { ServicesCard } from "../components/cards/ServicesCard";
import { DestinationsContainer } from "../components/DestinationsContainer";
import { boats } from "../database/boat_data";
import { BoatsComponent } from "../components/BoatsComponent";
import { MainTitleBoatServices } from "../components/MainTitleBoatServices";
import { SupportBanner } from "../components/SupportBanner";
import { FixedComponent } from "../components/FixedComponent";
import { FixedComponentImage } from "../components/FixedComponentImage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const image1 =
	"https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671124936/DJI_0355_ze3vtu.jpg";

const image2 =
	"https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671124942/opcion2_mfwnti.jpg";

function Services({ boat_list }) {
	return (
		<>
			{/* <DrawerAppBar /> */}
			<ServicesHero />
			<OurServicesLogo />
			<ServicesCard />
			<FixedComponentImage image={image1} />
			<MainTitleBoatServices />
			<BoatsComponent data={boat_list} />
			<BookNowButton />
			<SupportBanner />
			<FixedComponentImage image={image2} />
			<DestinationsContainer />
			<Footer />
		</>
	);
}

export default Services;

export async function getStaticProps({ locale }) {
	return {
		props: {
			boat_list: boats,
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
}
