/// <reference types="node" />
export declare class Aescbc {
    static encrypt(messageBuf: Buffer, cipherKeyBuf: Buffer, ivBuf: Buffer, concatIvBuf?: boolean): Buffer;
    static decrypt(encBuf: Buffer, cipherKeyBuf: Buffer, ivBuf?: Buffer): Buffer;
}
//# sourceMappingURL=aescbc.d.ts.map