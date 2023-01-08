import dynamic from "next/dynamic";
import { ContactHero } from "../components/hero/ContactHero";
import { ContactGroupIcons } from "../components/icons/ContactGroupIcons";
import { Footer } from "../components/Footer";
import { FormComponent } from "../components/FormComponent";
// import ClientMap from "../components/map/ClientMap";
import { NewMap } from "../components/map/NewMap";

function contact_us() {
	// const MapNoSSR = dynamic(() => import("../components/map/ClientMap"), {
	// 	ssr: false,
	// });
	return (
		<>
			<ContactHero />
			<ContactGroupIcons />
			{/* <MapNoSSR /> */}
			{/* <ClientMap /> */}
			<NewMap />
			<FormComponent />
			<Footer />
		</>
	);
}

export default contact_us;
