import { Typography, Box } from "@mui/material";

export const MainTitleBoatServices = () => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					marginTop: "150px",
					marginBottom: "100px",
					marginLeft: { xs: "15px" },
					marginRight: { xs: "15px" },
				}}
			>
				<Typography
					variant="h2"
					sx={{
						fontWeight: "bold",
						color: "first_blue",
						fontSize: "clamp(2em, 5vw, 4em)",
					}}
				>
					Choose your Yacht
				</Typography>
				<Typography sx={{ fontSize: "1.2rem" }}>
					We have a wide selection of unique yachts for rent, in Punta Cana and
					Casa de Campo
				</Typography>
			</Box>
		</>
	);
};
