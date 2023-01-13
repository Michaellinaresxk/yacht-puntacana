import { Box, Paper, Typography } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Colors } from "../styles/theme";

const puntacana = [
	"https://res.cloudinary.com/michaelxk-com/image/upload/v1649090188/cygnus%20yachts/pictures/destinations/pages/puntacana/PCYRC_dfgmbs.jpg",

	"https://res.cloudinary.com/michaelxk-com/image/upload/v1638769266/cygnus%20yachts/pictures/destinations/pages/puntacana/3_xkulz2.jpg",

	"https://res.cloudinary.com/michaelxk-com/image/upload/v1624145269/cygnus%20yachts/pictures/destinations/pages/puntacana/Punta_Cana1_twuyxv.jpg",
];

export const ServicesSliderPuntaCana = () => {
	return (
		<>
			<Paper
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "row-reverse" },
					width: "90%",
					marginLeft: "auto",
					marginRight: "auto",
				}}
			>
				<Box sx={{ width: "50%" }}>
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
						width: "50%",
						height: "350px",
					}}
				>
					<Box sx={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}>
						<Typography variant="h4">Punta Cana</Typography>
						<Typography>
							Punta Cana, at the easternmost tip of the Dominican Republic,
							borders the Caribbean Sea and the Atlantic Ocean. It is a region
							known for its 48 km long beaches and clear waters. The Bavaro and
							Punta Cana areas combine to form what is known as La Costa del
							Coco, an area with exclusive all-inclusive tourist attractions.
							The famous Bávaro Beach, declared one of the best beaches in the
							world by UNESCO, is among the longest white sand beaches in the
							Caribbean, stretching 32 kilometers and surrounded by coral reefs
						</Typography>
					</Box>
				</Box>
			</Paper>
		</>
	);
};
