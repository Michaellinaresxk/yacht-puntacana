import { Paper, Box, Typography, Button } from "@mui/material";
// import { styled } from "@mui/material/styles";
import { Colors } from "../../styles/theme";

const imageArray = [
	{
		id: 1,
		image:
			"https://res.cloudinary.com/michaelxk-com/image/upload/v1624139571/servicios/yates1_2_wbiap8.jpg",
		title: "Yacht Charter",
		description:
			"At Punta Cana Yacht Rentals we make everything possible, organizing private luxury yacht charters under customer specifications and providing the best personalized service to cover all the needs of your event.",
		action: "Book now",
	},
	{
		id: 2,
		image:
			"https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1672758964/9-2_qqkusx.jpg",
		title: "Catering Services",
		description:
			"We work with the best catering companies for private events in the Republic Dominican. Tell us what event you want to celebrate and our team will contact you to listen to you and offer you personalized proposals tailored to your needs.",
		action: "More info",
	},

	{
		id: 3,
		image:
			"https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1672758977/transporte_zrihn3.webp",
		title: "Private Transport",
		description:
			"For us as a company the most important thing is the safety and comfort of our clients, for this reason we offer you private transportation. We pick you up at your hotel or villa and take you directly to the Marina, to board your yacht, sail to your destination and live an unforgettable experience.",
		action: "More info",
	},
];

// const BannerImage = styled("img")(({ src, theme }) => ({
// 	src: `url(${src})`,
// 	width: "350px",
// 	height: "250px",
// 	[theme.breakpoints.down("md")]: {
// 		width: "450px",
// 		height: "300px",
// 	},

// 	[theme.breakpoints.down("sm")]: {
// 		width: "320px",
// 		height: "300px",
// 	},
// }));

export const ServicesCard = () => {
	return (
		<>
			<Box>
				{imageArray.map((image) => (
					<Paper
						elevation={3}
						key={image.id}
						sx={{
							marginTop: "100px",
							width: { xs: "73%", sm: "80%", md: "85%" },
							height: { xs: "550px", sm: "500px", md: "auto" },
							marginRight: "auto",
							marginLeft: "auto",
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: { xs: "column", md: "row" },
								marginTop: "30px",
							}}
						>
							<Box>
								<img
									className="image-responsive"
									src={image.image}
									style={{
										width: "350px",
										height: "250px",
										// objectFit: "cover",
										// width: "100%",
										// height: "100%",
									}}
								/>
								{/* <BannerImage src={image.image} /> */}
							</Box>
							<Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										alignContent: "center",
										width: "90%",
										marginLeft: "auto",
										marginRight: "auto",
									}}
								>
									<Typography
										mt={2}
										variant="subtitle1"
										color={Colors.first_blue}
									>
										{image.title}
									</Typography>
									<Typography mt={1}>{image.description}</Typography>
									<Button
										variant="contained"
										sx={{
											backgroundColor: Colors.first_blue,
											marginTop: "15px",
											width: { xs: "auto", md: "40%" },
										}}
									>
										<Typography>{image.action}</Typography>
									</Button>
								</Box>
							</Box>
						</Box>
					</Paper>
				))}
			</Box>
		</>
	);
};
