import {
	Container,
	Box,
	Typography,
	Button,
	Grid,
	Paper,
	Card,
	CardMedia,
	CardContent,
	CardActions,
} from "@mui/material";

import Link from "next/link";

export const BoatsComponent = ({ data }) => {
	return (
		<>
			<Container
				sx={{
					marginTop: "20px",
					maxWidth: "lg",
				}}
			>
				<Grid container spacing={3} rowGap={2}>
					{data.map((boat) => (
						<Grid item key={boat.id} xs={12} sm={6} md={4}>
							<Paper
								sx={{
									width: { xs: "80%", sm: "280px", lg: "350px" },
									marginLeft: { xs: "auto" },
									marginRight: { xs: "auto" },
									columnGap: {
										sm: "10px",
										md: "15px",
									},
								}}
								elevation={10}
							>
								<Card>
									<CardMedia
										sx={{
											paddingTop: "56.25%",
										}}
										image={boat.principalImage}
										alt="image of boat"
									/>

									<CardContent sx={{ padding: "30px" }}>
										<Typography variant="h5" mt={2}>
											{boat.name}
										</Typography>
										<Box ml={1} sx={{ display: "flex" }}>
											<Typography mt={2} flexWrap="wrap">
												dbdvbsdjbjhsdhjcsd z zxcjasncasc
												scsajcscnksncsnkcnjsncksacascascsakcmskacksamckasmkcsacas
												scjsancjsnjsancjnsajkcnjsancjsanjcnasjncjsancjsncksjanckasc
												ascsachjasbcjha
											</Typography>
										</Box>
									</CardContent>
									<CardActions
										sx={{
											display: "flex",
											flexGrow: 1,
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<Link href={`/boat/${boat.id}`}>
											<Button
												color="primary"
												size="large"
												mt={2}
												variant="contained"
												sx={{
													marginBottom: "50px",
												}}
											>
												Más información
											</Button>
										</Link>
									</CardActions>
								</Card>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};
