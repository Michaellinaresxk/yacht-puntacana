import {
	Grid,
	Container,
	Paper,
	Button,
	Typography,
	Box,
	TextField,
} from "@mui/material";

import { Colors } from "../styles/theme";

export const FormComponent = () => {
	return (
		<>
			<Container maxWidth="sm">
				<Grid
					container
					direction="column"
					alignItems="center"
					justifyContent="center"
					sx={{ maxHeight: "100vh" }}
				>
					<Grid item>
						<Paper sx={{ p: 2, borderRadius: "0.5em" }} elevation={3}>
							<Typography variant="h4">Keep in Touch: </Typography>
							<Box component="form" sx={{ padding: "1.5em" }}>
								<TextField
									fullWidth
									label="Name"
									required
									sx={{ mt: 2, mb: 2 }}
								/>
								<TextField
									fullWidth
									label="Email"
									type="email"
									required
									sx={{ mt: 2, mb: 2 }}
								/>
								<TextField
									fullWidth
									label="Message"
									required
									multiline
									sx={{ mt: 2, mb: 2 }}
									rows={5}
								/>
								<Button
									variant="contained"
									type="submit"
									fullWidth
									sx={{
										mt: 2,
										mb: 2,
										backgroundColor: Colors.first_blue,
										height: "50px",
										borderRadius: "0.5em",
									}}
									size="large"
								>
									Send Mesaage
								</Button>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};
