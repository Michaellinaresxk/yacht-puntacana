import { Box, Avatar, Typography } from "@mui/material";

import { Colors } from "../../styles/theme";

export const ContactIcons = ({ icon, contact, contact_value }) => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: { xs: "center", md: "space-between" },
					backgroundColor: "white",
					marginBottom: "100px",
					alignItems: "center",
					// width: { xs: "30%", sm: "50%", md: "15%", lg: "20%", xl: "12%" },
					// height: "auto",
					// marginTop: { xs: "1px", sm: "3px" },
					padding: 0,
				}}
			>
				<Box>
					<Avatar
						sx={{
							color: "white",
							backgroundColor: Colors.second_blue,
							width: "70px",
							height: "70px",
						}}
					>
						{icon}
					</Avatar>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						marginTop: "20px",
					}}
				>
					<Typography variant="subtitle1">{contact}:</Typography>
					<Typography
						variant="subtitle1"
						sx={{
							fontWeight: "bold",
							color: "rgba(0, 0, 0, 0.6)",
						}}
					>
						{contact_value}
					</Typography>
				</Box>
			</Box>
		</>
	);
};
