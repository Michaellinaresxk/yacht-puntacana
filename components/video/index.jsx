import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { VideoDesktop } from "./VideoDesktop";
import { VideoMobile } from "./VideoMobile";

export const VideoComponent = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));

	return <>{matches ? <VideoMobile /> : <VideoDesktop />}</>;
};
