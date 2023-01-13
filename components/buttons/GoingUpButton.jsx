import { useState, useEffect } from "react";
import { Box, Fab } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import { Colors } from "../../styles/theme";
import { motion } from "framer-motion";

const useIsSsr = () => {
	const [isSsr, setIsSsr] = useState(true);

	useEffect(() => {
		setIsSsr(false);
	}, []);

	return isSsr;
};

export const GoingUpButton = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scroll({
			top: 0,
			behavior: "smooth",
		});
	};

	const isSsr = useIsSsr();
	if (isSsr) return null;

	window.addEventListener("scroll", toggleVisible);

	return (
		<>
			<Fab
				sx={{
					display: visible ? "block" : "none",
					width: "50px",
					height: "50px",
					backgroundColor: Colors.first_blue,
					":hover": {
						backgroundColor: Colors.second_blue,
					},
					position: "fixed",
					right: "2%",
					bottom: "8%",
				}}
				onClick={scrollToTop}
			>
				<motion.div whileHover={{ scale: 1.4 }}>
					<ArrowUpward
						sx={{ mt: 1.1, width: "30px", height: "30px" }}
						color="white"
					/>
				</motion.div>
			</Fab>
		</>
	);
};
