/// <reference types="node" />
/**
 * Transaction Builder
 * ===================
 */
import { Address } from './address';
import { Bn } from './bn';
import { HashCache, HashCacheLike } from './hash-cache';
import { KeyPair } from './key-pair';
import { PubKey } from './pub-key';
import { Script } from './script';
import { Sig } from './sig';
import { SigOperations, SigOperationsLike } from './sig-operations';
import { Struct } from './struct';
import { Tx } from './tx';
import { TxIn } from './tx-in';
import { TxOut } from './tx-out';
import { TxOutMap, TxOutMapLike } from './tx-out-map';
interface TxBuilderLike {
    tx: string;
    txIns: string[];
    txOuts: string[];
    uTxOutMap: TxOutMapLike;
    sigOperations: SigOperationsLike;
    changeScript: string;
    changeAmountBn: number;
    feeAmountBn: number;
    feePerKbNum: number;
    sigsPerInput: number;
    dust: number;
    dustChangeToFees: boolean;
    hashCache: HashCacheLike;
}
export declare class TxBuilder extends Struct {
    tx: Tx;
    txIns: TxIn[];
    txOuts: TxOut[];
    uTxOutMap: TxOutMap;
    sigOperations: SigOperations;
    changeScript: Script;
    changeAmountBn: Bn;
    feeAmountBn: Bn;
    feePerKbNum: number;
    sigsPerInput: number;
    dust: number;
    dustChangeToFees: boolean;
    hashCache: HashCache;
    nLockTime: number;
    versionBytesNum: number;
    constructor(tx?: Tx, txIns?: TxIn[], txOuts?: TxOut[], uTxOutMap?: TxOutMap, sigOperations?: SigOperations, changeScript?: Script, changeAmountBn?: Bn, feeAmountBn?: Bn, feePerKbNum?: number, nLockTime?: number, versionBytesNum?: number, sigsPerInput?: number, dust?: number, dustChangeToFees?: boolean, hashCache?: HashCache);
    toJSON(): TxBuilderLike;
    fromJSON(json: TxBuilderLike): this;
    setFeePerKbNum(feePerKbNum: number): this;
    setChangeAddress(changeAddress: Address): this;
    setChangeScript(changeScript: Script): this;
    /**
     * nLockTime is an unsigned integer.
     */
    setNLocktime(nLockTime: number): this;
    setVersion(versionBytesNum: number): this;
    /**
     * Sometimes one of your outputs or the change output will be less than
     * dust. Values less than dust cannot be broadcast. If you are OK with
     * sending dust amounts to fees, then set this value to true.
     */
    setDust(dust?: number): this;
    /**
     * Sometimes one of your outputs or the change output will be less than
     * dust. Values less than dust cannot be broadcast. If you are OK with
     * sending dust amounts to fees, then set this value to true. We
     * preferentially send all dust to the change if possible. However, that
     * might not be possible if the change itself is less than dust, in which
     * case all dust goes to fees.
     */
    sendDustChangeToFees(dustChangeToFees?: boolean): this;
    /**
     * Import a transaction partially signed by someone else. The only thing you
     * can do after this is sign one or more inputs. Usually used for multisig
     * transactions. uTxOutMap is optional. It is not necessary so long as you
     * pass in the txOut when you sign. You need to know the output when signing
     * an input, including the script in the output, which is why this is
     * necessary when signing an input.
     */
    importPartiallySignedTx(tx: Tx, uTxOutMap?: TxOutMap, sigOperations?: SigOperations): this;
    /**
     * Pay "from" a script - in other words, add an input to the transaction.
     */
    inputFromScript(txHashBuf: Buffer, txOutNum: number, txOut: TxOut, script: Script, nSequence?: number): this;
    addSigOperation(txHashBuf: Buffer, txOutNum: number, nScriptChunk: number, type: 'sig' | 'pubKey', addressStr: string, nHashType?: number): this;
    /**
     * Pay "from" a pubKeyHash output - in other words, add an input to the
     * transaction.
     */
    inputFromPubKeyHash(txHashBuf: Buffer, txOutNum: number, txOut: TxOut, pubKey?: PubKey, nSequence?: number, nHashType?: number): this;
    /**
     * An address to send funds to, along with the amount. The amount should be
     * denominated in satoshis, not bitcoins.
     */
    outputToAddress(valueBn: Bn, addr: Address): this;
    /**
     * A script to send funds to, along with the amount. The amount should be
     * denominated in satoshis, not bitcoins.
     */
    outputToScript(valueBn: Bn, script: Script): this;
    buildOutputs(): Bn;
    buildInputs(outAmountBn: Bn, extraInputsNum?: number): Bn;
    estimateSize(): number;
    estimateFee(extraFeeAmount?: Bn): Bn;
    /**
     * Builds the transaction and adds the appropriate fee by subtracting from
     * the change output. Note that by default the TxBuilder will use as many
     * inputs as necessary to pay the output amounts and the required fee. The
     * TxBuilder will not necessarily us all the inputs. To force the TxBuilder
     * to use all the inputs (such as if you wish to spend the entire balance
     * of a wallet), set the argument useAllInputs = true.
     *
     * @returns Built transaction.
     */
    build(opts?: {
        useAllInputs: boolean;
    }): Tx;
    sort(): this;
    /**
     * Check if all signatures are present in a multisig input script.
     */
    static allSigsPresent(m: number, script: Script): boolean;
    /**
     * Remove blank signatures in a multisig input script.
     */
    static removeBlankSigs(script: Script): Script;
    fillSig(nIn: number, nScriptChunk: number, sig: Sig): this;
    /**
     * Sign an input, but do not fill the signature into the transaction. Return
     * the signature.
     *
     * For a normal transaction, subScript is usually the scriptPubKey. If
     * you're not normal because you're using OP_CODESEPARATORs, you know what
     * to do.
     */
    getSig(keyPair: KeyPair, nHashType: number, nIn: number, subScript: Script, flags?: number): Sig;
    /**
     * Asynchronously sign an input in a worker, but do not fill the signature
     * into the transaction. Return the signature.
     */
    asyncGetSig(keyPair: KeyPair, nHashType: number, nIn: number, subScript: Script, flags?: number): Promise<Sig>;
    /**
     * Sign ith input with keyPair and insert the signature into the transaction.
     * This method only works for some standard transaction types. For
     * non-standard transaction types, use getSig.
     */
    signTxIn(nIn: number, keyPair: KeyPair, txOut: TxOut, nScriptChunk: number, nHashType?: number, flags?: number): this;
    /**
     * Asynchronously sign ith input with keyPair in a worker and insert the
     * signature into the transaction.  This method only works for some standard
     * transaction types. For non-standard transaction types, use asyncGetSig.
     */
    asyncSignTxIn(nIn: number, keyPair: KeyPair, txOut: TxOut, nScriptChunk: number, nHashType?: number, flags?: number): Promise<this>;
    signWithKeyPairs(keyPairs: KeyPair[]): this;
}
export {};
//# sourceMappingURL=tx-builder.d.ts.map