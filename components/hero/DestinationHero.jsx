import { Paper, Box, Typography } from "@mui/material";



export const DestinationHero = () => {
	return (
		<>
           <Paper
                sx={{
                    backgroundImage: "url(https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1671227462/DJI_0344_wxwfit.jpg)",
                    width: "100%",
                    maxWidth: "100%",
                    height: "400px",
                    backgroundPosition: "50% 50%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
		        >
                <Box sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
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