"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Menu() {
	const caminho = usePathname();

	return (
		<nav className="flex gap-6">
			<MenuItem href="/" selecionado={caminho === "/"}>
				Início
			</MenuItem>
			<MenuItem href="/project/1" selecionado={caminho.startsWith("/project")}>
				Projetos
			</MenuItem>
			<MenuItem
				href="https://api.whatsapp.com/send/?phone=5553981002177&text&type=phone_number"
				selecionado={false}
				novaAba={true}
			>
				Whatsapp
			</MenuItem>
		</nav>
	);
}

function MenuItem(props: {
	href: string;
	children: React.ReactNode;
	selecionado: boolean;
	novaAba?: boolean;
}) {
	return (
		<Link href={props.href} target={props.novaAba ? "_blank" : "_self"}>
			<span
				className={`
                    flex items-center gap-2 text-sm border-[#008a89] hover:text-white
                    ${props.selecionado ? "border-b-4 text-white" : "text-zinc-300"}    
                `}
			>
				{props.children}
			</span>
		</Link>
	);
}
