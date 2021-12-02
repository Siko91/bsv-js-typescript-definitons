/// <reference types="node" />
/**
 * Hash Cache
 * ==========
 *
 * For use in sighash.
 */
import { Struct } from './struct';
export interface HashCacheLike {
    prevoutsHashBuf: string;
    sequenceHashBuf: string;
    outputsHashBuf: string;
}
export declare class HashCache extends Struct {
    prevoutsHashBuf: Buffer;
    sequenceHashBuf: Buffer;
    outputsHashBuf: Buffer;
    constructor(prevoutsHashBuf?: Buffer, sequenceHashBuf?: Buffer, outputsHashBuf?: Buffer);
    fromBuffer(buf: Buffer): this;
    toBuffer(): Buffer;
    fromJSON(json: HashCacheLike): this;
    toJSON(): HashCacheLike;
}
//# sourceMappingURL=hash-cache.d.ts.map