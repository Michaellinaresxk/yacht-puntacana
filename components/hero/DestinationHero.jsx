import { Paper, Box, Typography } from "@mui/material";
import { Colors } from "../../styles/theme";

export const DestinationHero = () => {
	return (
		<>
			<Paper
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundImage:
						"url(https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671227462/DJI_0344_wxwfit.jpg)",
					maxWidth: "100%",
					height: "400px",
					backgroundPosition: "50% 50%",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						color: "white",
						alignItems: "center",
					}}
				>
					<Typography variant="h4" color={Colors.white}>
						DESTINATIONS:
					</Typography>

					<Typography variant="h5" color={Colors.white}>
						Choose one of the destinations we have for you.
					</Typography>
				</Box>
			</Paper>
		</>
	);
};
