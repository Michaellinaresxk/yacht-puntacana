import { DestinationHero } from "../components/hero/DestinationHero";
import { Footer } from "../components/Footer";
import { BoatsComponent } from "../components/BoatsComponent";
import { SupportBanner } from "../components/SupportBanner";
import { BookNowButton } from "../components/buttons/BookNowButton";
import { ServicesSliderPalmilla } from "../components/ServicesSliderPalmilla";
import { ServicesSliderPuntaCana } from "../components/ServicesSliderPuntaCana";
import { ServicesSliderSantaCatalina } from "../components/ServicesSliderSantaCatalina";
import { MainTitleBoatServices } from "../components/MainTitleBoatServices";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { boats } from "../database/boat_data";

function destiny({ boat_list }) {
	return (
		<>
			<DestinationHero />
			<ServicesSliderPalmilla />
			<ServicesSliderPuntaCana />
			<ServicesSliderSantaCatalina />
			<MainTitleBoatServices />
			<BoatsComponent data={boat_list} />
			<BookNowButton />
			<SupportBanner />
			<Footer />
		</>
	);
}

export default destiny;

export async function getStaticProps({ locale }) {
	return {
		props: {
			boat_list: boats,
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
}
