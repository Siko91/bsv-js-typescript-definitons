/**
 * Transaction Output
 * ==================
 *
 * An output to a transaction. The way you normally want to make one is with
 * new TxOut(valueBn, script) (i.e., just as with TxIn, you can leave out the
 * scriptVi, since it can be computed automatically.
 */
import { Bn } from './bn';
import { Br } from './br';
import { Bw } from './bw';
import { Script } from './script';
import { Struct } from './struct';
import { VarInt } from './var-int';
export interface TxOutLike {
    valueBn: string;
    scriptVi: string;
    script: string;
}
export declare class TxOut extends Struct {
    valueBn: Bn;
    scriptVi: VarInt;
    script: Script;
    constructor(valueBn?: Bn, scriptVi?: VarInt, script?: Script);
    setScript(script: Script): this;
    fromProperties(valueBn: Bn, script: Script): this;
    static fromProperties(valueBn: Bn, script: Script): TxOut;
    fromJSON(json: TxOutLike): this;
    toJSON(): TxOutLike;
    fromBr(br: Br): this;
    toBw(bw?: Bw): Bw;
}
//# sourceMappingURL=tx-out.d.ts.map