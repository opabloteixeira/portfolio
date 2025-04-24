import { Technology } from "@core";
import Header from "../shared/Header";
import Technologies from "../technologies/Technologies";

export interface HomePageProps {
	technologies: Technology[];
}

export default function HomePage(props: HomePageProps) {
	return (
		<div
			className="
                flex flex-col items-center justify-center h-[500px]
                bg-[url('/banner.jpg')] bg-cover bg-center"
		>
			<Header />
			<div className="flex-1 w-full flex flex-col justify-center items-center gap-5">
				<div className="flex flex-col items-center gap-1">
					<h1 className="flex gap-3 items-center">
						<span className="w-2 h-2 rounded-full bg-[#008a89]"></span>
						<span className="bg-gradient-to-r from-[#008a89] via-white to-[#008a89] text-transparent bg-clip-text text-2xl font-boldtext-3xl sm:text-5xl font-bold">
							Pablo Teixeira
						</span>
						<span className="w-2 h-2 rounded-full bg-[#008a89]"></span>
					</h1>
					<h1 className="text-white-600 text-center">Software Engineer</h1>
				</div>
				<Technologies list={props.technologies} />
			</div>
		</div>
	);
}
