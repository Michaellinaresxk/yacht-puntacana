import DrawerAppBar from "../components/Header/DrawerAppBar";
import { ContactHero } from "../components/hero/ContactHero";
import { ContactPageIcons } from "../components/icons/ContactPageIcons";

function contact_us() {
	return (
		<>
			<DrawerAppBar />
			<ContactHero />
			<ContactPageIcons />
		</>
	);
}

export default contact_us;
