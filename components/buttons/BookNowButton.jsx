import { Box, Button } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

export function BookNowButton() {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					padding: "2em",
					marginTop: "50px",
					marginBottom: "50px",
				}}
			>
				<Link href="/contact_us">
					<motion.div
						whileInView={{ scale: [1.3, 1], animation: "ease-in-out" }}
						transition={{ duration: 1, repeat: 1 }}
					>
						<Button
							variant="contained"
							sx={{
								width: { xs: "250px", sm: "300px", md: "350px" },
								padding: { xx: "15x", md: "10px" },
								fontSize: { xs: "1rem", md: "1.5rem" },
							}}
						>
							{" "}
							BOOK YOUR YACHT{" "}
						</Button>
					</motion.div>
				</Link>
			</Box>
		</>
	);
}
