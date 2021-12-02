/// <reference types="node" />
import { Struct } from './struct';
export declare class Merkle extends Struct {
    hashBuf: Buffer;
    buf: Buffer;
    merkle1: Merkle;
    merkle2: Merkle;
    constructor(hashBuf?: Buffer, buf?: Buffer, merkle1?: Merkle, merkle2?: Merkle);
    hash(): Buffer;
    fromBuffers(bufs: Buffer[]): this;
    static fromBuffers(bufs: Buffer[]): Merkle;
    /**
     * Takes two arrays, both of which *must* be of a length that is a power of
     * two.
     */
    fromBufferArrays(bufs1: Buffer[], bufs2: Buffer[]): this;
    static fromBufferArrays(bufs1: Buffer[], bufs2: Buffer[]): Merkle;
    leavesNum(): number;
}
//# sourceMappingURL=merkle.d.ts.map