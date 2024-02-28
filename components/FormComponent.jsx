import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "next-i18next";

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
	const { t } = useTranslation();
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
			<Container maxWidth="sm" sx={{ marginTop: "100px" }}>
				<Grid
					container
					direction="column"
					alignItems="center"
					justifyContent="center"
					sx={{ maxHeight: "100vh", marginTop: "50px" }}
				>
					<Grid item>
						<Paper sx={{ p: 2, borderRadius: "0.5em" }} elevation={1}>
							<Typography variant="h4">
								{t("contact-page.keepinTouch")}:
							</Typography>
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
									label={t("contactForm.name")}
									required
									sx={{ mt: 2, mb: 2 }}
								/>
								<TextField
									name="user_email"
									fullWidth
									label={t("contactForm.email")}
									type="email"
									required
									sx={{ mt: 2, mb: 2 }}
								/>
								<TextField
									name="user_message"
									fullWidth
									label={t("contactForm.message")}
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
									onSubmit={sendEmail}
								>
									{t("button.sendMessage")}
								</Button>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};
