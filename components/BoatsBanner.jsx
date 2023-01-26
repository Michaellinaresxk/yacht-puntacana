import { Box, Typography } from "@mui/material";
import { Colors } from "../styles/theme";
import { motion } from "framer-motion";

export const BoatsBanner = ({ url, name }) => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				backgroundImage: `url(${url})`,
				width: "100%",
				height: { xs: "500px", sm: "450px", md: "550px", lg: "650px" },
				backgroundPosition: {
					xs: "40% 40%",
					sm: "30% 30%",
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
					marginTop: { xs: "350px", sm: "250px", md: "350px" },
					padding: "15px",
					borderRadius: "10px",
					backgroundColor: "rgba(0, 0, 0, 0.4)",
					color: "white",
					marginLeft: { xs: "35%", sm: "38%", md: "42%" },
					height: "60px",
				}}
			>
				<motion.div animate={{ x: [-500, 0] }} transition={{ duration: 1 }}>
					<Typography
						variant="h4"
						sx={{ color: Colors.white, fontSize: "clamp(1.5em, 3vw, 2em)" }}
					>
						{name}
					</Typography>
				</motion.div>
			</Box>
		</Box>
	);
};
