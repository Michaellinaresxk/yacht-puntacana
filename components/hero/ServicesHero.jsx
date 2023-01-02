import { Paper } from "@mui/material";

export const ServicesHero = () => {
	return (
		<>
			<Paper
				sx={{
					backgroundImage:
						"url(https://res.cloudinary.com/freelancer2222222222222222/image/upload/v1672686042/bg-services_qcxtfu.jpg)",
						width: "100%",
						height: { xs: "500px", sm: "600px", md: "750px", lg: "700px" },
						backgroundPosition: {
							xs: "50% 50%",
							md: "50% 50%",
						},
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
				}}
			></Paper>
		</>
	);
};
