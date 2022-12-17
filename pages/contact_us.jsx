import DrawerAppBar from "../components/Header/DrawerAppBar";
import { ContactHero } from "../components/hero/ContactHero";
import { ContactIcons } from "../components/icons/ContactIcons";

import { LocationOn } from "@mui/icons-material";

const icon = <LocationOn />;

function contact_us() {
	return (
		<>
			<DrawerAppBar />
			<ContactHero />
			<ContactIcons
				icon={icon}
				contact="Direccion"
				contact_value="Casa de Campo"
			/>
		</>
	);
}

export default contact_us;
