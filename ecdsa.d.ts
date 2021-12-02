/// <reference types="node" />
/**
 * Ecdsa
 * =====
 *
 * Ecdsa is the signature algorithm used by bitcoin. The way you probably want
 * to use this is with the static Ecdsa.sign( ... ) and Ecdsa.verify( ... )
 * functions. Note that in bitcoin, the hashBuf is little endian, so if you are
 * signing or verifying something that has to do with a transaction, you should
 * explicitly plug in that it is little endian as an option to the sign and
 * verify functions.
 *
 * This implementation of Ecdsa uses deterministic signatures as defined in RFC
 * 6979 as the default, which has become a defacto standard in bitcoin wallets
 * due to recurring security issues around using a value of k pulled from a
 * possibly faulty entropy pool. If you use the same value of k twice, someone
 * can derive your private key. Deterministic k prevents this without needing
 * an entropy pool.
 */
import { Bn } from './bn';
import { KeyPair } from './key-pair';
import { PubKey } from './pub-key';
import { Sig } from './sig';
import { Struct } from './struct';
interface EcdsaLike {
    sig: string;
    keyPair: string;
    hashBuf: string;
    k: string;
    endian: 'big' | 'little';
    verified: boolean;
}
export declare class Ecdsa extends Struct {
    sig: Sig;
    keyPair: KeyPair;
    hashBuf: Buffer;
    k: Bn;
    endian: 'big' | 'little';
    verified: boolean;
    constructor(sig?: Sig, keyPair?: KeyPair, hashBuf?: Buffer, k?: Bn, endian?: 'big' | 'little', verified?: boolean);
    toJSON(): EcdsaLike;
    fromJSON(json: EcdsaLike): this;
    toBuffer(): Buffer;
    fromBuffer(buf: Buffer): this;
    calcrecovery(): this;
    asyncCalcrecovery(): Promise<this>;
    /**
     * Calculates the recovery factor, and mutates sig so that it now contains
     * the recovery factor and the "compressed" variable. Throws an exception on
     * failure.
     */
    static calcrecovery(sig: Sig, pubKey: PubKey, hashBuf: Buffer): Sig;
    static asyncCalcrecovery(sig: Sig, pubKey: PubKey, hashBuf: Buffer): Promise<Sig>;
    fromString(str: string): this;
    randomK(): this;
    /**
     * The traditional Ecdsa algorithm uses a purely random value of k. This has
     * the negative that when signing, your entropy must be good, or the private
     * key can be recovered if two signatures use the same value of k. It turns out
     * that k does not have to be purely random. It can be deterministic, so long
     * as an attacker can't guess it. RFC 6979 specifies how to do this using a
     * combination of the private key and the hash of the thing to be signed. It is
     * best practice to use this value, which can be tested for byte-for-byte
     * accuracy, and is resistant to a broken RNG. Note that it is actually the
     * case that bitcoin private keys have been compromised through that attack.
     * Deterministic k is a best practice.
     *
     * https://tools.ietf.org/html/rfc6979#section-3.2
     */
    deterministicK(badrs?: number): this;
    /**
     * Information about public key recovery:
     * https://bitcointalk.org/index.php?topic=6430.0
     * http://stackoverflow.com/questions/19665491/how-do-i-get-an-ecdsa-public-key-from-just-a-bitcoin-signature-sec1-4-1-6-k
     * This code was originally taken from BitcoinJS
     */
    sig2PubKey(): PubKey;
    asyncSig2PubKey(): Promise<PubKey>;
    static sig2PubKey(sig: Sig, hashBuf: Buffer): PubKey;
    static asyncSig2PubKey(sig: Sig, hashBuf: Buffer): Promise<PubKey>;
    verifyStr(enforceLowS?: boolean): boolean | string;
    sign(): this;
    asyncSign(): Promise<this>;
    signRandomK(): this;
    toString(): string;
    verify(enforceLowS?: boolean): this;
    asyncVerify(enforceLowS?: boolean): Promise<this>;
    static sign(hashBuf: Buffer, keyPair: KeyPair, endian?: 'big' | 'little'): Sig;
    static asyncSign(hashBuf: Buffer, keyPair: KeyPair, endian?: 'big' | 'little'): Promise<Sig>;
    static verify(hashBuf: Buffer, sig: Sig, pubKey: PubKey, endian?: 'big' | 'little', enforceLowS?: boolean): boolean;
    static asyncVerify(hashBuf: Buffer, sig: Sig, pubKey: PubKey, endian?: 'big' | 'little', enforceLowS?: boolean): Promise<boolean>;
}
export {};
//# sourceMappingURL=ecdsa.d.ts.map