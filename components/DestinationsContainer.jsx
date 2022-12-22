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
					marginTop: "50px",
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
					<Typography variant="h4">Destinations:</Typography>
					<Typography variant="body1">
						Chosee one of the destinations we have for you
					</Typography>
				</Box>

				<DestinationsComponent />
			</Paper>
		</>
	);
};
