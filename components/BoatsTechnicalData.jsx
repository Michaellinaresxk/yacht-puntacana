import { Box, Typography, Table } from "@mui/material";

export const BoatsTechnicalData = ({ data }) => {
	return (
		<>
			<Box sx={{ border: "1px solid #212121", marginTop: "15px" }}>
				<Typography>
					Aqui van los datos tecnicos del barco {data.name}
				</Typography>
				<Table></Table>
			</Box>
		</>
	);
};
