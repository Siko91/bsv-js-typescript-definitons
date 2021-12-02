/// <reference types="node" />
/**
 * Transaction
 * ===========
 *
 * A bitcoin transaction.
 */
import { Bn } from './bn';
import { Br } from './br';
import { Bw } from './bw';
import { HashCache } from './hash-cache';
import { KeyPair } from './key-pair';
import { PubKey } from './pub-key';
import { Script } from './script';
import { Sig } from './sig';
import { Struct } from './struct';
import { TxIn, TxInLike } from './tx-in';
import { TxOut, TxOutLike } from './tx-out';
import { VarInt } from './var-int';
export interface TxLike {
    versionBytesNum: number;
    txInsVi: string;
    txIns: TxInLike[];
    txOutsVi: string;
    txOuts: TxOutLike[];
    nLockTime: number;
}
export declare class Tx extends Struct {
    static readonly MAX_MONEY: number;
    static readonly SCRIPT_ENABLE_SIGHASH_FORKID: number;
    versionBytesNum: number;
    txInsVi: VarInt;
    txIns: TxIn[];
    txOutsVi: VarInt;
    txOuts: TxOut[];
    nLockTime: number;
    constructor(versionBytesNum?: number, txInsVi?: VarInt, txIns?: TxIn[], txOutsVi?: VarInt, txOuts?: TxOut[], nLockTime?: number);
    fromJSON(json: TxLike): this;
    toJSON(): TxLike;
    fromBr(br: Br): this;
    toBw(bw?: Bw): Bw;
    hashPrevouts(): Buffer;
    hashSequence(): Buffer;
    hashOutputs(): Buffer;
    /**
     * For a normal transaction, subScript is usually the scriptPubKey. For a
     * p2sh transaction, subScript is usually the redeemScript. If you're not
     * normal because you're using OP_CODESEPARATORs, you know what to do.
     */
    sighash(nHashType: number, nIn: number, subScript: Script, valueBn?: Bn, flags?: number, hashCache?: HashCache): Buffer;
    asyncSighash(nHashType: number, nIn: number, subScript: Script, valueBn?: Bn, flags?: number, hashCache?: HashCache): Promise<Buffer>;
    sighashPreimage(nHashType: number, nIn: number, subScript: Script, valueBn?: Bn, flags?: number, hashCache?: HashCache): Buffer;
    asyncSighashPreimage(nHashType: number, nIn: number, subScript: Script, valueBn?: Bn, flags?: number, hashCache?: HashCache): Promise<Buffer>;
    sign(keyPair: KeyPair, nHashType: number, nIn: number, subScript: Script, valueBn?: Bn, flags?: number, hashCache?: HashCache): Sig;
    asyncSign(keyPair: KeyPair, nHashType: number, nIn: number, subScript: Script, valueBn?: Bn, flags?: number, hashCache?: HashCache): Promise<Sig>;
    verify(sig: Sig, pubKey: PubKey, nIn: number, subScript: Script, enforceLowS?: boolean, valueBn?: Bn, flags?: number, hashCache?: HashCache): boolean;
    asyncVerify(sig: Sig, pubKey: PubKey, nIn: number, subScript: Script, enforceLowS?: boolean, valueBn?: Bn, flags?: number, hashCache?: HashCache): Promise<boolean>;
    hash(): Buffer;
    asyncHash(): Promise<Buffer>;
    id(): string;
    asyncId(): Promise<string>;
    addTxIn(txHashBuf: TxIn): this;
    addTxIn(txHashBuf: Buffer, txOutNum: number, script: Script, nSequence: number): this;
    addTxOut(valueBn: TxOut): this;
    addTxOut(valueBn: Bn, script: Script): this;
    /**
     * Analagous to bitcoind's IsCoinBase function in transaction.h
     */
    isCoinbase(): boolean;
    /**
     * BIP 69 sorting. Be sure to sign after sorting.
     */
    sort(): this;
}
//# sourceMappingURL=tx.d.ts.map