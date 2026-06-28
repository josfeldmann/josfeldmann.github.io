export class EvolutionGraph {
    nodes: EvolutionNode[] = [];
    arrows: EvolutionArrow[] = [];
    width: number = 0;
    height: number = 0;
}

export class EvolutionNode {
    key: string = "";
    x: number = 0;
    y: number = 0;
}

export class EvolutionArrow {
    startx: number = 0;
    starty: number = 0;
    endx: number = 0;
    endy: number = 0;
}