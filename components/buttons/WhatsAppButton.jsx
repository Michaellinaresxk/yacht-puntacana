import { Avatar, Button } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import Link from "next/link";
import { motion } from "framer-motion";

export const WhatsAppButton = () => {
	return (
		<>
			<Link
				alt="Boton de whatsapp"
				target="_blank"
				href={
					"https://api.whatsapp.com/send?phone=18292963529&text=%C2%A1Bienvenido%20a%20bordo!%20%C2%BFC%C3%B3mo%20podemos%20ayudarte"
				}
			>
				<Avatar
					component="div"
					sx={{
						width: "50px",
						height: "50px",
						backgroundColor: "green",
						position: "fixed",
						left: "2%",
						bottom: "8%",
					}}
				>
					<motion.div whileHover={{ scale: 1.5 }}>
						<Button component="button">
							<WhatsApp
								color="white"
								style={{ width: "30px", height: "30px" }}
							/>
						</Button>
					</motion.div>
				</Avatar>
			</Link>
		</>
	);
};
