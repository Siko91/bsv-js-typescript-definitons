/// <reference types="node" />
/**
 * Script Interpreter
 * ==================
 *
 * Bitcoin transactions contain scripts. Each input has a script called the
 * scriptSig, and each output has a script called the scriptPubKey. To validate
 * an input, the ScriptSig is executed, then with the same stack, the
 * scriptPubKey from the output corresponding to that input is run. The primary
 * way to use this class is via the verify function:
 *
 * new Interp().verify( ... )
 *
 * In some ways, the script interpreter is one of the most poorly architected
 * components of Yours Bitcoin because of the giant switch statement in step(). But
 * that is deliberately so to make it similar to bitcoin core, and thus easier
 * to audit.
 */
import { Bn } from './bn';
import { Br } from './br';
import { Bw } from './bw';
import { Script } from './script';
import { Struct } from './struct';
import { Tx, TxLike } from './tx';
interface InterpLike {
    script: string;
    tx?: TxLike;
    nIn: number;
    stack: string[];
    altStack: string[];
    pc: number;
    pBeginCodeHash: number;
    nOpCount: number;
    ifStack: boolean[];
    errStr: string;
    flags: number;
}
export declare class Interp extends Struct {
    static readonly true: Buffer;
    static readonly false: Buffer;
    static readonly MAX_SCRIPT_ELEMENT_SIZE = 520;
    static readonly LOCKTIME_THRESHOLD = 500000000;
    static readonly SCRIPT_VERIFY_NONE = 0;
    static readonly SCRIPT_VERIFY_P2SH: number;
    static readonly SCRIPT_VERIFY_STRICTENC: number;
    static readonly SCRIPT_VERIFY_DERSIG: number;
    static readonly SCRIPT_VERIFY_LOW_S: number;
    static readonly SCRIPT_VERIFY_NULLDUMMY: number;
    static readonly SCRIPT_VERIFY_SIGPUSHONLY: number;
    static readonly SCRIPT_VERIFY_MINIMALDATA: number;
    static readonly SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS: number;
    static readonly SCRIPT_VERIFY_CLEANSTACK: number;
    static readonly SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY: number;
    static readonly SCRIPT_VERIFY_CHECKSEQUENCEVERIFY: number;
    static readonly SCRIPT_ENABLE_SIGHASH_FORKID: number;
    static readonly defaultFlags: number;
    script: Script;
    tx: Tx;
    nIn: number;
    stack: Buffer[];
    altStack: Buffer[];
    pc: number;
    pBeginCodeHash: number;
    nOpCount: number;
    ifStack: boolean[];
    errStr: string;
    flags: number;
    valueBn: Bn;
    constructor(script?: Script, tx?: Tx, nIn?: number, stack?: Buffer[], altStack?: Buffer[], pc?: number, pBeginCodeHash?: number, nOpCount?: number, ifStack?: boolean[], errStr?: string, flags?: number, valueBn?: Bn);
    initialize(): this;
    fromJSON(json: InterpLike): this;
    /**
     * Convert JSON containing everything but the tx to an interp object.
     */
    fromJSONNoTx(json: InterpLike): this;
    fromBr(br: Br): this;
    toJSON(): InterpLike;
    /**
     * Convert everything but the tx to JSON.
     */
    toJSONNoTx(): InterpLike;
    toBw(bw?: Bw): Bw;
    /**
     * In order to make auduting the script interpreter easier, we use the same
     * constants as bitcoin core, including the flags, which customize the
     * operation of the interpreter.
     */
    static getFlags(flagstr: string): number;
    static castToBool(buf: Buffer): boolean;
    /**
     * Translated from bitcoin core's CheckSigEncoding
     */
    checkSigEncoding(buf: Buffer): boolean;
    /**
     * Translated from bitcoin core's CheckPubKeyEncoding
     */
    checkPubKeyEncoding(buf: Buffer): boolean;
    /**
     * Translated from bitcoin core's CheckLockTime
     */
    checkLockTime(nLockTime: number): boolean;
    /**
     * Translated from bitcoin core's CheckSequence.
     */
    checkSequence(nSequence: number): boolean;
    /**
     * Based on bitcoin core's EvalScript function, with the inner loop moved to
     * Interp.prototype.step()
     * bitcoin core commit: b5d1b1092998bc95313856d535c632ea5a8f9104
     */
    eval(): Generator<boolean, void, unknown>;
    /**
     * Based on the inner loop of bitcoin core's EvalScript function
     */
    step(): boolean;
    /**
     * This function has the same interface as bitcoin core's VerifyScript and is
     * the function you want to use to know if a particular input in a
     * transaction is valid or not. It simply iterates over the results generated
     * by the results method.
     */
    verify(scriptSig?: Script, scriptPubKey?: Script, tx?: Tx, nIn?: number, flags?: number, valueBn?: Bn): boolean;
    /**
     * Gives you the results of the execution each operation of the scripSig and
     * scriptPubKey corresponding to a particular input (nIn) for the concerned
     * transaction (tx). Each result can be either true or false. If true, then
     * the operation did not invalidate the transaction. If false, then the
     * operation has invalidated the script, and the transaction is not valid.
     * flags is a number that can pass in some special flags, such as whether or
     * not to execute the redeemScript in a p2sh transaction.
     *
     * This method is translated from bitcoin core's VerifyScript.  This function
     * is a generator, thus you can and need to iterate through it.  To
     * automatically return true or false, use the verify method.
     */
    results(scriptSig?: Script, scriptPubKey?: Script, tx?: Tx, nIn?: number, flags?: number, valueBn?: Bn): Generator<boolean, void, unknown>;
    /**
     * If the script has failed, this methods returns valuable debug
     * information about exactly where the script failed. It is a
     * JSON-compatible object so it can be easily stringified. pc refers to the
     * currently executing opcode.
     */
    getDebugObject(): {
        errStr: string;
        scriptStr: string;
        pc: number;
        stack: string[];
        altStack: string[];
        opCodeStr: string;
    };
    getDebugString(): string;
}
export {};
//# sourceMappingURL=interp.d.ts.map