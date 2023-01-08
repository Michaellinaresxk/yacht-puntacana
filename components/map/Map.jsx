import { useState, useEffect } from "react";

export const Map = () => {
	const [Client, setClient] = useState();
	useEffect(() => {
		(async () => {
			if (typeof global.window !== "undefined") {
				const newClient = await import("./ClientMap").default;
				setClient(() => newClient);
			}
		})();
	}, []);

	if (typeof global.window === "undefined" || !Client) {
		return null;
	}

	return Client ? <Client {...props} /> : null;
};
