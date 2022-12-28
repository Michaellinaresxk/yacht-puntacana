import { Typography, Box } from "@mui/material";

export const DescriptionBoatComponent = ({ data }) => {
	return (
		<Box
			sx={{
				marginTop: "20px",
				border: "1px solid #212121",
			}}
		>
			<Typography variant="h4">Description</Typography>
			<Typography variant="subtitle1" mt={5}>
				Aqui va el contenido de la descripcion del barco {data.name}
			</Typography>
		</Box>
	);
};
