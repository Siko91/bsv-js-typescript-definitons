/// <reference types="node" />
import { Struct } from './struct';
export declare class Base58Check extends Struct {
    buf: Buffer;
    constructor(buf?: Buffer);
    fromHex(hex: string): this;
    toHex(): string;
    static decode(s: string): Buffer;
    static encode(buf: Buffer): string;
    fromBuffer(buf: Buffer): this;
    fromString(str: string): this;
    toBuffer(): Buffer;
    toString(): string;
}
//# sourceMappingURL=base-58-check.d.ts.map