import { Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { useTranslation } from "next-i18next";

export const VideoDesktop = () => {
	const { t } = useTranslation();
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
					width: { xs: "90%", md: "80%" },
					marginLeft: "auto",
					marginRight: "auto",
				}}
			>
				<Typography
					variant="h3"
					sx={{ fontSize: { xs: "2.3rem", md: "3rem" } }}
				>
					Video Tour:
				</Typography>
				<Typography sx={{ fontSize: { xs: "1.1rem", md: "1.2rem" } }}>
					{t("video-tour.slogan")}
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
