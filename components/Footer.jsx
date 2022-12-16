import { Typography, Box, Paper } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import logo from "../assets/icons/logo-colorfull-1.png";
import pay_image from "../assets/icons/pagos-con-paypal.png";
import { Colors } from "../styles/theme";

export const Footer = () => {
	return (
		<>
			<Paper
				sx={{
					display: "flex",
					flexDirection: "column",
					marginTop: "200px",
					backgroundColor: Colors.body,
					marginBottom: "50px",
				}}
				elevation={0}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						alignContent: "space-around",
						paddingTop: "70px",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flex: 1,
							flexDirection: "column",
							marginLeft: "50px",
						}}
					>
						<Typography sx={{ color: Colors.soft_blue }} variant="h5">
							Yacht Punta Cana
						</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								flexWrap: "wrap",
							}}
						>
							<Typography variant="subtitle1">
								Estás planeando rentar un yate en punta cana? Disfruta de un
								yacht charter privado en sail en el mar del caribe. Tenemos la
								mejor experiencia en renta de yates y contamos con nuestra flota
								de lujo. Con nosostros podrás encontrar las mejores ofertas para
								que tengas una experiencia inolvidable.
							</Typography>
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							flex: 1,
							flexDirection: "column",
							marginLeft: "100px",
						}}
					>
						<Typography sx={{ color: Colors.soft_blue }} variant="h5">
							Enlaces
						</Typography>
						<Box>
							<Link href="/">
								<Typography>Inicio</Typography>
							</Link>
							<Link href="/services">
								<Typography>Servicios</Typography>
							</Link>
							<Link href="/destiny">
								<Typography>Destino</Typography>
							</Link>
							<Link href="/contact_us">
								<Typography>Contacto</Typography>
							</Link>
						</Box>
					</Box>
					<Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
						<Typography sx={{ color: Colors.soft_blue }} variant="h5">
							Metodos de pago
						</Typography>
						<Box>
							<Image alt="metodos de pago" src={pay_image} />
						</Box>
					</Box>
				</Box>
				<Box
					sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
				>
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						<Image
							alt="website logo"
							src={logo}
							style={{ width: "300px", height: "80px" }}
						/>
						<Typography sx={{ marginTop: "50px", marginBottom: "50px" }}>
							2021 Yacht Punta Cana. All rights reserved
						</Typography>
					</Box>
				</Box>
			</Paper>
		</>
	);
};
