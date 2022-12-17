import { Box, Paper } from "@mui/material";
import { AddLocationIcon, PhoneIcon, MailIcon, InstagramIcon } from '@mui/icons-material';


export const ContactPageIcons = () => {

    return (
        <Box sx={{
            width: "100%",
        }} >
            <Paper sx={{
            width: "80%",
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap"
        }}  >
                <AddLocationIcon style={{ backgroundColor: "blue", padding: "20px" }} color="white"  />
                <PhoneIcon style={{ backgroundColor: "blue", padding: "20px" }} color="white" />
                <MailIcon style={{ backgroundColor: "blue", padding: "20px" }} color="white" />
                <InstagramIcon style={{ backgroundColor: "blue", padding: "20px" }} color="white" />
            </Paper>
        </Box>
    )
}
