import { Paper, Typography, Box, Button } from "@mui/material";

export const Banner = () => {
	return (
		<>
			<Box sx={{ marginTop: 0 }}>
				<Paper
					sx={{
						backgroundImage:
							"url(https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671125052/bg_rdqa9f.jpg)",
						width: "100%",
						height: "700px",
						backgroundPosition: "50% 50%",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						position: "relative",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							marginLeft: "70px",
							marginTop: "100px",
							position: "absolute",
						}}
					>
						<Typography sx={{ color: "rgba(0, 0, 0, 0.5)" }} variant="h2">
							Welcome aboard
						</Typography>
						<Box
							sx={{
								display: "inline-flex",
							}}
						>
							<Typography sx={{ color: "rgba(0, 0, 0, 0.5)" }} variant="h2">
								live the
							</Typography>
							<Typography
								sx={{ color: "rgba(0, 0, 0, 0.8)", marginLeft: "10px" }}
								variant="h2"
							>
								Experience!
							</Typography>
						</Box>
					</Box>
					<Button
						variant="text"
						size="medium"
						sx={{
							backgroundColor: "#fff",
							marginLeft: "70px",
							marginTop: "250px",
							":hover": { backgroundColor: "#ddd" },
							position: "absolute",
						}}
					>
						LUXURY YACHt
					</Button>
				</Paper>
			</Box>
		</>
	);
};