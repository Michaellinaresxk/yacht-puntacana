import { Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";

export const VideoDesktop = () => {
	const urlVideo =
		"https://res.cloudinary.com/freelancer2222222222222222/video/upload/v1671285248/video-tour_sxqsw8.mp4";
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Typography variant="h3">Video Tour:</Typography>
				<Typography sx={{ fontSize: "1.2rem" }}>
					Find out more with our video of the most beautiful and pleasant yachts
					adventures.
				</Typography>
			</Box>
			<div className="video-player">
				<ReactPlayer
					className="video-item"
					playing={false}
					url={urlVideo}
					controls
					loop
					width="100%"
					height="100%"
					wrapper="div"
				/>
			</div>
		</>
	);
};
