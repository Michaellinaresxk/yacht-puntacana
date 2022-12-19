import Button from "@mui/material/Button";
import { Box } from  "@mui/material";
import Link from "next/link";


export function BookNowButton() {

    return (
        <>
            <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    padding: "2em"
                    }}>
                <Link href="/contact_us">
                    <Button variant="contained" style={{
                        width: "300px",
                        padding: "10px",
                        fontSize: "1.5em",
                        }}> BOOK YOUR YACHT </Button>
                </Link>
            </Box>
        </>
    )
}