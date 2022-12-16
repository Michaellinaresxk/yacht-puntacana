import { Box, Avatar, Button } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import whatsapp from "../../assets/icons/whatsapp.png";

export const WhatsAppButton = () => {
	const HandleWhatsApp = () => {
		alert("boton de whatsapp funcionando");
	};
	return (
		<>
			{/* <Avatar
					alt="whatsapp button"
					src="../../assets/icons/whatsapp.png"
					sx={{ width: "50px", height: "50px" }}
				/> */}
			<Avatar
				sx={{
					width: "50px",
					height: "50px",
					backgroundColor: "green",
					position: "fixed",
					left: "2%",
					bottom: "8%",
				}}
			>
				<Button onClick={HandleWhatsApp}>
					<WhatsApp color="white" />
				</Button>
			</Avatar>
		</>
	);
};
