/// <reference types="node" />
/**
 * Public Key
 * ==========
 *
 * A public key corresponds to a private key. If you have a private key, you
 * can find the corresponding public key with new PubKey().fromPrivKey(privKey).
 */
import { Bn } from './bn';
import { Point } from './point';
import { PrivKey } from './priv-key';
import { Struct } from './struct';
export declare class PubKey extends Struct {
    point: Point;
    compressed: boolean;
    constructor(point?: Point, compressed?: boolean);
    fromJSON(json: string): this;
    toJSON(): string;
    fromPrivKey(privKey: PrivKey): this;
    static fromPrivKey(privKey: PrivKey): PubKey;
    asyncFromPrivKey(privKey: PrivKey): Promise<this>;
    static asyncFromPrivKey(privKey: PrivKey): Promise<PubKey>;
    fromBuffer(buf: Buffer, strict?: boolean): this;
    asyncFromBuffer(buf: Buffer, strict?: boolean): Promise<this>;
    fromFastBuffer(buf: Buffer): this;
    /**
     * In order to mimic the non-strict style of OpenSSL, set strict = false. For
     * information and what prefixes 0x06 and 0x07 mean, in addition to the normal
     * compressed and uncompressed public keys, see the message by Peter Wuille
     * where he discovered these "hybrid pubKeys" on the mailing list:
     * http://sourceforge.net/p/bitcoin/mailman/message/29416133/
     */
    fromDer(buf: Buffer, strict?: boolean): this;
    static fromDer(buf: Buffer, strict?: boolean): PubKey;
    fromString(str: string): this;
    fromX(odd: boolean, x: Bn): this;
    static fromX(odd: boolean, x: Bn): PubKey;
    toBuffer(): Buffer;
    toFastBuffer(): Buffer;
    toDer(compressed?: boolean): Buffer;
    toString(): string;
    /**
     * Translated from bitcoind's IsCompressedOrUncompressedPubKey
     */
    static isCompressedOrUncompressed(buf: Buffer): boolean;
    validate(): this;
}
//# sourceMappingURL=pub-key.d.ts.map