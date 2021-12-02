/// <reference types="node" />
/**
 * Buffer Reader
 * =============
 *
 * This is a convenience class for reading VarInts and other basic types from a
 * buffer. This class is most useful for reading VarInts, and also for signed
 * or unsigned integers of various types. It can also read a buffer in reverse
 * order, which is useful in bitcoin which uses little endian numbers a lot so
 * you find that you must reverse things. You probably want to use it like:
 * varInt = new Br(buf).readnew VarInt()
 */
import { Bn } from './bn';
export declare class Br {
    buf: Buffer;
    pos: number;
    constructor(buf?: Buffer);
    fromObject(obj: any): Br;
    eof(): boolean;
    read(len?: number): Buffer;
    readReverse(len?: number): Buffer;
    readUInt8(): number;
    readInt8(): number;
    readUInt16BE(): number;
    readInt16BE(): number;
    readUInt16LE(): number;
    readInt16LE(): number;
    readUInt32BE(): number;
    readInt32BE(): number;
    readUInt32LE(): number;
    readInt32LE(): number;
    readUInt64BEBn(): Bn;
    readUInt64LEBn(): Bn;
    readVarIntNum(): number;
    readVarIntBuf(): Buffer;
    readVarIntBn(): Bn;
}
//# sourceMappingURL=br.d.ts.map