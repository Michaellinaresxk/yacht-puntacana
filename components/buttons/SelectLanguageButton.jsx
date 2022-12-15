import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const SelectLanguageButton = () => {
	const [language, setLanguage] = useState("");

	const handleLanguageChange = (e) => {
		setLanguage(e.target.value);
	};
	return (
		<>
			<Box sx={{ minWidth: "90px", marginLeft: "200px" }}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Idioma</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={language}
						label="Idioma"
						onChange={handleLanguageChange}
					>
						<MenuItem value="Es">Español</MenuItem>
						<MenuItem value="En">Inglés</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</>
	);
};
