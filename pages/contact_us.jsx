import { ContactHero } from "../components/hero/ContactHero";
import { ContactGroupIcons } from "../components/icons/ContactGroupIcons";
import { Footer } from "../components/Footer";
import { FormComponent } from "../components/FormComponent";
import TestCard from "../components/cards/TestCard";

function contact_us() {
	return (
		<>
			<ContactHero />
			<ContactGroupIcons />
			<FormComponent />
			<TestCard />
			<Footer />
		</>
	);
}

export default contact_us;
