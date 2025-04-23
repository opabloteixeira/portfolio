import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";

export interface ImagesCarouselProps {
	imgs: string[];
	big: boolean;
}

export default function ImagesCarousel(props: ImagesCarouselProps) {
	return (
		<Carousel opts={{ loop: true }} className="w-7/10 md:w-11/12 xl:w-full">
			<CarouselContent>
				{props.imgs.map((img) => (
					<CarouselItem
						key={img}
						className={`
						relative w-full
						${props.big ? "aspect-[4/3]" : "h-96"}
					`}
					>
						<Image src={img} alt="Imagem" fill className="object-contain" />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
