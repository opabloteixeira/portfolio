import { Technology } from "@core";

export interface TechWorkProps {
	list: Technology[];
}

export function TechWork(props: TechWorkProps) {
	return props.list ? (
		<div className="flex justify-center items-center p-6 w-full lg:w-72 bg-black border border-zinc-800 rounded-2xl">
			<div className="flex justify-center gap-x-3 flex-wrap">
				{props.list.map((technology: Technology) => (
					<div key={technology.id}>
						<span className="text-red-500 font-bold">#</span>
						<span>{technology.name}</span>
					</div>
				))}
			</div>
		</div>
	) : null;
}
