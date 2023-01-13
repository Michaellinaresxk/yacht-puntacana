import { Box, Paper, Typography } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const palmilla = [
	"https://res.cloudinary.com/michaelxk-com/image/upload/v1643827920/cygnus%20yachts/pictures/destinations/pages/catalina/CATALINA_jzpsmb.jpg",

	"https://res.cloudinary.com/michaelxk-com/image/upload/v1643827906/cygnus%20yachts/pictures/destinations/pages/catalina/catalina2_zlmr7k.jpg",

	"https://res.cloudinary.com/michaelxk-com/image/upload/v1635954415/cygnus%20yachts/pictures/destinations/pages/catalina/4_g5pkfh.jpg",
];

export const ServicesSliderSantaCatalina = () => {
	return (
		<>
			<Paper
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					width: "90%",
					marginLeft: "auto",
					marginRight: "auto",
				}}
			>
				<Box sx={{ width: "50%" }}>
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
						width: "50%",
						height: "350px",
					}}
				>
					<Box sx={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}>
						<Typography variant="h4">Santa Catalina</Typography>
						<Typography>
							Located 1.5 miles from the mainland in the southeast corner of the
							Dominican Republic, near the provinces of La Altagracia and La
							Romana. It is a protected Natural Park with an approximate area of
							​​9.6 square kilometers and totally uninhabited. This island
							discovered by the Spanish, baptized by the navigator Christopher
							Columbus, has truly picturesque landscapes and incomparable
							beauty. Due to its crystal clear and warm waters, it is the ideal
							home for an infinity of marine species. Catalina Island is one of
							the best places in the Dominican Republic for snorkeling, with its
							incredible marine life and pristine coral reefs.
						</Typography>
					</Box>
				</Box>
			</Paper>
		</>
	);
};
