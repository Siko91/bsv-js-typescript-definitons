/**
 * KeyPair
 * =======
 *
 * A keyPair is a collection of a private key and a public key.
 * const keyPair = new KeyPair().fromRandom()
 * const keyPair = new KeyPair().fromPrivKey(privKey)
 * const privKey = keyPair.privKey
 * const pubKey = keyPair.pubKey
 */
import { Br } from './br';
import { Bw } from './bw';
import { PrivKey as DefaultPrivKey } from './priv-key';
import { PubKey } from './pub-key';
import { Struct } from './struct';
interface KeyPairLike {
    privKey: string;
    pubKey: string;
}
export declare class KeyPair extends Struct {
    privKey: DefaultPrivKey;
    pubKey: PubKey;
    PrivKey: typeof DefaultPrivKey;
    constructor(privKey?: DefaultPrivKey, pubKey?: PubKey, PrivKey?: typeof DefaultPrivKey);
    fromJSON(json: KeyPairLike): this;
    fromBr(br: Br): this;
    toBw(bw?: Bw): Bw;
    fromString(str: string): this;
    toString(): string;
    toPublic(): KeyPair;
    fromPrivKey(privKey: DefaultPrivKey): this;
    static fromPrivKey(privKey: DefaultPrivKey): KeyPair;
    asyncFromPrivKey(privKey: DefaultPrivKey): Promise<this>;
    static asyncFromPrivKey(privKey: DefaultPrivKey): Promise<KeyPair>;
    fromRandom(): this;
    static fromRandom(): KeyPair;
    asyncFromRandom(): Promise<this>;
    static asyncFromRandom(): Promise<KeyPair>;
    static Mainnet: typeof KeyPair;
    static Testnet: typeof KeyPair;
}
export {};
//# sourceMappingURL=key-pair.d.ts.map