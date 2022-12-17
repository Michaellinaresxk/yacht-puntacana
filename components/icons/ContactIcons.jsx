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
					marginTop: "30px",
					marginLeft: "100px",
					marginBottom: "100px",
					alignItems: "center",
					width: "20%",
					height: "5%",
				}}
			>
				<Box>
					<Avatar
						sx={{
							color: "white",
							backgroundColor: Colors.soft_blue,
							width: "70px",
							height: "70px",
						}}
					>
						{icon}
					</Avatar>
				</Box>
				<Box sx={{ marginTop: "30px" }}>
					<Typography variant="subtitle1">{contact}:</Typography>
					<Typography variant="subtitle1">{contact_value}</Typography>
				</Box>
			</Box>
		</>
	);
};
