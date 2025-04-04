import { Technology } from "@core";
import Image from "next/image";

export interface TechnologiesProps {
	list: Technology[];
	small?: boolean;
}

export default function Technologies(props: TechnologiesProps) {
	return props.list ? (
		<div className="flex justify-center gap-4 flex-wrap w-4/5">
			{props.list.map((t) => (
				<div key={t.id} className="flex flex-col items-center gap-1">
					<span
						className={`
							relative h-11 w-11 rounded-xl overflow-hidden
							${!props.small && "sm:h-16 sm:w-16"}
						`}
					>
						<Image src={t.img} alt={t.name} fill className="object-contain" />
					</span>
					<span className="text-[10px] text-zinc-400">{t.name}</span>
				</div>
			))}
		</div>
	) : null;
}
