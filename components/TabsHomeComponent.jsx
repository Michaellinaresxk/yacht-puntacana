import { useState } from "react";
import { Paper, Box, Typography, Tab, Button } from "@mui/material";
import {
	Sailing,
	EventAvailable,
	AirportShuttle,
	Cake,
} from "@mui/icons-material";

import { TabList, TabContext, TabPanel } from "@mui/lab";
import { Colors } from "../styles/theme";

const TabsHomeComponent = () => {
	const [value, setValue] = useState("1");
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Paper
				sx={{
					// display: "flex",
					// justifyContent: "center",
					// alignItems: "center",
					backgroundColor: "white",
					marginTop: "50px",
					width: "80%",
					height: "350px",
					marginLeft: "auto",
					marginRight: "auto",
				}}
				elevation={15}
			>
				<TabContext value={value}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							alignContent: "space-around",
							borderBottom: 1,
							borderColor: "divider",
						}}
					>
						<TabList onChange={handleChange} aria-label="lab API tabs example">
							<Tab
								sx={{
									color: Colors.second_blue,
									fontWeight: "bold",
									":hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
									marginLeft: "40px",
								}}
								icon={<Sailing />}
								iconPosition="start"
								label="Yacht Charter"
								value="1"
							/>
							<Tab
								sx={{
									color: Colors.second_blue,
									fontWeight: "bold",
									":hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
									marginLeft: "40px",
								}}
								icon={<Cake />}
								iconPosition="start"
								label="Catering"
								value="2"
							/>
							<Tab
								sx={{
									color: Colors.second_blue,
									fontWeight: "bold",
									":hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
									marginLeft: "40px",
								}}
								icon={<AirportShuttle />}
								iconPosition="start"
								label="Transport"
								value="3"
							/>
							<Tab
								sx={{
									color: Colors.second_blue,
									fontWeight: "bold",
									":hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
									marginLeft: "20px",
								}}
								icon={<EventAvailable />}
								iconPosition="start"
								label="Event Planner"
								value="4"
							/>
						</TabList>
					</Box>
					<TabPanel value="1">
						<Typography>
						At Punta Cana Yacht Rentals we make everything possible, organizing private luxury yacht charters under customer specifications and providing the best personalized service to cover all the needs of your event.
						</Typography>
						<Button
							variant="outlined"
							size="medium"
							sx={{
								marginTop: "10px",
								backgroundColor: Colors.second_blue,
							}}
						>
							<Typography
								sx={{ ":hover": { color: "black" } }}
								color={Colors.white}
							>
								BOOK NOW
							</Typography>
						</Button>
					</TabPanel>
					<TabPanel value="2">
						<Typography>
						We work with the best catering companies for private events in the Republic Dominican. Tell us what event you want to celebrate and our team will contact you to listen to you and offer you personalized proposals tailored to your needs.
						</Typography>
						<Button
							variant="outlined"
							size="medium"
							sx={{
								marginTop: "10px",
								backgroundColor: Colors.second_blue,
							}}
						>
							<Typography
								sx={{ ":hover": { color: "black" } }}
								color={Colors.white}
							>
								KEEP IN TOUCH
							</Typography>
						</Button>
					</TabPanel>
					<TabPanel value="3">
						<Typography>
						We work with the best catering companies for private events in the Republic Dominican. Tell us what event you want to celebrate and our team will contact you to listen to you and offer you personalized proposals tailored to your needs.
						</Typography>
						<Button
							variant="outlined"
							size="medium"
							sx={{
								marginTop: "10px",
								backgroundColor: Colors.second_blue,
							}}
						>
							<Typography
								sx={{ ":hover": { color: "black" } }}
								color={Colors.white}
							>
								CONTACT US
							</Typography>
						</Button>
					</TabPanel>
					<TabPanel value="4">
						<Typography>
						We are a company with the experience, knowledge and reputation of offering the best events tailored to our clients. At Punta Cana Yacht Rentals we organize private parties, birthday celebrations, bachelor parties, company events, cocktail parties...
						</Typography>
						<Button
							variant="outlined"
							size="medium"
							sx={{
								marginTop: "10px",
								backgroundColor: Colors.second_blue,
							}}
						>
							<Typography
								sx={{ ":hover": { color: "black" } }}
								color={Colors.white}
							>
								MORE INFORMATION
							</Typography>
						</Button>
					</TabPanel>
				</TabContext>
			</Paper>
		</>
	);
};

export default TabsHomeComponent;
