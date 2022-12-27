import { Typography, Paper, Box, List } from "@mui/material";
import { Check } from "@mui/icons-material";
import { Colors } from "../styles/theme";

export const BannerImageClip = () => {
	return (
		<>
			<Paper
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					justifyContent: "space-around",
					width: "100%",
					height: "700px",
					flexWrap: "wrap",
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
					More than 10 years providing the best yacht charter prices without intermediaries for a perfect and beautiful experience.
					</Typography>

					<Typography variant="h6" marginTop={5}>
					We are owners of our yacht fleet and we have the experience and knowledge to offer you the best
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
							Save Hassle
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
							Hire Experts
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
							Without Intermediaries
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
							Ensure your safety
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
							Let's go yachting
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box
					sx={{
						flex: 1,
						backgroundImage:
							"url(https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671227427/DJI_0426_aisn2a.jpg)",
						width: "100%",
						height: { xs: "300px", sm: "400px", md: "500px" },
						backgroundPosition: "50% 50%",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						clipPath:
							"polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
						marginTop: { xs: "50px", md: "100px" },
						marginLeft: "50px",
					}}
				></Box>
			</Paper>
		</>
	);
};
