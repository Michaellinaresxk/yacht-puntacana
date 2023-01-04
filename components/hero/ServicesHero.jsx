import { Paper, Box, Typography } from "@mui/material";

export const ServicesHero = () => {
	return (
		<>
			<Paper
				sx={{
					backgroundImage:
						"url(https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1672686042/bg-services_qcxtfu.jpg)",
					width: "100%",
					height: { xs: "500px", sm: "600px", md: "750px", lg: "700px" },
					backgroundPosition: {
						xs: "50% 50%",
						md: "50% 50%",
					},
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<Box
					sx={{
						alignSelf: "center",
						position: "absolute",
						marginTop: { xs: "75px", sm: "80px", md: "60px" },
						padding: "15px",
						borderRadius: "10px",
						// backgroundColor: "rgba(0, 0, 0, 0.4)",
						color: "white",
						marginLeft: { xs: "20%", sm: "27%", md: "25%" },
						height: "60px",
					}}
				>
					<Typography
						sx={{ fontSize: "clamp(2.2em, 6vw, 7em)", fontWeight: "bold" }}
					>
						Yacht Punta Cana
					</Typography>
				</Box>
			</Paper>
		</>
	);
};
