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
							<Card
								sx={{
									maxWidth: 345,
									marginLeft: { xs: "auto" },
									marginRight: { xs: "auto" },
								}}
								elevation={10}
							>
								<CardMedia
									sx={{ height: 200 }}
									image={boat.principalImage}
									title="green iguana"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{boat.name}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Lizards are a widespread group of squamate reptiles, with
										over 6,000 species, ranging across all continents except
										Antarctica andres se fue de paseo en la noche oscura y fria
									</Typography>
								</CardContent>
								<CardActions
									sx={{
										display: "flex",
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
							{/* <Paper
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
										height={300}
									/>

									<CardContent>
										<Typography variant="h5" mt={2}>
											{boat.name}
										</Typography>

										<Typography
											mt={2}
											variant="subtitle1"
											component="div"
											pr={5}
											mr={10}
										>
											dbdvbsdjbjhsdhjcsd z zxcjasncasc
											scsajcscnksncsnkcnjsncksacascascsakcmskacksamckasmkcsacas
											scjsancjsnjsancjnsajkcnjsancjsanjcnasjncjsancjsn
										</Typography>
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
												More Information
											</Button>
										</Link>
									</CardActions>
								</Card>
							</Paper> */}
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};
