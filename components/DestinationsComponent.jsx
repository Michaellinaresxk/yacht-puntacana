import destinos from "../database/destinos.js";
import Link from "next/link";
import Image from "next/image.js";
import { motion } from "framer-motion";
import {
	Stack,
	Paper,
	Card,
	CardMedia,
	CardContent,
	Typography,
} from "@mui/material";

export const DestinationsComponent = () => {
	return (
		<>
			<Stack
				direction="row"
				spacing={3}
				sx={{
					display: "flex",
					flexDirection: {
						xs: "column",
						md: "row",
					},

					spacing: {
						sm: 2,
					},
				}}
			>
				{destinos.map((destino) => (
					<Link href="/destiny" key={destino.id}>
						<motion.div
							whileHover={{ translateY: -20, translateZ: 2 }}
							transition={{ duration: 0.2 }}
							whileTap={{ scale: 0.8 }}
						>
							<Paper elevation={10} sx={{ marginTop: "50px" }}>
								<Card>
									<CardMedia sx={{ width: "100%" }}>
										<Image
											alt="destiny images"
											src={destino.img}
											width={330}
											height={300}
										/>
									</CardMedia>
									<CardContent>
										<Typography variant="h4">{destino.place}</Typography>
									</CardContent>
								</Card>
							</Paper>
						</motion.div>
					</Link>
				))}
			</Stack>
		</>
	);
};
