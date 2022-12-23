import { Typography, Paper, Button, Box } from "@mui/material";
import { WhatsApp, Email, Phone } from "@mui/icons-material";

import { Colors } from "../styles/theme";
import Link from "next/link";

// creating string for links

const whastapp_api =
	"https://api.whatsapp.com/send?phone=18292963529&text=%C2%A1Bienvenido%20a%20bordo!%20%C2%BFC%C3%B3mo%20podemos%20ayudarte";

const phone_number = "tel:+18292963529";

const email_address = "mailto:booking@yachtpuntacana.com";

export const SupportBanner = () => {
	return (
		<>
			<Paper
				sx={{
					display: "flex",
					flexDirection: "row",
					backgroundColor: Colors.blur_blue,
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					height: "260px",
				}}
				elevation={0}
			>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<Box>
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
							display: "flex",
							flexDirection: { md: "row" },
							marginTop: "30px",
						}}
					>
						<Link href={whastapp_api} target="_blank">
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
						</Link>
						<Link href={phone_number}>
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
						</Link>
						<Link href={email_address}>
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
						</Link>
					</Box>
				</Box>
			</Paper>
		</>
	);
};
