import { Card, CardMedia, Paper } from "@mui/material";

export const VideoComponent = () => {
	return (
		<>
			<Paper
				sx={{
					width: "80%",
					margin: "auto",
					marginTop: "50px",
					marginBottom: "50px",
				}}
				elevation={0}
			>
				<Card sx={{}}>
					<CardMedia
						component="iframe"
						allowFullScreen={true}
						sx={{
							width: {
								sx: "90%",
								md: "85%",
								lg: "80%",
							},
							margin: "auto",
							height: {
								xs: "150px",
								sm: "300px",
								md: "350px",
								lg: "500px",
							},

							border: "none",
						}}
						image="https://res.cloudinary.com/freelancer2222222222222222/video/upload/v1671285248/video-tour_sxqsw8.mp4"
					/>
				</Card>
			</Paper>
		</>
	);
};
