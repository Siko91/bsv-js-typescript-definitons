import { Interp } from './interp';
import { Struct } from './struct';
import { Tx } from './tx';
import { TxOutMap } from './tx-out-map';
export declare class TxVerifier extends Struct {
    tx: Tx;
    txOutMap: TxOutMap;
    errStr: string;
    interp: Interp;
    constructor(tx?: Tx, txOutMap?: TxOutMap, errStr?: string, interp?: Interp);
    /**
     * Verifies that the transaction is valid both by performing basic checks, such
     * as ensuring that no two inputs are the same, as well as by verifying every
     * script. The two checks are checkStr, which is analagous to bitcoind's
     * CheckTransaction, and verifyStr, which runs the script interpreter.
     *
     * This does NOT check that any possible claimed fees are accurate; checking
     * that the fees are accurate requires checking that the input transactions are
     * valid, which is not performed by this test. That check is done with the
     * normal verify function.
     */
    verify(flags?: number): boolean;
    asyncVerify(flags: number): Promise<boolean>;
    /**
     * Convenience method to verify a transaction.
     */
    static verify(tx: Tx, txOutMap: TxOutMap, flags?: number): boolean;
    static asyncVerify(tx: Tx, txOutMap: TxOutMap, flags: number): Promise<boolean>;
    /**
     * Check that a transaction passes basic sanity tests. If not, return a string
     * describing the error. This function contains the same logic as
     * CheckTransaction in bitcoin core.
     */
    checkStr(): boolean | string;
    /**
     * verify the transaction inputs by running the script interpreter. Returns a
     * string of the script interpreter is invalid, otherwise returns false.
     */
    verifyStr(flags: number): boolean | string;
    asyncVerifyStr(flags: number): Promise<boolean | string>;
    /**
     * Verify a particular input by running the script interpreter. Returns true if
     * the input is valid, false otherwise.
     */
    verifyNIn(nIn: number, flags: number): boolean;
    asyncVerifyNIn(nIn: number, flags: number): Promise<boolean>;
    getDebugObject(): {
        errStr: string;
        interpFailure: {
            errStr: string;
            scriptStr: string;
            pc: number;
            stack: string[];
            altStack: string[];
            opCodeStr: string;
        };
    };
    getDebugString(): string;
}
//# sourceMappingURL=tx-verifier.d.ts.map