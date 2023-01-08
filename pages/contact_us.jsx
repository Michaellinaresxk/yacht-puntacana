import dynamic from "next/dynamic";
import { ContactHero } from "../components/hero/ContactHero";
import { ContactGroupIcons } from "../components/icons/ContactGroupIcons";
import { Footer } from "../components/Footer";
import { FormComponent } from "../components/FormComponent";

function contact_us() {
	const MapNoSSR = dynamic(() => import("../components/map/ClientMap"), {
		ssr: false,
	});
	return (
		<>
			<ContactHero />
			<ContactGroupIcons />
			<MapNoSSR />
			<FormComponent />
			<Footer />
		</>
	);
}

export default contact_us;
