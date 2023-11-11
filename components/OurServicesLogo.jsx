import { Typography, Box } from "@mui/material";
import Image from "next/image";
import logo from "../assets/icons/logo-colorfull-1.png";

export const OurServicesLogo = () => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					marginTop: "85px",
					marginBottom: "100px",
					marginLeft: { xs: "15px" },
					marginRight: { xs: "15px" },
				}}
			>
				<Typography sx={{ fontSize: "clamp(2em, 5vw, 4em)" }}>
					Our Services:
				</Typography>
				<Image
					src={logo}
					width={300}
					height={100}
					alt="puntacana yacht logo"
					style={{ marginTop: "20px" }}
				/>
			</Box>
		</>
	);
};
