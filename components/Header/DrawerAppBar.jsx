import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import {
	House,
	RoomService,
	Navigation,
	PhoneCallback,
} from "@mui/icons-material";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Colors } from "../../styles/theme";
import { SelectLanguageButton } from "../buttons/SelectLanguageButton";
import "@fontsource/roboto";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import yatch_logo from "../../assets/icons/logo-colorfull-1.png";

const drawerWidth = 240;

function DrawerAppBar(props) {
	const { t } = useTranslation();
	const { window } = props;
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Link href="/">
				<Image
					src={yatch_logo}
					alt="logo image"
					style={{
						alignItems: "center",
						// width: "100px",
						// height: "40px",
						margin: "10px",
					}}
					width={170}
					height={50}
				/>
			</Link>
			<Divider sx={{ backgroundColor: Colors.first_blue }} />
			<List
				sx={{
					fontFamily: "Roboto",
					fontWeight: "300",
					fontSize: "22px",
				}}
			>
				<ListItem
					disablePadding
					sx={{ ":hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" } }}
				>
					<Link href="/">
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<House sx={{ marginLeft: "15px", color: Colors.first_blue }} />
							<ListItemButton
								sx={{
									textAlign: "left",
								}}
							>
								<ListItemText primary={t("navbar.home")} />
							</ListItemButton>
						</Box>
					</Link>
				</ListItem>

				<ListItem
					disablePadding
					sx={{ ":hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" } }}
				>
					<Link href="/services">
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<RoomService
								sx={{ color: Colors.first_blue, marginLeft: "15px" }}
							/>
							<ListItemButton
								sx={{
									textAlign: "left",
								}}
							>
								<ListItemText primary={t("navbar.services")} />
							</ListItemButton>
						</Box>
					</Link>
				</ListItem>

				<ListItem
					disablePadding
					sx={{ ":hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" } }}
				>
					<Link href="/destiny">
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Navigation
								sx={{ color: Colors.first_blue, marginLeft: "15px" }}
							/>
							<ListItemButton
								sx={{
									textAlign: "left",
									":hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
								}}
							>
								<ListItemText primary={t("navbar.destinations")} />
							</ListItemButton>
						</Box>
					</Link>
				</ListItem>

				<ListItem
					disablePadding
					sx={{ ":hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" } }}
				>
					<Link href="/contact_us">
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<PhoneCallback
								sx={{ color: Colors.first_blue, marginLeft: "15px" }}
							/>
							<ListItemButton
								sx={{
									textAlign: "left",
								}}
							>
								<ListItemText primary={t("navbar.contact")} />
							</ListItemButton>
						</Box>
					</Link>
				</ListItem>
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<>
			<AppBar
				component="nav"
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: { xs: "space-between", sm: "space-around" },
					alignItems: "center",
					backgroundColor: Colors.white,
				}}
				elevation={5}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ ml: 1, display: { sm: "none" } }}
					>
						<MenuIcon
							sx={{
								color: Colors.title,
								width: "40px",
								height: "40px",
							}}
						/>
					</IconButton>

					<Box
						sx={{
							display: { xs: "none", sm: "block" },
							width: { sm: "180px" },
						}}
					>
						<Link href="/">
							<Image
								src={yatch_logo}
								alt="yatch logo company"
								width={200}
								height={50}
								style={{ width: "200px", height: "50px" }}
							/>
						</Link>
					</Box>
				</Toolbar>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						marginRight: "10px",
					}}
				>
					<Box>
						<SelectLanguageButton />
					</Box>
				</Box>
				<Box
					sx={{
						display: { xs: "none", sm: "block" },
					}}
				>
					<Button
						sx={{
							color: Colors.title,
							fontFamily: "Roboto",
							fontWeight: "500",
							fontSize: { sm: "12px", md: "14px", lg: "16px" },
							marginRight: { sm: "10px", md: "30px" },
							letterSpacing: 1.5,
						}}
					>
						<motion.div
							whileHover={{ translateY: -5 }}
							transition={{ duration: 0.5 }}
						>
							<Link href="/">{t("navbar.home")}</Link>
						</motion.div>
					</Button>

					<Button
						sx={{
							color: Colors.title,
							fontFamily: "Roboto",
							fontWeight: "550",
							fontSize: { sm: "12px", md: "14px", lg: "16px" },
							marginRight: { sm: "10px", md: "30px" },
							letterSpacing: 1.5,
						}}
					>
						<motion.div
							whileHover={{ translateY: -5 }}
							transition={{ duration: 0.5 }}
						>
							<Link href="/services">{t("navbar.services")}</Link>
						</motion.div>
					</Button>
					<Button
						sx={{
							color: Colors.title,
							fontFamily: "Roboto",
							fontWeight: "550",
							fontSize: { sm: "12px", md: "14px", lg: "16px" },
							marginRight: { sm: "10px", md: "30px" },
							letterSpacing: 1.5,
						}}
					>
						<motion.div
							whileHover={{ translateY: -5 }}
							transition={{ duration: 0.5 }}
						>
							<Link href="/destiny">{t("navbar.destinations")}</Link>
						</motion.div>
					</Button>
					<Button
						sx={{
							color: Colors.title,
							fontFamily: "Roboto",
							fontWeight: "550",
							fontSize: { sm: "12px", md: "14px", lg: "16px" },
							marginRight: { sm: "10px", md: "30px" },
							letterSpacing: 1.5,
						}}
					>
						<motion.div
							whileHover={{ translateY: -5 }}
							transition={{ duration: 0.5 }}
						>
							<Link href="/contact_us">{t("navbar.contact")}</Link>
						</motion.div>
					</Button>
				</Box>
			</AppBar>
			<Box component="nav">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</>
	);
}

DrawerAppBar.propTypes = {
	window: PropTypes.func,
};

export default DrawerAppBar;
