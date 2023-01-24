import { Paper, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

export const MainBanner = () => {
	const { t } = useTranslation();
	return (
		<>
			<Paper
				sx={{
					backgroundImage:
						"url(https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671125052/bg_rdqa9f.jpg)",
					width: "100%",
					height: { xs: "500px", sm: "600px", md: "750px", lg: "900px" },
					backgroundPosition: {
						xs: "50% 50%",
						md: "70% 50%",
					},
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
				elevation={0}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						marginLeft: { xs: "20px", sm: "40px", md: "60px", lg: "70px" },
						marginTop: { xs: "70px", sm: "60px", md: "80px", lg: "100px" },
						position: "absolute",
					}}
				>
					<Typography
						sx={{
							fontSize: "clamp(2em, 4vw, 3em)",
							marginTop: { xs: "20px" },
						}}
					>
						{t("mainBanner.title")}
					</Typography>
					<Box
						sx={{
							display: "inline-flex",
						}}
					>
						<Typography
							sx={{
								fontSize: "clamp(1.5em, 4vw, 3em)",
							}}
						>
							{t("mainBanner.subtitle")}
						</Typography>
						<Typography
							sx={{
								marginLeft: "10px",
								fontWeight: "bold",
								fontSize: "clamp(1.5em, 4vw, 3em)",
							}}
						>
							{t("mainBanner.span")}
						</Typography>
					</Box>
				</Box>
				<motion.div animate={{ x: [-300, 0] }} transition={{ duration: 2.5 }}>
					<Button
						component="button"
						variant="text"
						size="medium"
						sx={{
							backgroundColor: "#fff",
							marginLeft: { xs: "20px", sm: "40px", md: "60px", lg: "70px" },
							marginTop: { xs: "180px", sm: "200px", md: "250px", lg: "280px" },
							paddingRight: { xs: "10px", sm: "10px", md: "20px" },
							paddingLeft: { xs: "10px", sm: "10px", md: "20px" },
							":hover": { backgroundColor: "#ddd" },
							position: "absolute",
							fontSize: { xs: "10px", sm: "13px", md: "18px" },
							borderRadius: "10px",
						}}
					>
						LUXURY YACHT
					</Button>
				</motion.div>
			</Paper>
		</>
	);
};
