import { Box, Typography } from "@mui/material";
import { Colors } from "../styles/theme";

export const BoatsBanner = ({ data }) => {
	return (
		<Box
			sx={{
				backgroundImage: `url(${data.principalImage})`,
				width: "100%",
				height: { xs: "300px", sm: "350px", md: "500px", lg: "600px" },
				backgroundPosition: {
					sm: "30% 30%",
					md: "50% 50%",
				},
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					position: "absolute",
					marginTop: "450px",
					padding: "15px",
					borderRadius: "10px",
					backgroundColor: "rgba(0, 0, 0, 0.4)",
					color: "white",
					marginLeft: "42%",
					height: "60px",
				}}
			>
				<Typography variant="h4" sx={{ color: Colors.white }}>
					{data.name}
				</Typography>
			</Box>
		</Box>
	);
};
