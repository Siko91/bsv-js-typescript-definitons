/// <reference types="node" />
/**
 * Inv
 * ===
 *
 * Inventory - used in p2p messages.
 */
import { Br } from './br';
import { Bw } from './bw';
import { Struct } from './struct';
export declare class Inv extends Struct {
    static readonly MSG_TX = 1;
    static readonly MSG_BLOCK = 2;
    static readonly MSG_FILTERED_BLOCK = 3;
    typeNum: number;
    hashBuf: Buffer;
    constructor(typeNum?: number, hashBuf?: Buffer);
    fromBr(br: Br): this;
    toBw(bw?: Bw): Bw;
    isTx(): boolean;
    isBlock(): boolean;
    isFilteredBlock(): boolean;
}
//# sourceMappingURL=inv.d.ts.map