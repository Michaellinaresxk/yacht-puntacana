import Button from "@mui/material/Button";


export function BookNowButton() {

    return (
        <>
            <Button variant="contained" onClick={() => {
                alert('clicked');
            }}>Book Now</Button>
        </>
    )
}