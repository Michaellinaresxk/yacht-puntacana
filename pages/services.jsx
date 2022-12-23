import { ServicesHero } from "../components/hero/ServicesHero";
import { Footer } from "../components/Footer";
import { BookNowButton } from "../components/buttons/BookNowButton";

function Services() {
	return (
		<>
			{/* <DrawerAppBar /> */}
			<ServicesHero />
			<BookNowButton />
			<Footer />
		</>
	);
}

export default Services;
