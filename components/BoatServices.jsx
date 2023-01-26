import { Box, Typography } from "@mui/material";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import SupportIcon from "@mui/icons-material/Support";
import AnchorIcon from "@mui/icons-material/Anchor";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import LiquorIcon from "@mui/icons-material/Liquor";
import { useTranslation } from "next-i18next";
import { Colors } from "../styles/theme";

export const BoatServices = () => {
	const { t } = useTranslation();
	return (
		<>
			<Box
				sx={{
					width: "90%",
					marginLeft: "auto",
					marginRight: "auto",
					marginTop: "70px",
				}}
			>
				<Typography variant="h4">{t("included-serv.included")}:</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					justifyContent: "space-between",
					marginTop: "30px",
					width: "auto",
					maxWidth: "90%",
					marginTop: "30px",
					marginBottom: "70px",
					marginLeft: "auto",
					marginRight: "auto",
				}}
			>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<Box display="flex">
						<LocalGasStationIcon
							sx={{
								width: "30px",
								height: "30px",
								color: Colors.second_blue,
							}}
						/>
						<Typography variant="subtitle1" ml={1}>
							{t("included-serv.fuel")}
						</Typography>
					</Box>
					<Box display="flex" sx={{ marginTop: { xs: "10px" } }}>
						<SupportIcon
							sx={{
								width: "30px",
								height: "30px",
								color: Colors.second_blue,
							}}
						/>
						<Typography variant="subtitle1" ml={1}>
							{t("included-serv.lifeSavin")}
						</Typography>
					</Box>
					<Box display="flex" sx={{ marginTop: { xs: "10px" } }}>
						<SportsBarIcon
							sx={{
								width: "30px",
								height: "30px",
								color: Colors.second_blue,
							}}
						/>
						<Typography variant="subtitle1" ml={1}>
							{t("included-serv.beer")}
						</Typography>
					</Box>
				</Box>

				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<Box display="flex" sx={{ marginTop: { xs: "10px" } }}>
						<AnchorIcon
							sx={{
								width: "30px",
								height: "30px",
								color: Colors.second_blue,
							}}
						/>
						<Typography variant="subtitle1" ml={1}>
							{t("included-serv.captain")}
						</Typography>
					</Box>

					<Box display="flex" sx={{ marginTop: { xs: "10px" } }}>
						<RestaurantIcon
							sx={{
								width: "30px",
								height: "30px",
								color: Colors.second_blue,
							}}
						/>
						<Typography variant="subtitle1" ml={1}>
							{t("included-serv.menu")}
						</Typography>
					</Box>

					<Box display="flex" sx={{ marginTop: { xs: "10px" } }}>
						<DirectionsCarIcon
							sx={{
								width: "30px",
								height: "30px",
								color: Colors.second_blue,
							}}
						/>
						<Typography variant="subtitle1" ml={1}>
							{t("included-serv.transport")}
						</Typography>
					</Box>
				</Box>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<Box display="flex" sx={{ marginTop: { xs: "10px" } }}>
						<LiquorIcon
							sx={{
								width: "30px",
								height: "30px",
								color: Colors.second_blue,
							}}
						/>
						<Typography variant="subtitle1" ml={1}>
							{t("included-serv.water")}
						</Typography>
					</Box>

					<Box display="flex" sx={{ marginTop: { xs: "10px" } }}>
						<BeachAccessIcon
							sx={{
								width: "30px",
								height: "30px",
								color: Colors.second_blue,
							}}
						/>
						<Typography variant="subtitle1">
							{t("included-serv.access")}
						</Typography>
					</Box>
				</Box>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<Box display="flex" sx={{ marginTop: { xs: "10px" } }}>
						<HomeRepairServiceIcon
							sx={{
								width: "30px",
								height: "30px",
								color: Colors.second_blue,
							}}
						/>
						<Typography variant="subtitle1" ml={1}>
							{t("included-serv.snorkeling")}
						</Typography>
					</Box>

					<Box display="flex" sx={{ marginTop: { xs: "10px" } }}>
						<LocalDrinkIcon
							sx={{
								width: "30px",
								height: "30px",
								color: Colors.second_blue,
							}}
						/>
						<Typography variant="subtitle1" ml={1}>
							{t("included-serv.softDrinl")}
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
};
