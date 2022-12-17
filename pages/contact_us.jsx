import DrawerAppBar from "../components/Header/DrawerAppBar";
import { ContactHero } from "../components/hero/ContactHero";
import { ContactGroupIcons } from "../components/icons/ContactGroupIcons";

function contact_us() {
	return (
		<>
			<DrawerAppBar />
			<ContactHero />
			<ContactGroupIcons />
		</>
	);
}

export default contact_us;
