import { Box } from "@mui/material";
import { FixedComponent } from "./FixedComponent";
export const FixedComponentImage = ({ image }) => {
	return (
		<>
			<Box
				sx={{
					backgroundImage: `url(${image})`,
					width: "100%",
					height: "100vh",
					backgroundPosition: "50% 50%",
					backgroundAttachment: "fixed",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<FixedComponent />
			</Box>
		</>
	);
};
