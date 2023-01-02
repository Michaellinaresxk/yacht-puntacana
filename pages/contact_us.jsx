import { ContactHero } from "../components/hero/ContactHero";
import { ContactGroupIcons } from "../components/icons/ContactGroupIcons";
import { Footer } from "../components/Footer";
import { FormComponent } from "../components/FormComponent";
import { MapComponent } from "../components/MapComponent";

function contact_us() {
	return (
		<>
			<ContactHero />
			<ContactGroupIcons />
			<MapComponent />
			<FormComponent />
			<Footer />
		</>
	);
}

export default contact_us;
