import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Lightbox from "yet-another-react-lightbox";
import FullScreen from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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
			{/* {imagedata.img && (
				<Box
					component="div"
					style={{
						width: "100%",
						height: "100vh",
						backgroundColor: "rgba(0, 0, 0, 0.7)",
						position: "fixed",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						overflow: "hidden",
					}}
				>
					<img
						src={imagedata.img}
						style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
						alt=""
					/>
				</Box>
			)} */}
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
							<img
								key={i}
								src={image.src}
								style={{
									width: "100%",
									display: "block",
									cursor: "pointer",
								}}
								alt="boats images"
								onClick={() => setOpen(true)}
							/>
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
