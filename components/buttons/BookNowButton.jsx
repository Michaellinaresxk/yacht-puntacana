import { Box, Button } from "@mui/material";
import Link from "next/link";

export function BookNowButton() {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					padding: "2em",
				}}
			>
				<Link href="/contact_us">
					<Button
						variant="contained"
						style={{
							width: "300px",
							padding: "10px",
							fontSize: "1.5em",
						}}
					>
						{" "}
						BOOK YOUR YACHT{" "}
					</Button>
				</Link>
			</Box>
		</>
	);
}
