import { Typography, Box } from "@mui/material";
import { useTranslation } from "next-i18next";

export const DescriptionTiara43Boat = () => {
	const { t } = useTranslation();
	return (
		<Box
			sx={{
				marginTop: "70px",
				width: "auto",
				maxWidth: "90%",
				marginLeft: "auto",
				marginRight: "auto",
			}}
		>
			<Typography variant="h4">{t("tiara-43.desc")}</Typography>

			<Typography variant="subtitle1" mt={2} component="p">
				{t("tiara-43.p1")}
			</Typography>

			<Typography variant="subtitle1" mt={2} component="p">
				{t("tiara-43.p2")}
			</Typography>

			<Typography variant="subtitle1" mt={2} component="p">
				{" "}
			</Typography>
		</Box>
	);
};
