import Head from "next/head";
import { ThemeProvider } from "@mui/system";
import DrawerAppBar from "../components/Header/DrawerAppBar";
import { Banner } from "../components/Banner";
import { theme } from "../styles/theme";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";
import { WhatsAppButton } from "../components/buttons/WhatsAppButton";

export default function Home() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Head>
					<title>Yachts Punta Cana</title>
					<meta name="description" content="Are you planning to rent a yacht in punta cana? Enjoy a private yacht charter and sail in the Caribbean Sea. We provide the best yacht experience with our luxury yachts. With us you will find the best offers for your unforgettable trip" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<DrawerAppBar />
				<Banner />
				<Contact />
				<Footer />
				<WhatsAppButton />
			</ThemeProvider>
		</>
	);
}
