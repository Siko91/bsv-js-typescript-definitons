/// <reference types="node" />
import { Br } from './br';
import { Bw } from './bw';
import { PubKey } from './pub-key';
import { Script } from './script';
import { Struct } from './struct';
import { TxOut } from './tx-out';
import { VarInt } from './var-int';
export interface TxInLike {
    txHashBuf: string;
    txOutNum: number;
    scriptVi: string;
    script: string;
    nSequence: number;
}
export declare class TxIn extends Struct {
    static readonly LOCKTIME_VERIFY_SEQUENCE: number;
    static readonly SEQUENCE_FINAL = 4294967295;
    static readonly SEQUENCE_LOCKTIME_DISABLE_FLAG: number;
    static readonly SEQUENCE_LOCKTIME_TYPE_FLAG: number;
    static readonly SEQUENCE_LOCKTIME_MASK = 65535;
    static readonly SEQUENCE_LOCKTIME_GRANULARITY = 9;
    txHashBuf: Buffer;
    txOutNum: number;
    scriptVi: VarInt;
    script: Script;
    nSequence: number;
    constructor(txHashBuf?: Buffer, txOutNum?: number, scriptVi?: VarInt, script?: Script, nSequence?: number);
    setScript(script: Script): this;
    fromProperties(txHashBuf: Buffer, txOutNum: number, script: Script, nSequence: number): this;
    static fromProperties(txHashBuf: Buffer, txOutNum: number, script: Script, nSequence?: number): TxIn;
    fromJSON(json: TxInLike): this;
    toJSON(): TxInLike;
    fromBr(br: Br): this;
    toBw(bw?: Bw): Bw;
    /**
     * Generate txIn with blank signatures from a txOut and its
     * txHashBuf+txOutNum. A "blank" signature is just an OP_0. The pubKey also
     * defaults to blank but can be substituted with the real public key if you
     * know what it is.
     */
    fromPubKeyHashTxOut(txHashBuf: Buffer, txOutNum: number, txOut: TxOut, pubKey: PubKey): this;
    hasNullInput(): boolean;
    /**
     * Analagous to bitcoind's SetNull in COutPoint
     */
    setNullInput(): void;
    /**
     * Get little-endian tx hash.
     */
    txid(): string;
}
//# sourceMappingURL=tx-in.d.ts.map