import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Lightbox from "yet-another-react-lightbox";
import FullScreen from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

export const ImageBoatsGallery = ({ data }) => {
	// const dataBoat = Object.values(data.gallery);
	// const [imagedata, setImageData] = useState({ img: "", i: 0 });

	// const viewImage = (img, i) => {
	// 	setImageData({ img, i });
	// 	console.log(img, i);
	// };

	const [open, setOpen] = useState(false);

	return (
		<>
			<Box
				sx={{
					marginTop: "15px",
					padding: "20px",
					width: "85%",
					marginLeft: "auto",
					marginRight: "auto",
				}}
			>
				<Typography variant="h4" mb={3}>
					Yacht Gallery
				</Typography>

				<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 700: 2, 900: 3 }}>
					<Masonry gutter="10px">
						{data.gallery.map((image, i) => (
							<motion.div
								whileHover={{ translateY: -10 }}
								transition={{ duration: 1 }}
								key={i}
							>
								<img
									src={image.src}
									style={{
										width: "100%",
										display: "block",
										cursor: "pointer",
									}}
									alt="boats images"
									onClick={() => setOpen(true)}
								/>
							</motion.div>
						))}
					</Masonry>
				</ResponsiveMasonry>
				<Lightbox
					open={open}
					close={() => setOpen(false)}
					slides={data.gallery}
					plugins={[FullScreen]}
				/>
			</Box>
		</>
	);
};
