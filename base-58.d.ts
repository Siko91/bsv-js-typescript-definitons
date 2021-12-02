/// <reference types="node" />
import { Struct } from './struct';
export declare class Base58 extends Struct {
    buf: Buffer;
    constructor(buf?: Buffer);
    fromHex(hex: string): this;
    toHex(): string;
    static encode(buf: Buffer): string;
    static decode(str: string): Buffer;
    fromBuffer(buf: Buffer): this;
    fromString(str: string): this;
    toBuffer(): Buffer;
    toString(): string;
}
//# sourceMappingURL=base-58.d.ts.map