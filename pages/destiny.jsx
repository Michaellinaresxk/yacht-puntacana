import { DestinationHero } from "../components/hero/DestinationHero";
import { Footer } from "../components/Footer";
import { SupportBanner } from "../components/SupportBanner";
import { BookNowButton } from "../components/buttons/BookNowButton";

function destiny() {
	return (
		<>
			<DestinationHero />
			<BookNowButton />
			<SupportBanner />
			<Footer />
		</>
	);
}

export default destiny;

// import fsPromises from "fs/promises";
// import path from "path";

// export async function getStaticProps() {
// 	const filePathBoats = path.join(process.cwd(), "database/yachtsDB.json");
// 	const jsonData = await fsPromises.readFile(filePathBoats);
// 	const objectDataBoats = JSON.parse(jsonData);

// 	return {
// 		props: objectDataBoats,
// 	};
// }
