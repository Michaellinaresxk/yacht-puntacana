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
	Language,
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

import yatch_logo from "../../assets/icons/logo-colorfull-1.png";

const drawerWidth = 240;

const navItems = ["Inicio", "Servicios", "Destino", "Contacto"];

function DrawerAppBar(props) {
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
				{/* {navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton
							sx={{
								textAlign: "left",
							}}
						>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))} */}

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
								<ListItemText primary="Home" />
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
								<ListItemText primary="Services" />
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
								<ListItemText primary="Destination" />
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
								<ListItemText primary="Contact us" />
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
						<Language
							sx={{
								display: { xs: "block", sm: "none" },
								marginRight: "10px",
								width: "40px",
								height: "40px",
								color: Colors.first_blue,
							}}
						/>
						<SelectLanguageButton />
					</Box>
				</Box>
				<Box
					sx={{
						display: { xs: "none", sm: "block" },
					}}
				>
					{/* {navItems.map((item) => (
							<Button
								key={item}
								sx={{
									color: Colors.title,
									fontFamily: "Raleway",
									fontWeight: "700",
									fontSize: { md: "14px", lg: "18px" },
									marginRight: "30px",
								}}
							>
								<Link href={}>{item}</Link>
							</Button>
						))} */}

					<Button
						sx={{
							color: Colors.title,
							fontFamily: "Roboto",
							fontWeight: "300",
							fontSize: { sm: "12px", md: "14px", lg: "16px" },
							marginRight: { sm: "10px", md: "30px" },
						}}
					>
						<Link href="/">Home</Link>
					</Button>
					<Button
						sx={{
							color: Colors.title,
							fontFamily: "Roboto",
							fontWeight: "300",
							fontSize: { sm: "12px", md: "14px", lg: "16px" },
							marginRight: { sm: "10px", md: "30px" },
						}}
					>
						<Link href="/services">Services</Link>
					</Button>
					<Button
						sx={{
							color: Colors.title,
							fontFamily: "Roboto",
							fontWeight: "300",
							fontSize: { sm: "12px", md: "14px", lg: "16px" },
							marginRight: { sm: "10px", md: "30px" },
						}}
					>
						<Link href="/destiny">Destinations</Link>
					</Button>
					<Button
						sx={{
							color: Colors.title,
							fontFamily: "Roboto",
							fontWeight: "300",
							fontSize: { sm: "12px", md: "14px", lg: "16px" },
							marginRight: { sm: "10px", md: "30px" },
						}}
					>
						<Link href="/contact_us">Contact</Link>
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
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default DrawerAppBar;
