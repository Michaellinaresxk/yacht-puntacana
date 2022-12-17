import { Box, Avatar, Typography } from "@mui/material";

import { Colors } from "../../styles/theme";

export const ContactIcons = ({ icon, contact, contact_value }) => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					backgroundColor: "white",
					marginBottom: "100px",
					alignItems: "center",
					width: "10%",
					height: "5%",
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
						marginTop: "30px",
					}}
				>
					<Typography variant="subtitle1">{contact}:</Typography>
					<Typography
						variant="subtitle1"
						sx={{ fontWeight: "bold", color: "rgba(0, 0, 0, 0.6)" }}
					>
						{contact_value}
					</Typography>
				</Box>
			</Box>
		</>
	);
};
