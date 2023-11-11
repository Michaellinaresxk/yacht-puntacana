import { Box, Paper, Typography } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Colors } from "../styles/theme";
import { useTranslation } from "next-i18next";

const puntacana = [
	"https://res.cloudinary.com/michaelxk-com/image/upload/v1649090188/cygnus%20yachts/pictures/destinations/pages/puntacana/PCYRC_dfgmbs.jpg",

	"https://res.cloudinary.com/michaelxk-com/image/upload/v1638769266/cygnus%20yachts/pictures/destinations/pages/puntacana/3_xkulz2.jpg",

	"https://res.cloudinary.com/michaelxk-com/image/upload/v1624145269/cygnus%20yachts/pictures/destinations/pages/puntacana/Punta_Cana1_twuyxv.jpg",
];

export const ServicesSliderPuntaCana = () => {
	const { t } = useTranslation();
	return (
		<>
			<Paper
				elevation={0}
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "row-reverse" },
					width: "90%",
					marginLeft: "auto",
					marginRight: "auto",
				}}
			>
				<Box
					sx={{
						width: {
							xs: "90%",
							sm: "50%",
						},

						marginLeft: {
							xs: "auto",
						},
						marginRight: {
							xs: "auto",
						},
					}}
				>
					<Slide>
						<Box className="each-slide-effect" component="div">
							<Box sx={{ backgroundImage: `url(${puntacana[0]})` }}>
								{/* <Typography
									color={Colors.blur_blue}
									sx={{ fontSize: " clamp(1.1em, 3vw, 1.8em)" }}
								>
									Palmilla
								</Typography> */}
							</Box>
						</Box>
						<Box className="each-slide-effect" component="div">
							<Box sx={{ backgroundImage: `url(${puntacana[1]})` }}>
								{/* <Typography>Palmilla</Typography> */}
							</Box>
						</Box>
						<Box className="each-slide-effect" component="div">
							<Box style={{ backgroundImage: `url(${puntacana[2]})` }}>
								{/* <Typography>Palmilla</Typography> */}
							</Box>
						</Box>
					</Slide>
				</Box>

				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "white",
						width: {
							xs: "90%",
							sm: "50%",
						},
						marginLeft: {
							xs: "auto",
						},
						marginRight: {
							xs: "auto",
						},
					}}
				>
					<Box
						sx={{
							width: "90%",
							paddingBottom: "20px",
							marginLeft: "auto",
							marginRight: "auto",
							marginTop: "20px",
							textAlign: "justify",
						}}
					>
						<Typography variant="h4">Punta Cana</Typography>
						<Typography sx={{ marginTop: "5px" }}>
							{t("destinations.puntacana-description")}
						</Typography>
					</Box>
				</Box>
			</Paper>
		</>
	);
};
