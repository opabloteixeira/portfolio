import Technology from "../technology/Technologies";
import { Level } from "./Level";
import { Type } from "./Type";

export default interface Project {
    id: number;
    name: string;
    description: string;
    img: string[];
    type: Type;
    level: Level;
    repo: string;
    highlight: boolean;
    technologies: Technology;
}