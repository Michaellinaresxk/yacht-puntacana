import Head from "next/head";
import { ThemeProvider } from "@mui/system";
import DrawerAppBar from "../components/Header/DrawerAppBar";
import { Banner } from "../components/Banner";
import { theme } from "../styles/theme";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";
import { WhatsAppButton } from "../components/buttons/WhatsAppButton";
import { MainTitle } from "../components/MainTitle";
import { BannerImageClip } from "../components/BannerImageClip";

export default function Home() {
	return (
		<>
			<ThemeProvider theme={theme}>
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
				<DrawerAppBar />
				<Banner />
				<MainTitle />
				<Contact />
				<BannerImageClip />
				<Footer />
				<WhatsAppButton />
			</ThemeProvider>
		</>
	);
}
