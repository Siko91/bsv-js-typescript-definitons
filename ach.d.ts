/// <reference types="node" />
export declare class Ach {
    static encrypt(messageBuf: Buffer, cipherKeyBuf: Buffer, ivBuf?: Buffer): Buffer;
    static asyncEncrypt(messageBuf: Buffer, cipherKeyBuf: Buffer, ivBuf?: Buffer): Promise<Buffer>;
    static decrypt(encBuf: Buffer, cipherKeyBuf: Buffer): Buffer;
    static asyncDecrypt(encBuf: Buffer, cipherKeyBuf: Buffer): Promise<Buffer>;
}
//# sourceMappingURL=ach.d.ts.map