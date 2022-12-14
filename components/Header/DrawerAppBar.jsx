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
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Colors } from "../../styles/theme";
import "@fontsource/raleway";
import "@fontsource/open-sans";

import Image from "next/image";
// Image = img
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
			<Image
				src={yatch_logo}
				alt="logo image"
				style={{
					alignItems: "center",
					width: "100px",
					height: "40px",
					margin: "10px",
				}}
			/>
			<Divider sx={{ color: Colors.title }} />
			<List
				sx={{
					fontFamily: "Raleway",
					fontWeight: "700",
					fontSize: "18px",
				}}
			>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton
							sx={{
								textAlign: "left",
							}}
						>
							<ListItemText primary={item} sx={{}} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box
			sx={{
				display: "flex",
			}}
		>
			<AppBar
				component="nav"
				sx={{
					justifyContent: "space-between",
					backgroundColor: Colors.white,
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon
							sx={{ color: Colors.title, width: "40px", height: "40px" }}
						/>
					</IconButton>
					{/* <Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
					>
						MUI
					</Typography> */}
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", sm: "block" },
						}}
					>
						<Image
							src={yatch_logo}
							alt="yatch logo company"
							style={{ width: "200px", height: "50px", marginLeft: "30px" }}
						/>
					</Box>
					<Box
						sx={{
							display: { xs: "none", sm: "block" },
						}}
					>
						{navItems.map((item) => (
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
								{item}
							</Button>
						))}
					</Box>
				</Toolbar>
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
			<Box component="main" sx={{ p: 3 }}>
				<Toolbar />
			</Box>
		</Box>
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
