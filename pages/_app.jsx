import "../styles/globals.css";
import { theme } from "../styles/theme";
import { ThemeProvider } from "@mui/material";
import DrawerAppBar from "../components/Header/DrawerAppBar";
import { WhatsAppButton } from "../components/buttons/WhatsAppButton";
import { GoingUpButton } from "../components/buttons/GoingUpButton";

export default function App({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<DrawerAppBar />
				<WhatsAppButton />
				<GoingUpButton />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
