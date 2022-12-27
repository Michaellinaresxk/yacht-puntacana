import { Typography, Box } from "@mui/material";

export const MainTitle = () => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					marginTop: "150px",
					marginBottom: "100px",
					marginLeft: { xs: "15px" },
					marginRight: { xs: "15px" },
				}}
			>
				<Typography sx={{ fontSize: "1.2rem" }}> We are: </Typography>
				<Typography
					variant="h2"
					sx={{
						fontWeight: "bold",
						color: "rgba(0, 0, 0, 0.8)",
						fontSize: "clamp(2em, 5vw, 4em)",
					}}
				>
					Yacht Punta Cana
				</Typography>
				<Typography sx={{ fontSize: "1.2rem" }}>
				  We have a wide selection of unique yachts for rent, 
				</Typography>
				<Typography sx={{ fontSize: "1.2rem" }}>
				in Punta Cana and Casa de Campo.
				</Typography>
			</Box>
		</>
	);
};

{
	/* <div class="yacht-info mt-5">
<div class="banner-info__text">
    <span data-i18n="weAre.subtitle">Somos:</span>
    <h1 class="text-center">Yacht Punta Cana</h1>
    <p class="text-center" data-i18n="weAre.slogan">
        Disponemos de una amplia selección de alquiler de yates, super yates, lanchas y catamaranes únicos, en
        Punta Cana y Casa de campo.
    </p>
</div>
</div> */
}
