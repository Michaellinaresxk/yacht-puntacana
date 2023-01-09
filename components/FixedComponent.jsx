import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Colors } from "../styles/theme";

import white_logo from "../assets/icons/logo-white.png";

export const FixedComponent = () => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					height: "500px",
					backgroundColor: "transparent",
					position: "absolute",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "transparent",
					}}
				>
					<Image src={white_logo} alt="white logo" width={300} height={100} />
					<Typography variant="h3" color={Colors.white}>
						Live The Experiencie
					</Typography>
				</Box>
			</Box>
		</>
	);
};
