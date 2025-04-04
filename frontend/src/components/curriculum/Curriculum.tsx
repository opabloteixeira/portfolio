import { Technology } from "@core";
import { TechWork } from "./TechWork";
import Experience from "./Experience";
import MiniCV from "./MiniCV";

export interface CurriculumProps {
	technologies: Technology[];
}

export function Curriculum(props: CurriculumProps) {
	return (
		<div className="flex flex-col lg:flex-row gap-4 min-h-72 w-full">
			<MiniCV />
			<Experience />
			<TechWork list={props.technologies} />
		</div>
	);
}
