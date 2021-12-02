/// <reference types="node" />
/**
 * Bitcoin Signed Message
 * ======================
 *
 * "Bitcoin Signed Message" just refers to a standard way of signing and
 * verifying an arbitrary message. The standard way to do this involves using a
 * "Bitcoin Signed Message:\n" prefix, which this code does. You are probably
 * interested in the static Bsm.sign( ... ) and Bsm.verify( ... ) functions,
 * which deal with a base64 string representing the compressed format of a
 * signature.
 */
import { Address } from './address';
import { KeyPair } from './key-pair';
import { Sig } from './sig';
import { Struct } from './struct';
export declare class Bsm extends Struct {
    static readonly magicBytes: Buffer;
    messageBuf: Buffer;
    keyPair: KeyPair;
    sig: Sig;
    address: Address;
    verified: boolean;
    constructor(messageBuf?: Buffer, keyPair?: KeyPair, sig?: Sig, address?: Address, verified?: boolean);
    static magicHash(messageBuf: Buffer): Buffer;
    static asyncMagicHash(messageBuf: Buffer): Promise<Buffer>;
    static sign(messageBuf: Buffer, keyPair: KeyPair): string;
    static asyncSign(messageBuf: Buffer, keyPair: KeyPair): Promise<string>;
    static verify(messageBuf: Buffer, sigstr: string, address: Address): boolean;
    static asyncVerify(messageBuf: Buffer, sigstr: string, address: Address): Promise<boolean>;
    sign(): this;
    verify(): this;
}
//# sourceMappingURL=bsm.d.ts.map