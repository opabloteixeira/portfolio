import Image from "next/image";

export default function MiniCV() {
	return (
		<div className="flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
			<div className="relative min-w-70 h-68 xl:self-end">
				<Image className="grayscale-10" src="/perfil.png" alt="Foto de perfil" fill />
			</div>
			<div className="flex flex-col gap-5 self-center py-6 items-center  md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<span
						className="
                            bg-gradient-to-r from-[#008a89] via-white to-white
                            text-transparent bg-clip-text text-2xl font-bold
                        "
					>
						Pablo Teixeira
					</span>
					<span>Software Engineer</span>
				</div>
				<p className="text-sm text-center md:text-left lg:text-center xl:text-left">
					Bem-vindo ao meu site! <br /> Sou Engenheiro de software com foco em Front end,
					apaixonado por criar interfaces funcionais, modernas e bem estruturadas. Aqui
					você encontrará projetos que refletem minha experiência com desenvolvimento web,
					integração com back-end, otimização de performance, e atenção à usabilidade.
				</p>
			</div>
		</div>
	);
}
