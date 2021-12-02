/// <reference types="node" />
import { Bn } from './bn';
import { PubKey } from './pub-key';
import { Struct } from './struct';
interface ScriptChunk {
    buf?: Buffer;
    len?: number;
    opCodeNum: number;
}
export declare class Script extends Struct {
    chunks: ScriptChunk[];
    constructor(chunks?: ScriptChunk[]);
    fromJSON(json: string): this;
    toJSON(): string;
    fromBuffer(buf: Buffer): this;
    toBuffer(): Buffer;
    fromString(str: string): this;
    toString(): string;
    /**
     * Input the script from the script string format used in bitcoind data tests
     */
    fromBitcoindString(str: string): this;
    static fromBitcoindString(str: string): Script;
    /**
     * Output the script to the script string format used in bitcoind data tests.
     */
    toBitcoindString(): string;
    /**
     * Input the script from the script string format used in bitcoind data tests
     */
    fromAsmString(str: string): this;
    static fromAsmString(str: string): Script;
    /**
     * Output the script to the script string format used in bitcoind data tests.
     */
    toAsmString(): string;
    private _chunkToString;
    fromOpReturnData(dataBuf: Buffer): this;
    static fromOpReturnData(dataBuf: Buffer): Script;
    fromSafeData(dataBuf: Buffer): this;
    static fromSafeData(dataBuf: Buffer): Script;
    fromSafeDataArray(dataBufs: Buffer[]): this;
    static fromSafeDataArray(dataBufs: Buffer[]): Script;
    getData(): Buffer[];
    /**
     * Turn script into a standard pubKeyHash output script
     */
    fromPubKeyHash(hashBuf: Buffer): this;
    static fromPubKeyHash(hashBuf: Buffer): Script;
    static sortPubKeys(pubKeys: PubKey[]): PubKey[];
    /**
     * Generate a multisig output script from a list of public keys. sort
     * defaults to true. If sort is true, the pubKeys are sorted
     * lexicographically.
     */
    fromPubKeys(m: number, pubKeys: PubKey[], sort?: boolean): this;
    static fromPubKeys(m: number, pubKeys: PubKey[], sort?: boolean): Script;
    removeCodeseparators(): this;
    isPushOnly(): boolean;
    isNonSpendable(): boolean;
    isOpReturn(): boolean;
    isSafeDataOut(): boolean;
    isPubKeyHashOut(): boolean;
    /**
     * A pubKeyHash input should consist of two push operations. The first push
     * operation may be OP_0, which means the signature is missing, which is true
     * for some partially signed (and invalid) transactions.
     */
    isPubKeyHashIn(): boolean;
    isScriptHashOut(): boolean;
    /**
     * Note that these are frequently indistinguishable from pubKeyHashin
     */
    isScriptHashIn(): boolean;
    isMultiSigOut(): boolean;
    isMultiSigIn(): boolean;
    /**
     * Analagous to bitcoind's FindAndDelete Find and deconste equivalent chunks,
     * typically used with push data chunks.  Note that this will find and deconste
     * not just the same data, but the same data with the same push data op as
     * produced by default. i.e., if a pushdata in a tx does not use the minimal
     * pushdata op, then when you try to remove the data it is pushing, it will not
     * be removed, because they do not use the same pushdata op.
     */
    findAndDelete(script: Script): this;
    writeScript(script: Script): this;
    static writeScript(script: Script): Script;
    writeString(str: string): this;
    static writeString(str: string): Script;
    writeOpCode(opCodeNum: number): this;
    static writeOpCode(opCodeNum: number): Script;
    setChunkOpCode(i: number, opCodeNum: number): this;
    writeBn(bn: Bn): this;
    static writeBn(bn: Bn): Script;
    writeNumber(num: number): this;
    static writeNumber(num: number): Script;
    setChunkBn(i: number, bn: Bn): this;
    writeBuffer(buf: Buffer): this;
    static writeBuffer(buf: Buffer): Script;
    setChunkBuffer(i: number, buf: Buffer): this;
    checkMinimalPush(i: number): boolean;
}
export {};
//# sourceMappingURL=script.d.ts.map