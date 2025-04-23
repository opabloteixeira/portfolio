import { Project } from "@core";
import ProjectItem from "./ProjectItem";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";

export interface ProjectsProps {
	title: string;
	list: Project[];
	big?: boolean;
}

export default function Projects(props: ProjectsProps) {
	return (
		<div className="flex flex-col items-center sm:items-start w-8/10 md:w-11/12 xl:w-full gap-5">
			<h3 className="text-2xl font-bold text-white/70">{props.title}</h3>
			<Carousel
				opts={{
					align: "center",
					loop: true,
				}}
				className="w-full"
			>
				<CarouselContent className="flex">
					{props.list.map((p) => (
						<CarouselItem
							key={p.id}
							className={`
								md:basis-1/2 lg:basis-1/3 xl:basis-1/4
								${props.big ? "xl:basis-1/3" : "xl:basis-1/4"}
						`}
						>
							<ProjectItem project={p} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
