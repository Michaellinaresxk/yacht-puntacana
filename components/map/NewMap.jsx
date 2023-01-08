import { Map, NavigationControl } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export const NewMap = () => {
	return (
		<>
			<Map
				mapLib={maplibregl}
				initialViewState={{
					longitude: -68.90117,
					latitude: 18.403121,
					zoom: 14,
				}}
				style={{
					width: "60%",
					height: " calc(80vh - 77px)",
					marginLeft: "auto",
					marginRight: "auto",
				}}
				mapStyle="https://api.maptiler.com/maps/streets/style.json?key=RD2wTsj4fy4oPde6tlVb"
			>
				<NavigationControl position="top-left" />
			</Map>
		</>
	);
};
