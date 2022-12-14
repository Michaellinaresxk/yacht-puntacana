import { createTheme } from "@mui/material/styles";

export const Colors = {
	primary: "#154875",
	secondary: "#868589",
	title: "#154875",
	body: "#fafafa",
	white: "#FFF",
};

export const theme = createTheme({
	palette: {
		primary: {
			main: Colors.primary,
		},

		secondary: {
			main: Colors.secondary,
		},

		title: {
			main: Colors.title,
		},

		body: {
			main: Colors.body,
		},

		white: {
			main: Colors.white,
		},
	},

	// components: {
	// 	MuiButton: {
	// 		defaultProps: {
	// 			disableRipple: true,
	// 			disableElevation: true,
	// 		},
	// 	},
	// },
});
