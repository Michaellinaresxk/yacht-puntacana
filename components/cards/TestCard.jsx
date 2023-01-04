import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const image =
	"https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1672758964/9-2_qqkusx.jpg";

export default function TestCard() {
	return (
		<Card
			sx={{
				width: "80%",
				marginLeft: "auto",
				marginRight: "auto",
				display: "flex",
				flexDirection: { xs: "column", sm: "row" },
				marginTop: "50px",
			}}
		>
			<Box>
				<CardMedia
					sx={{ width: { xs: "400px", md: "350" }, height: "250px" }}
					image={image}
					title="green iguana"
				/>
			</Box>
			<Box ml={2}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Lizard
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Box>
		</Card>
	);
}
