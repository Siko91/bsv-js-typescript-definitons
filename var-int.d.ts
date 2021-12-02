/// <reference types="node" />
/**
 * VarInt (a.k.a. Compact Size)
 * ============================
 *
 * A varInt is a varible sized integer, and it is a format that is unique to
 * bitcoin, and used throughout bitcoin to represent the length of binary data
 * in a compact format that can take up as little as 1 byte or as much as 9
 * bytes.
 */
import { Bn } from './bn';
import { Br } from './br';
import { Struct } from './struct';
export declare class VarInt extends Struct {
    buf: Buffer;
    constructor(buf?: Buffer);
    fromJSON(json: string): this;
    toJSON(): string;
    fromBuffer(buf: Buffer): this;
    fromBr(br: Br): this;
    fromBn(bn: Bn): this;
    static fromBn(bn: Bn): VarInt;
    fromNumber(num: number): this;
    static fromNumber(num: number): VarInt;
    toBuffer(): Buffer;
    toBn(): Bn;
    toNumber(): number;
}
//# sourceMappingURL=var-int.d.ts.map