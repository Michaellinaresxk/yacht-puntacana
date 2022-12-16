import { createTheme } from "@mui/material/styles";

export const Colors = {
	primary: "#154875",
	secondary: "#868589",
	first_blue: "#0c71e0",
	second_blue: "#0859c6",
	soft_blue: "#10a5f5",
	blur_blue: "#2c74bc",
	title: "rgba(0, 0, 0, 0.7)",
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

		first_blue: {
			main: Colors.first_blue,
		},

		second_blue: {
			main: Colors.second_blue,
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
