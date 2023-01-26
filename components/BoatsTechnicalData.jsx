import {
	Box,
	Paper,
	Typography,
	Table,
	TableContainer,
	TableCell,
	TableRow,
	TableBody,
} from "@mui/material";

import { useTranslation } from "next-i18next";

export const BoatsTechnicalData = ({ features }) => {
	// getting keys and values from the data object
	const { t } = useTranslation();
	const keys = Object.keys(features);
	const values = Object.values(features);

	return (
		<>
			<Box
				sx={{
					display: "flex",
					marginLeft: "50px",
					justifyContent: { xs: "center", md: "start" },
				}}
			>
				<Typography variant="h4" sx={{ marginTop: "50px" }}>
					{t("technical.technical")}:
				</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: { xs: "70%", sm: "60%", md: "50%" },
					marginLeft: "auto",
					marginRight: "auto",
					marginTop: "50px",
				}}
			>
				<TableContainer component={Paper} elevation={0}>
					<Table
						sx={{
							backgroundColor: "aqua",
						}}
					>
						<TableBody>
							{keys.map((item, i) => (
								<TableRow
									key={i}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell component="th" scope="row" align="center">
										<Typography variant="subtitle1" fontWeight="bold">
											{item}
										</Typography>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<TableContainer component={Paper} elevation={0}>
					<Table
						sx={{
							backgroundColor: "aqua",
						}}
					>
						<TableBody>
							{values.map((item, i) => (
								<TableRow
									key={i}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								>
									<TableCell component="th" scope="row" align="center">
										<Typography variant="subtitle1">{item}</Typography>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</>
	);
};
