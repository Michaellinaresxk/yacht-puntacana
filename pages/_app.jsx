import "../styles/globals.css";
import { theme } from "../styles/theme";
import { ThemeProvider } from "@mui/material";
import { WhatsAppButton } from "../components/buttons/WhatsAppButton";
import { GoingUpButton } from "../components/buttons/GoingUpButton";

export default function App({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<WhatsAppButton />
				<GoingUpButton />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
