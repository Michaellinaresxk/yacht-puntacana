import { ContactHero } from "../components/hero/ContactHero";
import { ContactGroupIcons } from "../components/icons/ContactGroupIcons";
import { Footer } from "../components/Footer";
import { FormComponent } from "../components/FormComponent";

function contact_us() {
	return (
		<>
			<ContactHero />
			<ContactGroupIcons />
			<FormComponent />
			<Footer />
		</>
	);
}

export default contact_us;
