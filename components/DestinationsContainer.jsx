import { Paper, Typography, Box } from "@mui/material";
import { DestinationsComponent } from "./DestinationsComponent";
import { useTranslation } from "next-i18next";

export const DestinationsContainer = () => {
	const { t } = useTranslation();
	return (
		<>
			<Paper
				elevation={0}
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "5em",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Typography variant="h3">{t("destinations.title")}</Typography>
					<Typography sx={{ fontSize: "1.2rem" }}>
						{t("destinations.slogan")}
					</Typography>
				</Box>

				<DestinationsComponent />
			</Paper>
		</>
	);
};
