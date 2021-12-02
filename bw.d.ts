/// <reference types="node" />
import { Bn } from './bn';
/**
 * Buffer Writer
 * =============
 *
 * This is the writing complement of the Br. You can easily write
 * VarInts and other basic number types. The way to use it is: buf =
 * new Bw().write(buf1).write(buf2).toBuffer()
 */
export declare class Bw {
    bufs: Buffer[];
    constructor(bufs?: Buffer[]);
    fromObject(obj: {
        bufs: Buffer[];
    }): Bw;
    getLength(): number;
    toBuffer(): Buffer;
    write(buf: Buffer): Bw;
    writeReverse(buf: Buffer): Bw;
    writeUInt8(n: number): Bw;
    writeInt8(n: number): Bw;
    writeUInt16BE(n: number): Bw;
    writeInt16BE(n: number): Bw;
    writeUInt16LE(n: number): Bw;
    writeInt16LE(n: number): Bw;
    writeUInt32BE(n: number): Bw;
    writeInt32BE(n: number): Bw;
    writeUInt32LE(n: number): Bw;
    writeInt32LE(n: number): Bw;
    writeUInt64BEBn(bn: Bn): Bw;
    writeUInt64LEBn(bn: Bn): Bw;
    writeVarIntNum(n: number): Bw;
    writeVarIntBn(bn: Bn): Bw;
    static varIntBufNum(n: number): Buffer;
    static varIntBufBn(bn: Bn): Buffer;
}
//# sourceMappingURL=bw.d.ts.map