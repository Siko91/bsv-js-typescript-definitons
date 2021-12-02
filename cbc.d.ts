/// <reference types="node" />
export declare class Cbc {
    static buf2BlocksBuf(buf: Buffer, blockSize: number): Buffer[];
    static blockBufs2Buf(blockBufs: Buffer[]): Buffer;
    static encrypt(messageBuf: Buffer, ivBuf: Buffer, blockCipher: any, cipherKeyBuf: Buffer): Buffer;
    static decrypt(encBuf: Buffer, ivBuf: Buffer, blockCipher: any, cipherKeyBuf: Buffer): Buffer;
    static encryptBlock(blockBuf: Buffer, ivBuf: Buffer, blockCipher: any, cipherKeyBuf: Buffer): Buffer;
    static decryptBlock(encBuf: Buffer, ivBuf: Buffer, blockCipher: any, cipherKeyBuf: Buffer): Buffer;
    static encryptBlocks(blockBufs: Buffer[], ivBuf: Buffer, blockCipher: any, cipherKeyBuf: Buffer): Buffer[];
    static decryptBlocks(encBufs: Buffer[], ivBuf: Buffer, blockCipher: any, cipherKeyBuf: Buffer): Buffer[];
    static pkcs7Pad(buf: Buffer, blockSize: number): Buffer;
    static pkcs7Unpad(paddedbuf: Buffer): Buffer;
    static xorBufs(buf1: Buffer, buf2: Buffer): Buffer;
}
//# sourceMappingURL=cbc.d.ts.map