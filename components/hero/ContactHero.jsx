import { Paper, Box, Typography } from "@mui/material";
import { Colors } from "../../styles/theme";

export const ContactHero = ({ theme }) => {
	return (
		<>
			<Paper
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundImage:
						"url(https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671235518/banner_fauzex.jpg)",
					maxWidth: "100%",
					height: "400px",
					backgroundPosition: "50% 50%",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<Box
					sx={{
						color: Colors.white,
						// position: "absolute",
					}}
				>
					<Typography variant="h4" color={Colors.white}>
						Contact Us:
					</Typography>
				</Box>
			</Paper>
		</>
	);
};
