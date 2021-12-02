/// <reference types="node" />
import { Br } from './br';
import { Bw } from './bw';
import { Struct } from './struct';
export declare class Bip39 extends Struct {
    mnemonic: string;
    seed: Buffer;
    Wordlist: {
        value: string[];
        space: string;
    };
    constructor(mnemonic?: string, seed?: Buffer, wordlist?: {
        value: string[];
        space: string;
    });
    toBw(bw?: Bw): Bw;
    fromBr(br: Br): this;
    /**
     * Generate a random new mnemonic from the wordlist.
     */
    fromRandom(bits?: number): this;
    static fromRandom(bits?: number): Bip39;
    asyncFromRandom(bits?: number): Promise<this>;
    static asyncFromRandom(bits?: number): Promise<Bip39>;
    fromEntropy(buf: Buffer): this;
    static fromEntropy(buf: Buffer): Bip39;
    asyncFromEntropy(buf: Buffer): Promise<this>;
    static asyncFromEntropy(buf: Buffer): Promise<Bip39>;
    fromString(mnemonic: string): this;
    toString(): string;
    toSeed(passphrase?: string): Buffer;
    asyncToSeed(passphrase?: string): Promise<Buffer>;
    /**
     * Generate a new mnemonic from some entropy generated somewhere else. The
     * entropy must be at least 128 bits.
     */
    entropy2Mnemonic(buf: Buffer): this;
    /**
     * Check that a mnemonic is valid. This means there should be no superfluous
     * whitespace, no invalid words, and the checksum should match.
     */
    check(): boolean;
    /**
     * Convert a mnemonic to a seed. Does not check for validity of the mnemonic -
     * for that, you should manually run check() first.
     */
    mnemonic2Seed(passphrase?: string): this;
    isValid(passphrase?: string): boolean;
    static isValid(mnemonic: string, passphrase?: string): boolean;
}
//# sourceMappingURL=bip-39.d.ts.map