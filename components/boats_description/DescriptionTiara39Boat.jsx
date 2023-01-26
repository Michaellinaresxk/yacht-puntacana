import { Typography, Box } from "@mui/material";
import { useTranslation } from "next-i18next";

export const DescriptionTiara39Boat = () => {
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
			<Typography variant="h4">{t("tiara-39.desc")}</Typography>

			<Typography variant="subtitle1" mt={2} component="p">
				{t("tiara-39.p1")}
			</Typography>

			<Typography variant="subtitle1" mt={2} component="p">
				{t("tiara-39.p2")}
			</Typography>

			<Typography variant="subtitle1" mt={2} component="p">
				{" "}
			</Typography>
		</Box>
	);
};
