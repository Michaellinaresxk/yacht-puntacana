import { Typography, Paper, Box, List } from "@mui/material";
import { Check } from "@mui/icons-material";
import { Colors } from "../styles/theme";

export const BannerImageClip = () => {
	return (
		<>
			<Paper
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
					width: "100%",
					height: "700px",

					backgroundColor: "#eeeeee",
					marginTop: "100px",
				}}
				elevation={0}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						flex: 1,
						alignContent: "space-between",
						marginTop: "50px",
						marginLeft: "40px",
					}}
				>
					<Typography variant="h4">
						Más de 10 años trabajando con los mejores precios, sin
						intermediarios para una mejor experiencia de alquiler de yates.
					</Typography>

					<Typography variant="h6" marginTop={5}>
						Somos propietarios de nuestra flota de yates, los cuales están en
						perfecto estado de conservación y cuentan con todas las medidas de
						seguiridad necesarias para que su alquiler sea una experiencia
						inolvidable.
					</Typography>
					<Box sx={{ color: Colors.first_blue }} marginTop={5}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
							}}
						>
							<Check />
							<Typography variant="h5" marginLeft={1}>
								Ahorra disgustos
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
							}}
						>
							<Check />
							<Typography variant="h5" marginLeft={1}>
								Contrata expertos
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
							}}
						>
							<Check />
							<Typography variant="h5" marginLeft={1}>
								Sin intermediarios
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
							}}
						>
							<Check />
							<Typography variant="h5" marginLeft={1}>
								Garantiza tu seguridad
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
							}}
						>
							<Check />
							<Typography variant="h5" marginLeft={1}>
								Vamos a navegar
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box
					sx={{
						flex: 1,
						backgroundImage:
							"url(https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671227427/DJI_0426_aisn2a.jpg)",
						maxWidth: "100%",
						height: "500px",
						backgroundPosition: "50% 50%",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						clipPath:
							"polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
						marginTop: "100px",
						marginLeft: "50px",
					}}
				></Box>
			</Paper>
		</>
	);
};
