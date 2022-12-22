import {
	Container,
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

export const BoatsComponent = ({ props }) => {
	const boats = props.boats;

	return (
		<>
			<Container
				sx={{
					marginTop: "20px",
				}}
				maxWidth="lg"
			>
				<Grid container spacing={3} rowGap={2} columnGap={0}>
					{boats.map((boat) => (
						<Grid item key={boat.id} sx={12} sm={6} md={4}>
							<Paper elevation={10}>
								<Card>
									<CardMedia
										sx={{
											paddingTop: "56.25%",
										}}
										image={boat.principalImage}
										alt="image of boat"
									/>

									<CardContent
										sx={{
											flexGrow: 1,
										}}
									>
										<Typography gutterBottom variant="h5" mt={2}>
											{boat.name}
										</Typography>
										<Typography mt={2} sx={{ padding: "20px" }}>
											dbdvbsdjbjhsdhjcsd z zxcjasncasc
											scsajcscnksncsnkcnjsncksacascascsakcmskacksamckasmkcsacas
											scjsancjsnjsancjnsajkcnjsancjsanjcnasjncjsancjsncksjanckasc
											ascsachjasbcjhasbchbsahcbhasbchsabchsbhcb
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
												Más información
											</Button>
										</Link>
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
