import { Typography, Paper, Button, Box } from "@mui/material";
import { WhatsApp, Email, Phone } from "@mui/icons-material";

import { Colors } from "../styles/theme";
import Link from "next/link";

// creating string for links

const whastapp_api =
	"https://api.whatsapp.com/send?phone=18292963529&text=%C2%A1Bienvenido%20a%20bordo!%20%C2%BFC%C3%B3mo%20podemos%20ayudarte";

const phone_number = "tel:+18292963529";

const email_address = "mailto:booking@yachtpuntacana.com";

export const SupportBanner = () => {
	return (
		<>
			<Paper
				sx={{
					display: "flex",
					flexDirection: "row",
					backgroundColor: Colors.blur_blue,
					justifyContent: "center",
					flexWrap: "wrap",
					alignItems: "center",
					width: "100%",
					height: {
						xs: "400px",
						sm: "300px",
					},
				}}
				elevation={0}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: { xs: "center" },
						alignItems: { xs: "center", sm: "start" },
						marginTop: {
							xs: "20px",
						},
					}}
				>
					<Box>
						<Typography variant="h4" color={Colors.white}>
							Contact Us
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexWrap: "wrap",
							width: {
								xs: "450px",
								sm: "550px",
								md: "600px",
							},
							marginTop: "10px",
							marginLeft: {
								xs: "30px",
								sm: 0,
							},
						}}
					>
						<Typography
							variant="subtitle1"
							color={Colors.white}
							sx={{
								padding: {
									xs: "10px",
									sm: "5px",
								},
							}}
						>
							If you do not know exactly what type of boat to rent or you do not have time, fill out this form and tell us how many people will be on board, possible dates, approximate budget and we will send you a proposal by email.
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: { xs: "column", sm: "row" },
							// justifyContent: { xs: "space-between", sm: "space-around" },
							flexWrap: { xs: "wrap" },
							marginTop: { xs: "10px", sm: "30px" },
							marginBottom: { xs: "10px" },
						}}
					>
						<Link href={whastapp_api} target="_blank">
							<Button
								variant="contained"
								color="first_blue"
								sx={{
									":hover": { backgroundColor: Colors.second_blue },
									// marginLeft: {
									// 	xs: 0,
									// 	sm: "px",
									// 	md: "2px",
									// 	lg: "3px",
									// },
								}}
							>
								<WhatsApp color="white" />
								<Typography
									variant="caption"
									color={Colors.white}
									sx={{
										marginLeft: 1,

										width: {
											xs: "65px",
											sm: "50px",
											md: "65px",
										},
									}}
								>
									WHATSAPP
								</Typography>
							</Button>
						</Link>
						<Link href={phone_number}>
							<Button
								variant="contained"
								color="first_blue"
								sx={{
									marginLeft: {
										xs: 0,
										sm: "5px",
										md: "10px",
										lg: "15px",
									},
									marginTop: { xs: "10px", sm: 0 },
									":hover": { backgroundColor: Colors.second_blue },
								}}
							>
								<Phone color="white" />
								<Typography
									variant="caption"
									color={Colors.white}
									sx={{
										marginLeft: 1,
										width: {
											xs: "65px",
											sm: "50px",
											md: "65px",
										},
									}}
								>
									CALL US
								</Typography>
							</Button>
						</Link>
						<Link href={email_address}>
							<Button
								variant="contained"
								color="first_blue"
								sx={{
									marginLeft: {
										xs: 0,
										sm: "5px",
										md: "10px",
										lg: "15px",
									},
									":hover": { backgroundColor: Colors.second_blue },
									marginTop: { xs: "10px", sm: 0 },
								}}
							>
								<Email color="white" />
								<Typography
									variant="caption"
									color={Colors.white}
									sx={{
										marginLeft: 1,
										width: {
											xs: "65px",
											sm: "50px",
											md: "65px",
										},
									}}
								>
									E-MAIL
								</Typography>
							</Button>
						</Link>
					</Box>
				</Box>
			</Paper>
		</>
	);
};
