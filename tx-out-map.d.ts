/// <reference types="node" />
/**
 * Transaction Output Map
 * ======================
 *
 * A map from a transaction hash and output number to that particular output.
 * Note that the map is from the transaction *hash*, which is the value that
 * occurs in the blockchain, not the id, which is the reverse of the hash. The
 * TxOutMap is necessary when signing a transction to get the script and value
 * of that output which is plugged into the sighash algorithm.
 */
import { Struct } from './struct';
import { Tx } from './tx';
import { TxOut } from './tx-out';
export interface TxOutMapLike {
    [label: string]: string;
}
export declare class TxOutMap extends Struct {
    map: Map<string, TxOut>;
    constructor(map?: Map<string, TxOut>);
    toJSON(): TxOutMapLike;
    fromJSON(json: TxOutMapLike): this;
    set(txHashBuf: Buffer, txOutNum: number, txOut: TxOut): this;
    get(txHashBuf: Buffer, txOutNum: number): TxOut;
    setTx(tx: Tx): this;
}
//# sourceMappingURL=tx-out-map.d.ts.map