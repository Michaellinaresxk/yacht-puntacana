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
				}}
			>
				<Typography variant="subtitle1"> Somos: </Typography>
				<Typography
					variant="h2"
					sx={{ fontWeight: "bold", color: "rgba(0, 0, 0, 0.8)" }}
				>
					Yacht Punta Cana
				</Typography>
				<Typography variant="h6">
					Disponemos de una amplia selección de alquiler de yates, super yates,
				</Typography>
				<Typography variant="h6">
					lanchas y catamaranes únicos, en Punta Cana y Casa de campo.
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
