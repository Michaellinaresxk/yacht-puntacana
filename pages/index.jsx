import Head from "next/head";
import { MainBanner } from "../components/MainBanner";
import { Footer } from "../components/Footer";
import { SupportBanner } from "../components/SupportBanner";
import { MainTitle } from "../components/MainTitle";
import { BannerImageClip } from "../components/BannerImageClip";
import { BookNowButton } from "../components/buttons/BookNowButton";
import { VideoDesktop } from "../components/video/VideoDesktop";
import { BoatsComponent } from "../components/BoatsComponent";
import { DestinationsContainer } from "../components/DestinationsContainer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { boats } from "../database/boat_data";
import { useRouter } from "next/router";

export default function Home({ boat_list }) {
	const { locale } = useRouter();
	return (
		<>
			<Head>
				<title>Yachts Punta Cana</title>
				<meta
					name="description"
					content="Are you planning to rent a yacht in punta cana? Enjoy a private yacht charter and sail in the Caribbean Sea. We provide the best yacht experience with our luxury yachts. With us you will find the best offers for your unforgettable trip"
				/>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="google-site-verification"
					content="XvBRJKvRQn33_vzkKZlM4dEP2f0NyUc6wRa02xEJdFU"
				/>
			</Head>
			<MainBanner />
			<h1>{locale}</h1>
			<MainTitle />
			<BoatsComponent data={boat_list} />
			<BookNowButton />
			<VideoDesktop />
			<SupportBanner />
			<DestinationsContainer />
			<BannerImageClip />
			<Footer />
		</>
	);
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			boat_list: boats,
			...(await serverSideTranslations(locale, ["common"])),
		},
	};
}
