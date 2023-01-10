import "../styles/globals.css";
import { theme } from "../styles/theme";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import DrawerAppBar from "../components/Header/DrawerAppBar";
import { WhatsAppButton } from "../components/buttons/WhatsAppButton";
import { GoingUpButton } from "../components/buttons/GoingUpButton";
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<DrawerAppBar />
				<WhatsAppButton />
				<GoingUpButton />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default appWithTranslation(App);