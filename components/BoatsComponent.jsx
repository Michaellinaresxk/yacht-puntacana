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

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const image1 =
	"https://res.cloudinary.com/michaelxk-com/image/upload/v1653911999/PC-YACHTS/yachts/cranchi-50/bg_dxwftv.jpg";
const image2 =
	"https://res.cloudinary.com/michaelxk-com/image/upload/v1654295753/PC-YACHTS/yachts/fairline-48-targa/bg1_gvvwgv.jpg";
const image3 =
	"https://res.cloudinary.com/michaelxk-com/image/upload/v1624143983/nuestra%20flota/aicon-fly-56/Aicon%20fly%2056.jpg";
const image4 =
	"https://res.cloudinary.com/michaelxk-com/image/upload/v1654298934/PC-YACHTS/yachts/tiara-39-open/3_mnzxmo.jpg";
const image5 =
	"https://res.cloudinary.com/michaelxk-com/image/upload/v1624144245/nuestra%20flota/meridian-42/Yate-5_wzfnuv.jpg";
const image6 =
	"https://res.cloudinary.com/michaelxk-com/image/upload/v1654297562/PC-YACHTS/yachts/Tiara-43-Sovran/1_gvy77c.jpg";

export const BoatsComponent = () => {
	const { t } = useTranslation();
	return (
		<>
			<Container
				sx={{
					marginTop: "60px",
					maxWidth: "lg",
				}}
			>
				<Grid container spacing={3} rowGap={3}>
					<Grid item xs={12} sm={6} md={4}>
						<motion.div whileHover={{ scale: 1.05 }}>
							<Card
								sx={{
									maxWidth: 350,
									height: 530,
									marginLeft: { xs: "auto" },
									marginRight: { xs: "auto" },
								}}
								elevation={4}
							>
								<CardMedia sx={{ height: 250 }} image={image1} />
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Cranchi 50
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{t("yacht-card.cranchi")}
									</Typography>
								</CardContent>
								<CardActions
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Link href="/boats/cranchi_boat">
										<motion.div
											className="animatable"
											whileHover={{
												scale: 1.1,
												transition: { duration: 0.3 },
											}}
											whileTap={{ scale: 0.9 }}
										>
											<Button
												color="primary"
												size="large"
												mt={2}
												variant="contained"
												sx={{
													marginTop: "10px",
												}}
											>
												{t("button.more")}
											</Button>
										</motion.div>
									</Link>
								</CardActions>
							</Card>
						</motion.div>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<motion.div whileHover={{ scale: 1.05 }}>
							<Card
								sx={{
									maxWidth: 350,
									height: 530,
									marginLeft: { xs: "auto" },
									marginRight: { xs: "auto" },
								}}
								elevation={4}
							>
								<CardMedia
									sx={{ height: 250 }}
									image={image2}
									title="green iguana"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Fairline 48 Targa
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{t("yacht-card.fairline")}
									</Typography>
								</CardContent>
								<CardActions
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Link href="/boats/fairline_boat">
										<motion.div
											className="animatable"
											whileHover={{
												scale: 1.1,
												transition: { duration: 0.3 },
											}}
											whileTap={{ scale: 0.9 }}
										>
											<Button
												color="primary"
												size="large"
												mt={2}
												variant="contained"
												sx={{
													marginTop: "30px",
												}}
											>
												{t("button.more")}
											</Button>
										</motion.div>
									</Link>
								</CardActions>
							</Card>
						</motion.div>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<motion.div whileHover={{ scale: 1.05 }}>
							<Card
								sx={{
									maxWidth: 350,
									height: 530,
									marginLeft: { xs: "auto" },
									marginRight: { xs: "auto" },
								}}
								elevation={4}
							>
								<CardMedia
									sx={{ height: 250 }}
									image={image3}
									title="green iguana"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Icon Fly 60
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{t("yacht-card.aiconfly-60")}
									</Typography>
								</CardContent>
								<CardActions
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Link href="/boats/aiconfly_boat">
										<motion.div
											className="animatable"
											whileHover={{
												scale: 1.1,
												transition: { duration: 0.3 },
											}}
											whileTap={{ scale: 0.9 }}
										>
											<Button
												color="primary"
												size="large"
												mt={2}
												variant="contained"
												sx={{
													marginTop: "30px",
												}}
											>
												{t("button.more")}
											</Button>
										</motion.div>
									</Link>
								</CardActions>
							</Card>
						</motion.div>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<motion.div whileHover={{ scale: 1.05 }}>
							<Card
								sx={{
									maxWidth: 350,
									height: 530,
									marginLeft: { xs: "auto" },
									marginRight: { xs: "auto" },
								}}
								elevation={4}
							>
								<CardMedia
									sx={{ height: 250 }}
									image={image4}
									title="green iguana"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Tiara 39 Open
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{t("yacht-card.tiara39")}
									</Typography>
								</CardContent>
								<CardActions
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Link href="/boats/tiara39_boat">
										<motion.div
											className="animatable"
											whileHover={{
												scale: 1.1,
												transition: { duration: 0.3 },
											}}
											whileTap={{ scale: 0.9 }}
										>
											<Button
												color="primary"
												size="large"
												mt={2}
												variant="contained"
												sx={{
													marginTop: "30px",
												}}
											>
												{t("button.more")}
											</Button>
										</motion.div>
									</Link>
								</CardActions>
							</Card>
						</motion.div>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<motion.div whileHover={{ scale: 1.05 }}>
							<Card
								sx={{
									maxWidth: 350,
									height: 530,
									marginLeft: { xs: "auto" },
									marginRight: { xs: "auto" },
								}}
								elevation={4}
							>
								<CardMedia
									sx={{ height: 250 }}
									image={image5}
									title="green iguana"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Meridian
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{t("yacht-card.meridian")}
									</Typography>
								</CardContent>
								<CardActions
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Link href="/boats/meridian_boat">
										<motion.div
											className="animatable"
											whileHover={{
												scale: 1.1,
												transition: { duration: 0.3 },
											}}
											whileTap={{ scale: 0.9 }}
										>
											<Button
												color="primary"
												size="large"
												mt={2}
												variant="contained"
												sx={{
													marginTop: "30px",
												}}
											>
												{t("button.more")}
											</Button>
										</motion.div>
									</Link>
								</CardActions>
							</Card>
						</motion.div>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<motion.div whileHover={{ scale: 1.05 }}>
							<Card
								sx={{
									maxWidth: 350,
									height: 530,
									marginLeft: { xs: "auto" },
									marginRight: { xs: "auto" },
								}}
								elevation={4}
							>
								<CardMedia
									sx={{ height: 250 }}
									image={image6}
									title="green iguana"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Tiara 43 Sovran
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{t("yacht-card.tiara43")}
									</Typography>
								</CardContent>
								<CardActions
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Link href="/boats/tiara43_boat">
										<motion.div
											className="animatable"
											whileHover={{
												scale: 1.1,
												transition: { duration: 0.3 },
											}}
											whileTap={{ scale: 0.9 }}
										>
											<Button
												color="primary"
												size="large"
												mt={2}
												variant="contained"
												sx={{
													marginTop: "30px",
												}}
											>
												{t("button.more")}
											</Button>
										</motion.div>
									</Link>
								</CardActions>
							</Card>
						</motion.div>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};
