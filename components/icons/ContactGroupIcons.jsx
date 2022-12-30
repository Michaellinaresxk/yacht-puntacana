import { Box, Divider, linearProgressClasses } from "@mui/material";
import { ContactIcons } from "./ContactIcons";

import { LocationOn, Phone, Email, Instagram } from "@mui/icons-material";
import { Colors } from "../../styles/theme";
import { blue, red } from "@mui/material/colors";

const location = <LocationOn />;
const phone = <Phone />;
const email = <Email />;
const instagram = <Instagram />;

export const ContactGroupIcons = () => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					justifyContent: "space-around",
					alignItems: "center",
					marginTop: "50px",
				}}
			>
				<ContactIcons
					icon={location}
					contact="Address"
					contact_value="Casa Punta Cana"
				/>

				<Divider
					component="hr"
					sx={{
						display: { xs: "block", md: "none" },
						marginBottom: "15px",
						backgroundColor: Colors.first_blue,
					}}
					light
					flexItem={true}
				/>

				<ContactIcons
					icon={phone}
					contact="Phone"
					contact_value="+ 1 829 296 3529"
				/>
				<Divider
					sx={{
						display: { xs: "block", md: "none" },
						marginBottom: "15px",
						backgroundColor: Colors.first_blue,
					}}
					light
					flexItem={true}
				/>

				<ContactIcons
					icon={email}
					contact="E-mail"
					contact_value="booking@yachtpuntacana.com"
				/>
				<Divider
					sx={{
						display: { xs: "block", md: "none" },
						marginBottom: "15px",
						backgroundColor: Colors.first_blue,
					}}
					flexItem={true}
					light
				/>
				<ContactIcons
					icon={instagram}
					contact="Instagram"
					contact_value="@yachtpuntacana"
				/>
			</Box>
		</>
	);
};
