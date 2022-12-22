import destinos from "../database/destinos.js";
import "../database/destination.json";
import Link from "next/link";
import Image from "next/image.js";
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
				spacing={4}
				sx={{
					display: "flex",
					flexDirection: {
						xs: "column",
						sm: "column",
						md: "row",
					},
				}}
			>
				{destinos.map((destino) => (
					<Link href="/contact_us" key={destino.id}>
						<Paper elevation={10} sx={{ marginTop: "50px" }}>
							<Card>
								<CardMedia>
									<Image
										alt="destiny images"
										src={destino.img}
										width={330}
										height={300}
									/>
								</CardMedia>
								<CardContent>
									<Typography variant="h4">{destino.place}</Typography>
									<Typography variant="body1" mt={2}>
										Un paraiso terrenal
									</Typography>
								</CardContent>
							</Card>
						</Paper>
					</Link>
				))}
			</Stack>
		</>
	);
};
