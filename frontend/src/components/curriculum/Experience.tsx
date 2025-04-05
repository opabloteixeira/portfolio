export default function Experience() {
	return (
		<div className="flex flex-col sm:flex-row lg:flex-col items-center justify-around gap-6 p-6 bg-black border border-zinc-800 rounded-2xl">
			<Item values="+10" label="Anos de Experiência" />
			<Item values="2013" label="Análise e Desenvolvimento de Sistemas" />
			<Item values="2015" label="Gerenciamento de Projetos" />
			{/* <Item values="420k" label="alunos matriculados" /> */}
		</div>
	);
}

function Item(props: { values: string; label: string }) {
	return (
		<div className="flex flex-col items-center">
			<span className="text-red-500 text-3xl font-bold leading-6">{props.values}</span>
			<span className="text-zinc-400 text-sm text-center w-45 ">{props.label}</span>
		</div>
	);
}
