import { Box } from "@mui/material";
import { ContactIcons } from "./ContactIcons";
import Link from "next/link";

import { LocationOn, Phone, Email, Instagram } from "@mui/icons-material";

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

				<ContactIcons
					icon={phone}
					contact="Phone"
					contact_value="+ 1 829 296 3529"
				/>

				<ContactIcons
					icon={email}
					contact="E-mail"
					contact_value="booking@yachtpuntacana.com"
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
