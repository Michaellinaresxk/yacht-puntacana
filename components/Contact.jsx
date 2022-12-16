import { Typography, Paper, Button, Box } from "@mui/material";
import { WhatsApp, Email, Phone } from "@mui/icons-material";
import { Colors } from "../styles/theme";

export const Contact = () => {
	return (
		<>
			<Paper
				sx={{
					display: "flex",
					flexDirection: "column",
					backgroundColor: Colors.blur_blue,
					alignContent: "space-between",
					justifyContent: "center",
					width: "100%",
					height: "260px",
				}}
				elevation={0}
			>
				<Box sx={{ marginLeft: "30%" }}>
					<Typography variant="h4" color={Colors.white}>
						Contacto
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						width: "600px",
						marginTop: "10px",
						marginLeft: "30%",
					}}
				>
					<Typography variant="subtitle1" color={Colors.white}>
						Si no sabes exactamente que tipo de barco alquilar o no tienes
						tiempo, rellana este formulario y dinos cuantas personas irán a
						bordo, posibles fechas, presupuesto aproximado y te enviaremos una
						propuesta por email.
					</Typography>
				</Box>
				<Box
					sx={{
						display: "inline-flex",
						flexDirection: "row",
						marginTop: "30px",
						marginLeft: "30%",
					}}
				>
					<Button
						variant="contained"
						color="first_blue"
						sx={{
							":hover": { backgroundColor: Colors.second_blue },
						}}
					>
						<WhatsApp color="white" />
						<Typography
							variant="caption"
							color={Colors.white}
							sx={{ marginLeft: 1, width: "65px" }}
						>
							WHATSAPP
						</Typography>
					</Button>
					<Button
						variant="contained"
						color="first_blue"
						sx={{
							marginLeft: 1,
							":hover": { backgroundColor: Colors.second_blue },
						}}
					>
						<Phone color="white" />
						<Typography
							variant="caption"
							color={Colors.white}
							sx={{ marginLeft: 1, width: "65px" }}
						>
							LLAMANOS
						</Typography>
					</Button>
					<Button
						variant="contained"
						color="first_blue"
						sx={{
							marginLeft: 1,
							":hover": { backgroundColor: Colors.second_blue },
						}}
					>
						<Email color="white" />
						<Typography
							variant="caption"
							color={Colors.white}
							sx={{ marginLeft: 1, width: "65px" }}
						>
							CORREO
						</Typography>
					</Button>
				</Box>
			</Paper>
		</>
	);
};
