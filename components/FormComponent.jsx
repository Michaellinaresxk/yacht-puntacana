import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"puntacana_1234",
				"template_9015",
				form.current,
				"s1YNkQ9lwTZJcq9AQ"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<>
			<Container maxWidth="sm">
				<Grid
					container
					direction="column"
					alignItems="center"
					justifyContent="center"
					sx={{ maxHeight: "100vh", marginTop: "50px" }}
				>
					<Grid item>
						<Paper sx={{ p: 2, borderRadius: "0.5em" }} elevation={3}>
							<Typography variant="h4">Keep in Touch: </Typography>
							<Box
								component="form"
								id="template_9015"
								sx={{ padding: "1.5em" }}
								ref={form}
								onSubmit={sendEmail}
							>
								<TextField
									name="user_name"
									fullWidth
									label="Name"
									required
									sx={{ mt: 2, mb: 2 }}
								/>
								<TextField
									name="user_email"
									fullWidth
									label="Email"
									type="email"
									required
									sx={{ mt: 2, mb: 2 }}
								/>
								<TextField
									name="user_message"
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
