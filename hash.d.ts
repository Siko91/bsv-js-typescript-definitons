/// <reference types="node" />
export declare class Hash {
    static readonly blockSize: {
        sha1: number;
        sha256: number;
        sha512: number;
    };
    static sha1(buf: Buffer): Buffer;
    static asyncSha1(buf: Buffer): Promise<Buffer>;
    static sha256(buf: Buffer): Buffer;
    static asyncSha256(buf: Buffer): Promise<Buffer>;
    static sha256Sha256(buf: Buffer): Buffer;
    static asyncSha256Sha256(buf: Buffer): Promise<Buffer>;
    static ripemd160(buf: Buffer): Buffer;
    static asyncRipemd160(buf: Buffer): Promise<Buffer>;
    static sha256Ripemd160(buf: Buffer): Buffer;
    static asyncSha256Ripemd160(buf: Buffer): Promise<Buffer>;
    static sha512(buf: Buffer): Buffer;
    static asyncSha512(buf: Buffer): Promise<Buffer>;
    static hmac(hashFStr: 'sha1' | 'sha256' | 'sha512', data: Buffer, key: Buffer): Buffer;
    static readonly bitsize: {
        sha1Hmac: number;
        sha256Hmac: number;
        sha512Hmac: number;
    };
    static sha1Hmac(data: Buffer, key: Buffer): Buffer;
    static asyncSha1Hmac(data: Buffer, key: Buffer): Promise<Buffer>;
    static sha256Hmac(data: Buffer, key: Buffer): Buffer;
    static asyncSha256Hmac(data: Buffer, key: Buffer): Promise<Buffer>;
    static sha512Hmac(data: Buffer, key: Buffer): Buffer;
    static asyncSha512Hmac(data: Buffer, key: Buffer): Promise<Buffer>;
}
//# sourceMappingURL=hash.d.ts.map