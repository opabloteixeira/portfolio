import { Project } from "@core";
import Image from "next/image";
import Link from "next/link";

export interface ItemProjectProps {
	project: Project;
}

export default function ProjectItem(props: ItemProjectProps) {
	return (
		<Link href={`/project/${props.project.id}`}>
			<div
				className="
                    relative overflow-hidden border border-zinc-800
                    min-w-64 min-h-64
                "
			>
				<Image src={props.project.img[0]} alt={props.project.name} fill objectFit="cover" />
			</div>
		</Link>
	);
}
