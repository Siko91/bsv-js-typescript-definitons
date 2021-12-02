/// <reference types="node" />
import { Struct } from './struct';
interface SigOperationsMapItem {
    nScriptChunk: number;
    type: 'sig' | 'pubKey';
    addressStr: string;
    nHashType: number;
    log?: any;
}
export interface SigOperationsLike {
    [label: string]: SigOperationsMapItem[];
}
export declare class SigOperations extends Struct {
    map: Map<string, SigOperationsMapItem[]>;
    constructor(map?: Map<string, SigOperationsMapItem[]>);
    toJSON(): {
        [label: string]: SigOperationsMapItem[];
    };
    fromJSON(json: {
        [label: string]: SigOperationsMapItem[];
    }): this;
    /**
     * Set an address to in the map for use with single-sig.
     *
     * @param {Buffer} txHashBuf The hash of a transsaction. Note that this is
     * *not* the reversed transaction id, but is the raw hash.
     * @param {Number} txOutNum The output number, a.k.a. the "vout".
     * @param {Number} nScriptChunk The index of the chunk of the script where
     * we are going to place the signature.
     * @param {String} addressStr The addressStr coresponding to this (txHashBuf,
     * txOutNum, nScriptChunk) where we are going to sign and insert the
     * signature or public key.
     * @param {Number} nHashType Usually = Sig.SIGHASH_ALL | Sig.SIGHASH_FORKID
     */
    setOne(txHashBuf: Buffer, txOutNum: number, nScriptChunk: number, type: 'sig' | 'pubKey', addressStr: string, nHashType?: number): this;
    /**
     * Set a bunch of addresses for signing an input such as for use with multi-sig.
     *
     * @param {Buffer} txHashBuf The hash of a transsaction. Note that this is
     * *not* the reversed transaction id, but is the raw hash.
     * @param {Number} txOutNum The output number, a.k.a. the "vout".
     * @param {Array} arr Must take the form of [{nScriptChunk, type, addressStr, nHashType}, ...]
     */
    setMany(txHashBuf: Buffer, txOutNum: number, arr: SigOperationsMapItem[]): this;
    addOne(txHashBuf: Buffer, txOutNum: number, nScriptChunk: number, type: 'sig' | 'pubKey', addressStr: string, nHashType?: number): this;
    /**
     * Get an address from the map
     *
     * @param {Buffer} txHashBuf The hash of a transction. Note that this is *not*
     * the reversed transaction id, but is the raw hash.
     * @param {Number} txOutNum The output number, a.k.a. the "vout".
     * @param {Number} nScriptChunk The index of the chunk of the script where
     * we are going to place the signature.
     */
    get(txHashBuf: Buffer, txOutNum: number): SigOperationsMapItem[];
}
export {};
//# sourceMappingURL=sig-operations.d.ts.map