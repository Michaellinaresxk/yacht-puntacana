import { Typography, Box } from "@mui/material";
import { useTranslation } from "next-i18next";

export const MainTitleBoatServices = () => {
	const { t } = useTranslation();
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					marginTop: "150px",
					marginBottom: "100px",
					marginLeft: { xs: "15px" },
					marginRight: { xs: "15px" },
				}}
			>
				<Typography
					variant="h2"
					sx={{
						fontWeight: "bold",
						color: "first_blue",
						fontSize: "clamp(2em, 5vw, 4em)",
					}}
				>
					{t("services-page.subtitle")}
				</Typography>
				<Typography sx={{ fontSize: "1.2rem" }}>
					{t("weAre.slogan")} {t("weAre.slogan1")}
				</Typography>
			</Box>
		</>
	);
};
