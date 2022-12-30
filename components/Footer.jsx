import { Typography, Box, Paper } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import logo from "../assets/icons/logo-colorfull-1.png";
import pay_image from "../assets/icons/pagos-con-paypal.png";
import { Colors } from "../styles/theme";

export const Footer = () => {
	return (
		<>
			<Paper
				sx={{
					display: "flex",
					flexDirection: "column",
					marginTop: "200px",
					backgroundColor: Colors.body,
					marginBottom: 0,
				}}
				elevation={0}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", sm: "column", md: "row" },
						justifyContent: { xs: "center" },

						alignContent: {
							xs: "space-between",
						},
						paddingTop: "70px",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flex: 1,
							flexDirection: "column",
							marginLeft: "50px",
							marginTop: "30px",
						}}
					>
						<Typography sx={{ color: Colors.soft_blue }} variant="h5">
							Yacht Punta Cana
						</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								flexWrap: "wrap",
							}}
						>
							<Typography variant="subtitle1" sx={{ marginTop: "1em" }}>
								Are you planning to rent a yacht in punta cana? Enjoy a private
								yacht charter and sail in the Caribbean Sea. We provide the best
								yacht experience with our luxury yachts. With us you will find
								the best offers for your unforgettable trip.
							</Typography>
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							flex: 1,
							flexDirection: "column",
							marginLeft: { xs: "40px", md: "100px" },
							marginTop: { xs: "30px" },
						}}
					>
						<Typography sx={{ color: Colors.soft_blue }} variant="h5">
							Quick Links
						</Typography>
						<Box sx={{ marginTop: "1em" }}>
							<Link href="/">
								<Typography sx={{ ":hover": { color: Colors.first_blue } }}>
									Home
								</Typography>
							</Link>
							<Link href="/services">
								<Typography
									sx={{
										":hover": { color: Colors.first_blue },
										marginTop: "5px",
									}}
								>
									Services
								</Typography>
							</Link>
							<Link href="/destiny">
								<Typography
									sx={{
										":hover": { color: Colors.first_blue },
										marginTop: "5px",
									}}
								>
									Destinations
								</Typography>
							</Link>
							<Link href="/contact_us">
								<Typography
									sx={{
										":hover": { color: Colors.first_blue },
										marginTop: "5px",
									}}
								>
									Contact
								</Typography>
							</Link>
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							flex: 1,
							flexDirection: "column",
							marginLeft: { xs: "40px" },
							marginTop: { xs: "30px" },
						}}
					>
						<Typography sx={{ color: Colors.soft_blue }} variant="h5">
							Payment Methods
						</Typography>
						<Box sx={{ marginTop: "1em" }}>
							<Image alt="metodos de pago" src={pay_image} />
						</Box>
					</Box>
				</Box>
				<Box
					sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
				>
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						<Image
							alt="website logo"
							src={logo}
							style={{ width: "300px", height: "80px" }}
						/>
						<Typography sx={{ marginTop: "50px", marginBottom: "50px" }}>
							2021 Yacht Punta Cana. All rights reserved
						</Typography>
					</Box>
				</Box>
			</Paper>
		</>
	);
};
