import { useState } from "react";
import { Fab } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import { Colors } from "../../styles/theme";

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
				<ArrowUpward color="white" />
			</Fab>
		</>
	);
};
