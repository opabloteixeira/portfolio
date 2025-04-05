import { getProjects } from "@/functions/projects";
import { getTechnologies } from "@/functions/technologies";
import { Curriculum } from "@/components/curriculum/Curriculum";
import Projects from "@/components/projects/Projects";
import HomePage from "@/components/landing/HomePage";
import Container from "@/components/shared/Container";

export default async function Home() {
	const technologies = await getTechnologies();
	const projects = await getProjects();

	return (
		<div>
			<HomePage technologies={technologies.highlights} />
			<Container className="py-16 flex flex-col items-center gap-10">
				<Projects title="Destaque" list={projects.highlights} />
				<Projects title="Web" list={projects.web} />
				{/* <Projects title="Mobile" list={projects.mobile} />
				<Projects title="Jogos" list={projects.games} /> */}
				<Curriculum technologies={technologies.all} />
			</Container>
		</div>
	);
}
