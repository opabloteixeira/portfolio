import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "Portfólio de Pablo Teixeira",
	description:
		"Bem-vindo ao meu portfólio profissional. Aqui você encontrará uma coleção dos meus projetos e trabalhos em desenvolvimento de software, demonstrando minhas habilidades e experiências na área de tecnologia.",
};

const font = Montserrat({
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body suppressHydrationWarning className={`${font.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
