import { ContactHero } from "../components/hero/ContactHero";
import { ContactGroupIcons } from "../components/icons/ContactGroupIcons";
import { Footer } from "../components/Footer";
import { FormComponent } from "../components/FormComponent";
import { NewMap } from "../components/map/NewMap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function contact_us() {
	return (
		<>
			<ContactHero />
			<ContactGroupIcons />
			<NewMap />
			<FormComponent />
			<Footer />
		</>
	);
}

export default contact_us;

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
}
