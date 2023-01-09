import { Box } from "@mui/material";
import { FixedComponent } from "./FixedComponent";
export const FixedComponentImage = () => {
	return (
		<>
			<Box
				sx={{
					backgroundImage:
						"url(https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671125052/bg_rdqa9f.jpg)",
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
