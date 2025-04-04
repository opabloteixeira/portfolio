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
}

export default function ImagesCarousel(props: ImagesCarouselProps) {
	return (
		<Carousel opts={{ loop: true }} className="w-7/10 md:w-11/12 xl:w-full">
			<CarouselContent>
				{props.imgs.map((img) => (
					<CarouselItem key={img} className="relative h-96 w-full">
						<Image src={img} alt="Imagem" fill className="object-cover" />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
