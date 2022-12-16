import { Typography, Box, Paper } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import logo from "../assets/icons/logo-colorfull-1.png";
import pay_image from "../assets/icons/pagos-con-paypal.png";

export const Footer = () => {
	return (
		<>
			<Paper
				sx={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Box sx={{ display: "flex", flexDirection: "row" }}>
					<Box sx={{ display: "flex", flexGrow: 1 }}>
						<Typography variant="h5">Yacht Punta Cana</Typography>
						<Box sx={{ display: flex, flexWrap: "wrap" }}>
							<Typography variant="caption">
								Estás planeando rentar un yate en punta cana? Disfruta de un
								yacht charter
							</Typography>
						</Box>
					</Box>
					<Box sx={{ display: "flex", flexGrow: 1 }}>
						<Typography variant="h5">Enlaces</Typography>
						<Box>
							<Link>
								<Typography>Inicio</Typography>
							</Link>
							<Link>
								<Typography>Servicios</Typography>
							</Link>
							<Link>
								<Typography>Destino</Typography>
							</Link>
							<Link>
								<Typography>Contacto</Typography>
							</Link>
						</Box>
						<Box sx={{ display: "flex", flexGrow: 1 }}>
							<Typography variant="h5">Metodos de pago</Typography>
							<Box>
								<Image alt="metodos de pago" src={pay_image} />
							</Box>
						</Box>
					</Box>
				</Box>
				<Box>
					<Box>
						<Image alt="website logo" src={logo} />
						<Typography></Typography>
					</Box>
				</Box>
			</Paper>
		</>
	);
};
