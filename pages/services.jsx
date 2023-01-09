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

function Services({ boat_list }) {
	return (
		<>
			{/* <DrawerAppBar /> */}
			<ServicesHero />
			<OurServicesLogo />
			<ServicesCard />
			<FixedComponentImage />
			<MainTitleBoatServices />
			<BoatsComponent data={boat_list} />
			<BookNowButton />
			<SupportBanner />
			<DestinationsContainer />
			<Footer />
		</>
	);
}

export default Services;

export async function getStaticProps() {
	return {
		props: {
			boat_list: boats,
		},
	};
}
