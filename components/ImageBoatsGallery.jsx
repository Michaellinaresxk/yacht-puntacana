import { useState } from "react";
import { Box, Typography } from "@mui/material";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageGallery from "react-image-gallery";

export const ImageBoatsGallery = ({ data }) => {
	// const dataBoat = Object.values(data.gallery);
	// console.log(dataBoat);
	// const [imagedata, setImageData] = useState({ img: "", i: 0 });

	// const viewImage = (img, i) => {
	// 	setImageData({ img, i });
	// console.log(img, i);

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

				{/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 700: 2, 900: 3 }}>
					<Masonry gutter="10px">
						{data.gallery.map((image, i) => (
							<img
								key={i}
								src={image.imageUrl}
								style={{
									width: "100%",
									display: "block",
									cursor: "pointer",
								}}
								alt="boats images"
								onClick={() => viewImage(image, i)}
							/>
						))}
					</Masonry>
							</ResponsiveMasonry> */}
				<ImageGallery items={data.gallery} lazyLoad />
			</Box>
		</>
	);
};
