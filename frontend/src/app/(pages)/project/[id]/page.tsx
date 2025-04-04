import { getById } from "@/functions/projects";
import { getReadme } from "@/functions/github";
import ImagesCarousel from "@/components/shared/ImagesCarousel";
import Container from "@/components/shared/Container";
import Header from "@/components/shared/Header";
import Readme from "@/components/projects/Readme";
import Technologies from "@/components/technologies/Technologies";

// export const revalidate = 3600

export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
	const { id } = await props.params;
	const project = await getById(id);

	if (!project) return null;

	const readme = await getReadme(project.repo);

	return (
		<div className="bg-black">
			<Header />
			<Container className="py-7 flex flex-col items-center gap-10">
				<h1 className="text-3xl font-bold self-start">{project.name}</h1>
				<ImagesCarousel imgs={project.img.slice(1)} />
				<Technologies list={project.technologies} small />
				<Readme markdown={readme} />
			</Container>
		</div>
	);
}
