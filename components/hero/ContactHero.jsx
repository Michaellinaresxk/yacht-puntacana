import { Paper, Box, Typography } from "@mui/material";
import { Colors } from "../../styles/theme";
import { useTranslation } from "next-i18next";

export const ContactHero = ({ theme }) => {
	const { t } = useTranslation();
	return (
		<>
			<Paper
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundImage:
						"url(https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671235518/banner_fauzex.jpg)",
					maxWidth: "100%",
					height: "400px",
					backgroundPosition: "50% 50%",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<Box
					sx={{
						color: Colors.white,
						// position: "absolute",
					}}
				>
					<Typography
						variant="h4"
						color={Colors.white}
						sx={{ fontWeight: "bold" }}
					>
						{t("contact-page.title")}:
					</Typography>
				</Box>
			</Paper>
		</>
	);
};
