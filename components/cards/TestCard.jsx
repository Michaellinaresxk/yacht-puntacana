import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Colors } from "../../styles/theme";

const image =
	"https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1672758964/9-2_qqkusx.jpg";

export default function TestCard() {
	return (
		<Card
			sx={{
				width: "80%",
				height: { xs: "550px", sm: "500px", md: "auto" },
				marginLeft: "auto",
				marginRight: "auto",
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
				marginTop: "50px",
			}}
		>
			<Box>
				<CardMedia
					sx={{
						width: { xs: "400px", sm: "450px", md: "350" },
						height: { xs: "250px", sm: "300", md: "225px" },
					}}
					image={image}
					title="destination image"
				/>
			</Box>
			<Box ml={2}>
				<CardContent sx={{ padding: "20px" }}>
					<Typography gutterBottom variant="h5" component="div">
						Lizard
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						variant="contained"
						sx={{
							backgroundColor: Colors.first_blue,
							marginTop: "15px",
							width: { xs: "auto", md: "40%" },
						}}
					>
						Share
					</Button>
				</CardActions>
			</Box>
		</Card>
	);
}
