import { Typography, Box } from "@mui/material";
import { useTranslation } from "next-i18next";

export const DescriptionFairlineBoat = () => {
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
			<Typography variant="h4">{t("fairline.desc")}</Typography>

			<Typography variant="subtitle1" mt={2} component="p">
				{t("fairline.p1")}
			</Typography>

			<Typography variant="subtitle1" mt={2} component="p">
				{t("fairline.p2")}
			</Typography>

			<Typography variant="subtitle1" mt={2} component="p">
				{t("fairline.p3")}
			</Typography>
		</Box>
	);
};
