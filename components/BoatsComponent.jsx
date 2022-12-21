import {
	Container,
	Typography,
	Button,
	Grid,
	Card,
	CardMedia,
	CardContent,
	CardActions,
} from "@mui/material";

export const BoatsComponent = ({ props }) => {
	const boats = props.boats;

	return (
		<>
			<Container
				sx={{
					marginTop: "20px",
				}}
				maxWidth="md"
			>
				<Grid container spacing={3} sx={{}}>
					{boats.map((boat) => (
						<Grid item key={boat.id} sx={12} sm={6} md={4}>
							<Card>
								<CardMedia
									sx={{
										paddingTop: "56.25%",
									}}
									image={boat.principalImage}
									title="image title"
								/>

								<CardContent
									sx={{
										flexGrow: 1,
									}}
								>
									<Typography gutterBottom variant="h5">
										{boat.name}
									</Typography>
									<Typography>
										dbdvbsdjbjhsdhjcsd z zxcjasncasc
										scsajcscnksncsnkcnjsncksacascascsakcmskacksamckasmkcsacas
										scjsancjsnjsancjnsajkcnjsancjsanjcnasjncjsancjsncksjanckasc
										ascsachjasbcjhasbchbsahcbhasbchsabchsbhcb
									</Typography>
								</CardContent>
								<CardActions>
									<Button color="primary" size="medium">
										Más información
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};
