/// <reference types="node" />
/**
 * Signature
 * =========
 *
 * A signature is the thing you make when you want to sign a transaction, or
 * the thing you want to verify if you want to ensure that someone signed a
 * transaction. It has an r and s value, which are the cryptographic big
 * numbers that define a signature. And since this is a bitcoin library, it
 * also has nHashType, which is the way to hash a transaction and is used in
 * the binary format of a signature when it is in a transaction. We also
 * support a public key recover value, recovery, allowing one to compute the
 * public key from a signature. The "compressed" value is also necessary to
 * accurately compute the public key from a signature.
 *
 * There are a few different formats of a signature in bitcoin. One is DER, the
 * other is the TxFormat which is the same as DER but with the nHashType byte
 * appended, and the final one is Compact, which is used by Bitcoin Signed
 * Message (Bsm).
 */
import { Bn } from './bn';
import { Struct } from './struct';
/**
 * r, s: big numbers constiting a cryptographic signature
 * nHashType: found at the end of a signature in a transaction
 * recovery: public key recovery number
 * compressed: whether the recovered pubKey is compressed
 */
export declare class Sig extends Struct {
    static readonly SIGHASH_ALL = 1;
    static readonly SIGHASH_NONE = 2;
    static readonly SIGHASH_SINGLE = 3;
    static readonly SIGHASH_FORKID = 64;
    static readonly SIGHASH_ANYONECANPAY = 128;
    r: Bn;
    s: Bn;
    nHashType: number;
    recovery: number;
    compressed: boolean;
    constructor(r?: Bn, s?: Bn, nHashType?: number, recovery?: number, compressed?: boolean);
    fromBuffer(buf: Buffer): this;
    toBuffer(): Buffer;
    fromCompact(buf: Buffer): this;
    static fromCompact(buf: Buffer): Sig;
    fromRS(rsbuf: Buffer): this;
    static fromRS(rsbuf: Buffer): Sig;
    fromDer(buf: Buffer, strict?: boolean): this;
    static fromDer(buf: Buffer, strict?: boolean): Sig;
    fromTxFormat(buf: Buffer): this;
    static fromTxFormat(buf: Buffer): Sig;
    fromString(str: string): this;
    /**
     * In order to mimic the non-strict DER encoding of OpenSSL, set strict = false.
     */
    static parseDer(buf: Buffer, strict?: boolean): {
        header: number;
        length: number;
        rheader: number;
        rlength: number;
        rneg: boolean;
        rbuf: Buffer;
        r: Bn;
        sheader: number;
        slength: number;
        sneg: boolean;
        sbuf: Buffer;
        s: Bn;
    };
    /**
     * This function is translated from bitcoind's IsDERSignature and is used in
     * the script interpreter.  This "DER" format actually includes an extra byte,
     * the nHashType, at the end. It is really the tx format, not DER format.
     *
     * A canonical signature exists of: [30] [total len] [02] [len R] [R] [02] [len S] [S] [hashtype]
     * Where R and S are not negative (their first byte has its highest bit not set), and not
     * excessively padded (do not start with a 0 byte, unless an otherwise negative number follows,
     * in which case a single 0 byte is necessary and even required).
     *
     * See https://bitcointalk.org/index.php?topic=8392.msg127623#msg127623
     */
    static IsTxDer(buf: Buffer): boolean;
    /**
     * Compares to bitcoind's IsLowDERSignature
     * See also Ecdsa signature algorithm which enforces this.
     * See also Bip 62, "low S values in signatures"
     */
    hasLowS(): boolean;
    /**
     * Ensures the nHashType is exactly equal to one of the standard options or combinations thereof.
     * Translated from bitcoind's IsDefinedHashtypeSignature
     */
    hasDefinedHashType(): boolean;
    toCompact(recovery?: number, compressed?: boolean): Buffer;
    toRS(): Buffer;
    toDer(): Buffer;
    toTxFormat(): Buffer;
    toString(): string;
}
//# sourceMappingURL=sig.d.ts.map