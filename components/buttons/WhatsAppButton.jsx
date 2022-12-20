import { Box, Avatar, Button } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import Link from "next/link";

export const WhatsAppButton = () => {
	return (
		<>
			<Link
				alt="Boton de whatsapp"
				href={
					"https://api.whatsapp.com/send?phone=18292963529&text=%C2%A1Bienvenido%20a%20bordo!%20%C2%BFC%C3%B3mo%20podemos%20ayudarte"
				}
			>
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
					<Button>
						<WhatsApp color="white" />
					</Button>
				</Avatar>
			</Link>
		</>
	);
};
