import { Typography, Box } from "@mui/material";

export const DescriptionBoatComponent = ({ data }) => {
	return (
		<Box
			sx={{
				marginTop: "50px",
				width: "auto",
				maxWidth: "90%",
				marginLeft: "auto",
				marginRight: "auto",
			}}
		>
			<Typography variant="h4">Description</Typography>

			<Typography variant="subtitle1" mt={2} component="p">
				{data.p1}
			</Typography>

			<Typography variant="subtitle1" mt={2} component="p">
				{data.p2}
			</Typography>

			<Typography variant="subtitle1" mt={2} component="p">
				{data.p3}
			</Typography>
		</Box>
	);
};
