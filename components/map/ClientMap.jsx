import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ClientMap = () => {
	const position = [18.403121, -68.90117];
	return (
		<>
			<MapContainer
				center={position}
				zoom={12}
				style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={position}>
					<Popup>Maria Casa de Campo</Popup>
				</Marker>
			</MapContainer>
		</>
	);
};

export default ClientMap;
