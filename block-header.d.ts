/// <reference types="node" />
/**
 * Block Header
 * ============
 *
 * Every block contains a blockHeader. This is probably not something you will
 * personally use, but it's here if you need it.
 */
import { Br } from './br';
import { Bw } from './bw';
import { Struct } from './struct';
export interface BlockHeaderLike {
    versionBytesNum: number;
    prevBlockHashBuf: string;
    merkleRootBuf: string;
    time: number;
    bits: number;
    nonce: number;
}
export declare class BlockHeader extends Struct {
    versionBytesNum: number;
    prevBlockHashBuf: Buffer;
    merkleRootBuf: Buffer;
    time: number;
    bits: number;
    nonce: number;
    constructor(versionBytesNum?: number, prevBlockHashBuf?: Buffer, merkleRootBuf?: Buffer, time?: number, bits?: number, nonce?: number);
    fromJSON(json: BlockHeaderLike): this;
    toJSON(): BlockHeaderLike;
    fromBr(br: Br): this;
    toBw(bw?: Bw): Bw;
}
//# sourceMappingURL=block-header.d.ts.map