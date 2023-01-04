import { ServicesHero } from "../components/hero/ServicesHero";
import { Footer } from "../components/Footer";
import { BookNowButton } from "../components/buttons/BookNowButton";
import { OurServicesLogo } from "../components/OurServicesLogo";
import { ServicesCard } from "../components/cards/ServicesCard";
import { DestinationsContainer } from "../components/DestinationsContainer";
import { boats } from "../database/boat_data";
import { BoatsComponent } from "../components/BoatsComponent";
import { MainTitleBoatServices } from "../components/MainTitleBoatServices";

function Services({ boat_list }) {
	return (
		<>
			{/* <DrawerAppBar /> */}
			<ServicesHero />
			<OurServicesLogo />
			<ServicesCard />
			<DestinationsContainer />
			<MainTitleBoatServices />
			<BoatsComponent data={boat_list} />
			<BookNowButton />
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
