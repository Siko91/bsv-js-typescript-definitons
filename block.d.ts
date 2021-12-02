/// <reference types="node" />
/**
 * Block
 * =====
 *
 * A block, of course, is a collection of transactions. This class is somewhat
 * incompconste at the moment. In the future, it should support the ability to
 * check to see if a transaction is in a block (thanks to the magic of merkle
 * trees). You will probably never use Yours Bitcoin to create a block, since almost
 * everyone will use bitcoind for that. As such, the primary way to use this is
 * new Block().fromBuffer(buf), which will parse the block and prepare its insides
 * for you to inspect.
 */
import { BlockHeader, BlockHeaderLike } from './block-header';
import { Br } from './br';
import { Bw } from './bw';
import { Struct } from './struct';
import { Tx, TxLike } from './tx';
import { VarInt } from './var-int';
export interface BlockLike {
    blockHeader: BlockHeaderLike;
    txsVi: string;
    txs: TxLike[];
}
export declare class Block extends Struct {
    static readonly MAX_BLOCK_SIZE = 1000000;
    blockHeader: BlockHeader;
    txsVi: VarInt;
    txs: Tx[];
    constructor(blockHeader?: BlockHeader, txsVi?: VarInt, txs?: Tx[]);
    fromJSON(json: BlockLike): this;
    toJSON(): BlockLike;
    fromBr(br: Br): this;
    toBw(bw?: Bw): Bw;
    hash(): Buffer;
    asyncHash(): Promise<Buffer>;
    id(): string;
    asyncId(): Promise<string>;
    verifyMerkleRoot(): number;
    /**
     * Sometimes we don't want to parse an entire block into memory. Instead, we
     * simply want to iterate through all transactions in the block. That is what
     * this method is for. This method returns an efficient iterator which can be
     * used in a `for (tx of txs)` construct that returns each tx one at a time
     * without first parsing all of them into memory.
     *
     * @param {Buffer} blockBuf A buffer of a block.
     */
    static iterateTxs(blockBuf: Buffer): {
        blockHeader: BlockHeader;
        txsVi: VarInt;
        txsNum: number;
        [Symbol.iterator](): Generator<Tx, void, unknown>;
    };
}
//# sourceMappingURL=block.d.ts.map