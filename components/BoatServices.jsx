import { Box, Typography } from "@mui/material";

export const BoatServices = ({ data }) => {
	return (
		<>
			<Box sx={{ border: "1px solid #212121", marginTop: "15px" }}>
				<Typography>Aqui van los servicios del barco {data.name}</Typography>
			</Box>
		</>
	);
};
