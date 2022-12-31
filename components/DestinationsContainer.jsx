import { Paper, Typography, Box } from "@mui/material";
import { DestinationsComponent } from "./DestinationsComponent";

export const DestinationsContainer = () => {
	return (
		<>
			<Paper
				elevation={0}
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "5em",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Typography variant="h3">Destinations:</Typography>
					<Typography sx={{ fontSize: "1.2rem" }}>
						Chosee one of the destinations we have for you.
					</Typography>
				</Box>

				<DestinationsComponent />
			</Paper>
		</>
	);
};
