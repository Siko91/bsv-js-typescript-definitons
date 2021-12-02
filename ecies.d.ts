/// <reference types="node" />
import { KeyPair } from './key-pair';
import { PrivKey } from './priv-key';
import { PubKey } from './pub-key';
export declare class Ecies {
    static ivkEkM(privKey: PrivKey, pubKey: PubKey): {
        iv: Buffer;
        kE: Buffer;
        kM: Buffer;
    };
    static electrumEncrypt(messageBuf: Buffer, toPubKey: PubKey, fromKeyPair: KeyPair, noKey?: boolean): Buffer;
    static electrumDecrypt(encBuf: Buffer, toPrivKey: PrivKey, fromPubKey?: PubKey): Buffer;
    static bitcoreEncrypt(messageBuf: Buffer, toPubKey: PubKey, fromKeyPair?: KeyPair, ivBuf?: Buffer): Buffer;
    static asyncBitcoreEncrypt(messageBuf: Buffer, toPubKey: PubKey, fromKeyPair?: KeyPair, ivBuf?: Buffer): Promise<Buffer>;
    static bitcoreDecrypt(encBuf: Buffer, toPrivKey: PrivKey): Buffer;
    static asyncBitcoreDecrypt(encBuf: Buffer, toPrivKey: PrivKey): Promise<Buffer>;
}
//# sourceMappingURL=ecies.d.ts.map