/// <reference types="node" />
import { NetworkConstants } from './constants';
import { PrivKey as PrivKeyClass } from './priv-key';
import { PubKey } from './pub-key';
import { Struct } from './struct';
export declare class Bip32 extends Struct {
    versionBytesNum: number;
    depth: number;
    parentFingerPrint: Buffer;
    childIndex: number;
    chainCode: Buffer;
    privKey: PrivKeyClass;
    pubKey: PubKey;
    Constants: NetworkConstants['Bip32'];
    PrivKey: typeof PrivKeyClass;
    constructor(versionBytesNum?: number, depth?: number, parentFingerPrint?: Buffer, childIndex?: number, chainCode?: Buffer, privKey?: PrivKeyClass, pubKey?: PubKey, constants?: NetworkConstants['Bip32'], PrivKey?: typeof PrivKeyClass);
    fromRandom(): this;
    static fromRandom(): Bip32;
    fromString(str: string): this;
    /**
     * Use workers to convert a bip32 string into a bip32 object without
     * blocking.
     */
    asyncFromString(str: string): Promise<this>;
    fromSeed(bytes: Buffer): this;
    static fromSeed(bytes: Buffer): Bip32;
    asyncFromSeed(bytes: Buffer): Promise<this>;
    static asyncFromSeed(bytes: Buffer): Promise<Bip32>;
    fromBuffer(buf: Buffer): this;
    /**
     * This is a faster version of .fromBuffer that reads in the output from
     * .toFastBuffer rather than from .toBuffer. .toFastBuffer outputs almost the
     * same thing as .toBuffer, except the public key is uncompressed. That makes
     * it larger, but also means that point multiplication doesn't have to be
     * used to derive the y value. So reading it in is faster. The only thing we
     * have to do is explicitely set the "compressed" value of public key to true
     * after reading it in. That is because although .toFastBuffer and
     * .fromFastBuffer transmit the public key in uncompressed form, we want it
     * to be set to compressed when stored in memory.
     */
    fromFastBuffer(buf: Buffer): this;
    derive(path: string): Bip32;
    asyncDerive(path: string): Promise<Bip32>;
    deriveChild(i: number): Bip32;
    toPublic(): Bip32;
    toBuffer(): Buffer;
    /**
     * This is the "fast" analog of toBuffer. It is almost the same as toBuffer,
     * and in fact is actually not any faster. The only difference is that it
     * adds an uncompressed rather than compressed public key to the output. This
     * is so that .fromFastBufer can read in the public key without having to do
     * fancy, slow point multiplication to derive the y value of the public key.
     * Thus, although .toFastBuffer is not any faster, .fromFastBuffer is faster.
     */
    toFastBuffer(): Buffer;
    toString(): string;
    /**
     * Use workers to convert a bip32 object into a bip32 string without
     * blocking.
     */
    asyncToString(): Promise<string>;
    toJSON(): string;
    fromJSON(json: string): this;
    isPrivate(): boolean;
    static Mainnet: typeof Bip32;
    static Testnet: typeof Bip32;
}
//# sourceMappingURL=bip-32.d.ts.map