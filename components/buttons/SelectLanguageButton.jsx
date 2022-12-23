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
			<Box
				sx={{
					display: { xs: "none", sm: "block" },
					width: { sm: "50px", md: "80px" },
					height: "50px",
				}}
			>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Ln</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={language}
						label="Idioma"
						onChange={handleLanguageChange}
					>
						<MenuItem value="Es">Esp</MenuItem>
						<MenuItem value="En">Ing</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</>
	);
};
