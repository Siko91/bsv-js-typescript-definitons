/// <reference types="node" />
import { Bn } from './bn';
import { NetworkConstants } from './constants';
import { Struct } from './struct';
export declare class PrivKey extends Struct {
    bn: Bn;
    compressed: boolean;
    Constants: NetworkConstants['PrivKey'];
    constructor(bn?: Bn, compressed?: boolean, constants?: NetworkConstants['PrivKey']);
    fromJSON(json: string): this;
    toJSON(): string;
    fromRandom(): this;
    static fromRandom(): PrivKey;
    toBuffer(): Buffer;
    fromBuffer(buf: Buffer): this;
    toBn(): Bn;
    fromBn(bn: Bn): this;
    static fromBn(bn: Bn): PrivKey;
    validate(): this;
    /**
     * Output the private key a Wallet Import Format (Wif) string.
     */
    toWif(): string;
    /**
     * Input the private key from a Wallet Import Format (Wif) string.
     */
    fromWif(str: string): this;
    static fromWif(str: string): PrivKey;
    toString(): string;
    fromString(str: string): this;
    static Mainnet: typeof PrivKey;
    static Testnet: typeof PrivKey;
}
//# sourceMappingURL=priv-key.d.ts.map