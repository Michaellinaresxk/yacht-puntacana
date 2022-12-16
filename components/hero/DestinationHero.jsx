import { Paper, Box, Typography } from "@mui/material";



export const DestinationHero = () => {
	return (
		<>
           <Paper
                sx={{
                    backgroundImage: "url(https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671227462/DJI_0344_wxwfit.jpg)",
                    width: "100wv",
                    maxWidth: "100%",
                    height: "400px",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
		        >
                <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "centeer",
                        alignItems: "center",
                        // position: "absolute",
                    }}>
                    <Typography  variant="h2">DESTINATIONS:</Typography>
                    <Typography  variant="h4">Choose one of the destinations we have for you.</Typography>
                </Box>
            </Paper>
        </>
    )
}