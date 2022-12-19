import { useState } from "react";
import { Paper, Box, Typography, Tab, Button } from "@mui/material";
import {
	Sailing,
	EventAvailable,
	AirportShuttle,
	Cake,
} from "@mui/icons-material";

import { TabList, TabContext, TabPanel } from "@mui/lab";
import { Colors } from "../styles/theme";

const TabsHomeComponent = () => {
	const [value, setValue] = useState("1");
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Paper
				sx={{
					// display: "flex",
					// justifyContent: "center",
					// alignItems: "center",
					backgroundColor: "white",
					marginTop: "50px",
					width: "80%",
					height: "350px",
					marginLeft: "auto",
					marginRight: "auto",
				}}
				elevation={15}
			>
				<TabContext value={value}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							alignContent: "space-around",
							borderBottom: 1,
							borderColor: "divider",
						}}
					>
						<TabList onChange={handleChange} aria-label="lab API tabs example">
							<Tab
								sx={{
									color: Colors.second_blue,
									fontWeight: "bold",
									":hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
									marginLeft: "40px",
								}}
								icon={<Sailing />}
								iconPosition="start"
								label="Yacht Charter"
								value="1"
							/>
							<Tab
								sx={{
									color: Colors.second_blue,
									fontWeight: "bold",
									":hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
									marginLeft: "40px",
								}}
								icon={<Cake />}
								iconPosition="start"
								label="Catering"
								value="2"
							/>
							<Tab
								sx={{
									color: Colors.second_blue,
									fontWeight: "bold",
									":hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
									marginLeft: "40px",
								}}
								icon={<AirportShuttle />}
								iconPosition="start"
								label="Transporte"
								value="3"
							/>
							<Tab
								sx={{
									color: Colors.second_blue,
									fontWeight: "bold",
									":hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
									marginLeft: "20px",
								}}
								icon={<EventAvailable />}
								iconPosition="start"
								label="Event Planner"
								value="4"
							/>
						</TabList>
					</Box>
					<TabPanel value="1">
						<Typography>
							En Yachts Punta Cana hacemos todo posible, organizando chárteres
							de yates privados de lujo bajo las especificaciones del cliente y
							proporcionando el mejor servicio personalizado para cubrir todas
							las necesidades de tu evento.
						</Typography>
						<Button
							variant="outlined"
							size="medium"
							sx={{
								marginTop: "10px",
								backgroundColor: Colors.second_blue,
							}}
						>
							<Typography
								sx={{ ":hover": { color: "black" } }}
								color={Colors.white}
							>
								Reserva ya
							</Typography>
						</Button>
					</TabPanel>
					<TabPanel value="2">
						<Typography>
							Trabajamos con las mejores empresas de Catering de eventos
							privados de República Dominicana. Dinos que evento deseas celebrar
							y nuestro equipo se pondrá en contacto contigo para escucharte y
							ofrecerte propuestas personalizadas ajustadas a tus necesidades.
						</Typography>
						<Button
							variant="outlined"
							size="medium"
							sx={{
								marginTop: "10px",
								backgroundColor: Colors.second_blue,
							}}
						>
							<Typography
								sx={{ ":hover": { color: "black" } }}
								color={Colors.white}
							>
								Contáctanos
							</Typography>
						</Button>
					</TabPanel>
					<TabPanel value="3">
						<Typography>
							Ofrecemos un servicio garantizado desde la puntualidad, el confort
							de nuestros vehículos, la cálida atención de nuestros choferes y
							el compromiso por tu seguridad. Te recogemos en tu hotel o villa y
							te llevamos directamente a la Marina, para abordar tu yate,
							navegar a tu destino y vivir una experiencia inolvidable.
						</Typography>
						<Button
							variant="outlined"
							size="medium"
							sx={{
								marginTop: "10px",
								backgroundColor: Colors.second_blue,
							}}
						>
							<Typography
								sx={{ ":hover": { color: "black" } }}
								color={Colors.white}
							>
								Contáctanos
							</Typography>
						</Button>
					</TabPanel>
					<TabPanel value="4">
						<Typography>
							Somos una empresa con la experiencia, el conocimiento y la
							reputación de ofrecer los mejores eventos a la medida de nuestros
							clientes. Desde Punta Cana Yacht Rentals organizamos fiestas
							privadas, celebraciones de cumpleaños, despedida de solteros/as,
							eventos de empresa, fiestas de cóctel…
						</Typography>
						<Button
							variant="outlined"
							size="medium"
							sx={{
								marginTop: "10px",
								backgroundColor: Colors.second_blue,
							}}
						>
							<Typography
								sx={{ ":hover": { color: "black" } }}
								color={Colors.white}
							>
								Más información
							</Typography>
						</Button>
					</TabPanel>
				</TabContext>
			</Paper>
		</>
	);
};

export default TabsHomeComponent;
