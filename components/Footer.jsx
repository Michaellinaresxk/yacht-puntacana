import { Typography, Box, Paper } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../assets/icons/logo-colorfull-1.png";
import pay_image from "../assets/icons/pagos-con-paypal.png";
import { Colors } from "../styles/theme";
import { useTranslation } from "next-i18next";

export const Footer = () => {
	const { t } = useTranslation();
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
								{t("footer.description")}
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
							{t("footer.quicklinks")}
						</Typography>
						<Box sx={{ marginTop: "1em" }}>
							<Link href="/">
								<motion.div
									whileHover={{ translateY: -5 }}
									transition={{ duration: 0.5 }}
								>
									<Typography sx={{ ":hover": { color: Colors.first_blue } }}>
										{t("navbar.home")}
									</Typography>
								</motion.div>
							</Link>
							<Link href="/services">
								<motion.div
									whileHover={{ translateY: -5 }}
									transition={{ duration: 0.5 }}
								>
									<Typography
										sx={{
											":hover": { color: Colors.first_blue },
											marginTop: "5px",
										}}
									>
										{t("navbar.services")}
									</Typography>
								</motion.div>
							</Link>
							<Link href="/destiny">
								<motion.div
									whileHover={{ translateY: -5 }}
									transition={{ duration: 0.5 }}
								>
									<Typography
										sx={{
											":hover": { color: Colors.first_blue },
											marginTop: "5px",
										}}
									>
										{t("navbar.destinations")}
									</Typography>
								</motion.div>
							</Link>
							<Link href="/contact_us">
								<motion.div
									whileHover={{ translateY: -5 }}
									transition={{ duration: 0.5 }}
								>
									<Typography
										sx={{
											":hover": { color: Colors.first_blue },
											marginTop: "5px",
										}}
									>
										{t("navbar.contact")}
									</Typography>
								</motion.div>
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
							{t("footer.payment-methods")}
						</Typography>
						<Box sx={{ marginTop: "1em" }}>
							<Image
								alt="metodos de pago"
								src={pay_image}
								width={200}
								height={50}
							/>
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
							width={300}
							height={80}
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
