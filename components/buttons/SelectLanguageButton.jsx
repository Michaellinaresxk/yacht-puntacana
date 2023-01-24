import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import { useRouter } from "next/router";

export const SelectLanguageButton = () => {
	const idioms = ["Es", "En"];
	// const { locales, push } = useRouter();
	const [language, setLanguage] = useState("");

	const handleLanguageChange = (e) => {
		setLanguage(e.target.value);
	};

	const handleClick = (l) => {
		push("/", undefined, { locale: l });
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
						<MenuItem value={idioms[0]}>Esp</MenuItem>
						<MenuItem value={idioms[1]}>Ing</MenuItem>

						{/* {locales.map((l, i) => (
							<MenuItem key={i} value={idioms[i]} onClick={handleClick(l)}>
								{idioms[i]}
							</MenuItem>
						))} */}
					</Select>
				</FormControl>
			</Box>
		</>
	);
};
