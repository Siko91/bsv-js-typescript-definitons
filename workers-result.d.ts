/// <reference types="node" />
/**
 * WorkersResult
 * =============
 *
 * A response sent back from a worker to the main thread. Contains the "result"
 * of the computation in the form of a buffer, resbuf. If the actual result is
 * an object with a .toFastBuffer method, the object is converted to a buffer
 * using that method. Otherwise it is JSON serialized into a buffer. The result
 * can also be an error, in which case the isError flag is set.
 */
import { Br } from './br';
import { Bw } from './bw';
import { Struct } from './struct';
export declare class WorkersResult extends Struct {
    resbuf: Buffer;
    isError: boolean;
    id: number;
    constructor(resbuf?: Buffer, isError?: boolean, id?: number);
    fromResult(result: Buffer | Struct | string, id: number): this;
    static fromResult(result: Buffer | Struct | string, id: number): WorkersResult;
    fromError(error: any, id: number): this;
    toBw(bw?: Bw): Bw;
    fromBr(br: Br): this;
}
//# sourceMappingURL=workers-result.d.ts.map