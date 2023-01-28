import { Typography, Paper, Box, List } from "@mui/material";
import { Check } from "@mui/icons-material";
import { Colors } from "../styles/theme";
import { useTranslation } from "next-i18next";

export const BannerImageClip = () => {
	const { t } = useTranslation();

	return (
		<>
			<Paper
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					justifyContent: "space-around",
					width: "100%",
					height: "700px",
					flexWrap: "wrap",
					backgroundColor: "#eeeeee",
					marginTop: "100px",
				}}
				elevation={0}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						flex: 1,
						alignContent: "space-between",
						marginTop: "50px",
						marginLeft: "40px",
					}}
				>
					<Typography variant="h4">{t("owners.title")}</Typography>

					<Typography variant="h6" marginTop={5}>
						{t("owners.subtitle")}
					</Typography>
					<Box sx={{ color: Colors.first_blue }} marginTop={5}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
							}}
						>
							<Check />
							<Typography variant="h5" marginLeft={1}>
								{t("owners.list1")}
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
							}}
						>
							<Check />
							<Typography variant="h5" marginLeft={1}>
								{t("owners.list2")}
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
							}}
						>
							<Check />
							<Typography variant="h5" marginLeft={1}>
								{t("owners.list3")}
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
							}}
						>
							<Check />
							<Typography variant="h5" marginLeft={1}>
								{t("owners.list4")}
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
							}}
						>
							<Check />
							<Typography variant="h5" marginLeft={1}>
								{t("owners.list5")}
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box
					sx={{
						display: { xs: "none", md: "block" },
						flex: 1,
						backgroundImage:
							"url(https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671227427/DJI_0426_aisn2a.jpg)",
						width: "100%",
						height: { xs: "300px", sm: "400px", md: "500px" },
						backgroundPosition: "50% 50%",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						clipPath:
							"polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
						marginTop: { xs: "50px", md: "100px" },
						marginLeft: "50px",
					}}
				></Box>
			</Paper>
		</>
	);
};
