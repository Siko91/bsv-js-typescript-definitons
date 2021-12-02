import { Bn } from './bn';
interface _Point {
    isInfinity(): boolean;
    eq(point: _Point): boolean;
}
declare const _Point: new (...rest: any[]) => _Point;
export declare class Point extends _Point {
    x: Bn;
    y: Bn;
    constructor(x?: Bn, y?: Bn, isRed?: boolean);
    static fromX(isOdd: boolean, x: Bn | number): Point;
    copyFrom(point: Point): this;
    add(p: Point): Point;
    mul(bn: Bn): Point;
    mulAdd(bn1: Bn, point: Point, bn2: Bn): Point;
    getX(): Bn;
    getY(): Bn;
    fromX(isOdd: boolean, x: Bn): this;
    toJSON(): {
        x: string;
        y: string;
    };
    fromJSON(json: {
        x: string;
        y: string;
    }): this;
    toString(): string;
    fromString(str: string): this;
    static getG(): Point;
    static getN(): Bn;
    validate(): this;
}
export {};
//# sourceMappingURL=point.d.ts.map