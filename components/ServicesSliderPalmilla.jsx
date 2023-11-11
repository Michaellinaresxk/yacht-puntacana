import { Box, Paper, Typography } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Colors } from "../styles/theme";
import { useTranslation } from "next-i18next";

const palmilla = [
	"https://res.cloudinary.com/michaelxk-com/image/upload/v1643830113/cygnus%20yachts/pictures/destinations/pages/palmilla/DJI_0427_gxhvz1.jpg",

	"https://res.cloudinary.com/michaelxk-com/image/upload/v1643830113/cygnus%20yachts/pictures/destinations/pages/palmilla/22_qy4xzg.jpg",

	"https://res.cloudinary.com/michaelxk-com/image/upload/v1643828516/cygnus%20yachts/pictures/destinations/pages/palmilla/playa_palmilla_2_wg3rnl.jpg",
];

export const ServicesSliderPalmilla = () => {
	const { t } = useTranslation();
	return (
		<>
			<Paper
				elevation={0}
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					width: "90%",
					marginLeft: "auto",
					marginRight: "auto",
					marginTop: "100px",
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
							<Box sx={{ backgroundImage: `url(${palmilla[0]})` }}>
								{/* <Typography
									color={Colors.blur_blue}
									sx={{ fontSize: " clamp(1.1em, 3vw, 1.8em)" }}
								>
									Palmilla
								</Typography> */}
							</Box>
						</Box>
						<Box className="each-slide-effect" component="div">
							<Box sx={{ backgroundImage: `url(${palmilla[1]})` }}>
								{/* <Typography>Palmilla</Typography> */}
							</Box>
						</Box>
						<Box className="each-slide-effect" component="div">
							<Box style={{ backgroundImage: `url(${palmilla[2]})` }}>
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
						<Typography variant="h4">Palmilla Beach</Typography>
						<Typography sx={{ marginTop: "5px" }}>
							{t("destinations.palmilla-description")}
						</Typography>
					</Box>
				</Box>
			</Paper>
		</>
	);
};
