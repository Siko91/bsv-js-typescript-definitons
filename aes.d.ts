/// <reference types="node" />
export declare class Aes {
    static encrypt(messageBuf: Buffer, keyBuf: Buffer): Buffer;
    static decrypt(encBuf: Buffer, keyBuf: Buffer): Buffer;
    static buf2Words(buf: Buffer): number[];
    static words2Buf(words: number[]): Buffer;
}
//# sourceMappingURL=aes.d.ts.map