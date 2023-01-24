import { Box } from "@mui/material";
import { ContactIcons } from "./ContactIcons";
import { LocationOn, Phone, Email, Instagram } from "@mui/icons-material";
import { useTranslation } from "next-i18next";

const location = <LocationOn />;
const phone = <Phone />;
const email = <Email />;
const instagram = <Instagram />;

export const ContactGroupIcons = () => {
	const { t } = useTranslation();
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					justifyContent: { xs: "center", md: "space-around" },
					alignItems: { xs: "center" },
					width: "90%",
					height: "auto",
					alignItems: "center",
					marginTop: "70px",
					marginLeft: "auto",
					marginRight: "auto",
				}}
			>
				<ContactIcons
					icon={location}
					contact={t("contact-page.address")}
					contact_value="Casa Punta Cana"
				/>

				<ContactIcons
					icon={phone}
					contact={t("contact-page.phone")}
					contact_value="+ 1 829 296 3529"
				/>

				<ContactIcons
					icon={email}
					contact={t("contact-page.email")}
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
