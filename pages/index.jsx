import Head from "next/head";
import { MainBanner } from "../components/MainBanner";
import { Footer } from "../components/Footer";
import { SupportBanner } from "../components/SupportBanner";
import { MainTitle } from "../components/MainTitle";
import { BannerImageClip } from "../components/BannerImageClip";
import { BookNowButton } from "../components/buttons/BookNowButton";
import { VideoComponent } from "../components/VideoComponent";
import TabsHomeComponent from "../components/TabsHomeComponent";
import { BoatsComponent } from "../components/BoatsComponent";
import { DestinationsContainer } from "../components/DestinationsContainer";

import { boats } from "../database/boat_data";

export default function Home({ boat_list }) {
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
			<MainTitle />
			<BoatsComponent data={boat_list} />
			<BookNowButton />
			<SupportBanner />
			<VideoComponent />
			<TabsHomeComponent />
			<BannerImageClip />
			<DestinationsContainer />
			<Footer />
		</>
	);
}

export async function getStaticProps() {
	return {
		props: {
			boat_list: boats,
		},
	};
}
