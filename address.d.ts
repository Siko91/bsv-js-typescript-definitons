/// <reference types="node" />
import { NetworkConstants } from './constants';
import { PrivKey } from './priv-key';
import { PubKey } from './pub-key';
import { Script } from './script';
import { Struct } from './struct';
interface AddressLike {
    versionByteNum: number;
    hashBuf: string;
}
export declare class Address extends Struct {
    versionByteNum: number;
    hashBuf: Buffer;
    Constants: NetworkConstants['Address'];
    constructor(versionByteNum?: number, hashBuf?: Buffer, constants?: NetworkConstants['Address']);
    fromBuffer(buf: Buffer): this;
    fromPubKeyHashBuf(hashBuf: Buffer): this;
    static fromPubKeyHashBuf(hashBuf: Buffer): Address;
    fromPubKey(pubKey: PubKey): this;
    static fromPubKey(pubKey: PubKey): Address;
    asyncFromPubKey(pubKey: PubKey): Promise<this>;
    static asyncFromPubKey(pubKey: PubKey): Promise<Address>;
    fromPrivKey(privKey: PrivKey): this;
    static fromPrivKey(privKey: any): Address;
    asyncFromPrivKey(privKey: PrivKey): Promise<this>;
    static asyncFromPrivKey(privKey: PrivKey): Promise<Address>;
    fromRandom(): this;
    static fromRandom(): Address;
    asyncFromRandom(): Promise<this>;
    static asyncFromRandom(): Promise<Address>;
    fromString(str: string): this;
    asyncFromString(str: string): Promise<this>;
    static isValid(addrstr: string): boolean;
    isValid(): boolean;
    toTxOutScript(): Script;
    fromTxInScript(script: Script): this;
    static fromTxInScript(script: Script): Address;
    fromTxOutScript(script: Script): this;
    static fromTxOutScript(script: Script): Address;
    toBuffer(): Buffer;
    toJSON(): AddressLike;
    fromJSON(json: AddressLike): this;
    toString(): string;
    asyncToString(): Promise<string>;
    validate(): this;
    static Mainnet: typeof Address;
    static Testnet: typeof Address;
}
export {};
//# sourceMappingURL=address.d.ts.map