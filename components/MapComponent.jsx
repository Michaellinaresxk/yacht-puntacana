import { Paper, Typography, Box } from "@mui/material";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export const MapComponent = () => {
	const stylesMap = {
		marginLeft: "auto",
		marginRight: "auto",
		width: "400px",
		height: "400px",
	};

	const latitudes = {
		lat: 18.403121,
		lng: -68.90117,
	};

	return (
		<>
			<Typography variant="h4">Como encontrarnos:</Typography>
			<Paper>
				<Box>
					<LoadScript googleMapsApiKey="AIzaSyCn_NaMMtbFhjRSjXe-Zx0-pVy8wZOQ_sU">
						<GoogleMap
							id="puntacana-map"
							mapContainerStyle={stylesMap}
							center={latitudes}
							zoom={15}
						>
							<Marker position={latitudes} visible={true} cursor="pointer" />
						</GoogleMap>
					</LoadScript>
				</Box>
			</Paper>
		</>
	);
};
