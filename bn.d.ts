/// <reference types="node" />
/**
 * Use hack to type legacy bn class.
 *
 * TODO: Refactor by properly extending from bn.js.
 */
declare type Endianness = 'le' | 'be';
declare type IPrimeName = 'k256' | 'p224' | 'p192' | 'p25519';
interface MPrime {
    name: string;
    p: BnDefinition;
    n: number;
    k: BnDefinition;
}
interface ReductionContext {
    m: number;
    prime: MPrime;
    [key: string]: any;
}
declare class BnDefinition {
    static BnLegacy: typeof BnDefinition;
    static wordSize: 26;
    constructor(number?: number | string | number[] | Uint8Array | Buffer | BnDefinition, base?: number | 'hex', endian?: Endianness);
    /**
     * @description  create a reduction context
     */
    static red(reductionContext: BnDefinition | IPrimeName): ReductionContext;
    /**
     * @description  create a reduction context  with the Montgomery trick.
     */
    static mont(num: BnDefinition): ReductionContext;
    /**
     * @description returns true if the supplied object is a BnDefinition.js instance
     */
    static isBnDefinition(b: any): b is BnDefinition;
    /**
     * @description returns the maximum of 2 BnDefinition instances.
     */
    static max(left: BnDefinition, right: BnDefinition): BnDefinition;
    /**
     * @description returns the minimum of 2 BnDefinition instances.
     */
    static min(left: BnDefinition, right: BnDefinition): BnDefinition;
    fromHex(hex: string, opts?: {
        endian: 'big' | 'little';
    }): BnDefinition;
    toHex(opts?: {
        size?: number;
        endian?: 'big' | 'little';
    }): string;
    fromJSON(str: string): BnDefinition;
    fromNumber(n: number): BnDefinition;
    fromString(str: string, base?: number): BnDefinition;
    fromBuffer(buf: Buffer, opts?: {
        endian: 'big' | 'little';
    }): BnDefinition;
    static fromBuffer(buf: Buffer, opts?: {
        endian: 'big' | 'little';
    }): BnDefinition;
    fromFastBuffer(buf: Buffer, opts?: {
        endian: 'big' | 'little';
    }): BnDefinition;
    /**
     * Signed magnitude buffer. Most significant bit represents sign (0 = positive,
     * 1 = negative).
     */
    fromSm(buf: Buffer, opts?: {
        endian: 'big' | 'little';
    }): BnDefinition;
    toSm(opts?: {
        endian: 'big' | 'little';
    }): Buffer;
    /**
     * Produce a BnDefinition from the "bits" value in a blockheader. Analagous to Bitcoin
     * Core's uint256 SetCompact method. bits is assumed to be UInt32.
     */
    fromBits(bits: number, opts?: {
        strict: boolean;
    }): BnDefinition;
    /**
     * Convert BnDefinition to the "bits" value in a blockheader. Analagous to Bitcoin
     * Core's uint256 GetCompact method. bits is a UInt32.
     */
    toBits(): number;
    fromScriptNumBuffer(buf: Buffer, fRequireMinimal?: boolean, nMaxNumSize?: number): BnDefinition;
    toScriptNumBuffer(): Buffer;
    /**
     * @description  clone number
     */
    clone(): BnDefinition;
    /**
     * @description  convert to base-string and pad with zeroes
     */
    toString(base?: number | 'hex', length?: number): string;
    /**
     * @description convert to Javascript Number (limited to 53 bits)
     */
    toNumber(): number;
    /**
     * @description convert to JSON compatible hex string (alias of toString(16))
     */
    toJSON(): string;
    /**
     * @description  convert to byte Array, and optionally zero pad to length, throwing if already exceeding
     */
    toArray(endian?: Endianness, length?: number): number[];
    /**
     * @description convert to an instance of `type`, which must behave like an Array
     */
    toArrayLike(ArrayType: typeof Buffer, endian?: Endianness, length?: number): Buffer;
    toArrayLike(ArrayType: any[], endian?: Endianness, length?: number): any[];
    /**
     * @description  convert to Node.js Buffer (if available). For compatibility with browserify and similar tools, use this instead: a.toArrayLike(Buffer, endian, length)
     */
    toBuffer(opts?: {
        size?: number;
        endian?: 'big' | 'little';
    }): Buffer;
    toFastBuffer(opts?: {
        size?: number;
        endian?: 'big' | 'little';
    }): Buffer;
    /**
     * @description get number of bits occupied
     */
    bitLength(): number;
    /**
     * @description return number of less-significant consequent zero bits (example: 1010000 has 4 zero bits)
     */
    zeroBits(): number;
    /**
     * @description return number of bytes occupied
     */
    byteLength(): number;
    /**
     * @description  true if the number is negative
     */
    isNeg(): boolean;
    /**
     * @description  check if value is even
     */
    isEven(): boolean;
    /**
     * @description   check if value is odd
     */
    isOdd(): boolean;
    /**
     * @description  check if value is zero
     */
    isZero(): boolean;
    /**
     * @description compare numbers and return `-1 (a < b)`, `0 (a == b)`, or `1 (a > b)` depending on the comparison result
     */
    cmp(b: BnDefinition | number): -1 | 0 | 1;
    /**
     * @description compare numbers and return `-1 (a < b)`, `0 (a == b)`, or `1 (a > b)` depending on the comparison result
     */
    ucmp(b: BnDefinition): -1 | 0 | 1;
    /**
     * @description compare numbers and return `-1 (a < b)`, `0 (a == b)`, or `1 (a > b)` depending on the comparison result
     */
    cmpn(b: number): -1 | 0 | 1;
    /**
     * @description a less than b
     */
    lt(b: BnDefinition | number): boolean;
    /**
     * @description a less than b
     */
    ltn(b: number): boolean;
    /**
     * @description a less than or equals b
     */
    lte(b: BnDefinition): boolean;
    /**
     * @description a less than or equals b
     */
    lten(b: number): boolean;
    /**
     * @description a greater than b
     */
    gt(b: BnDefinition | number): boolean;
    /**
     * @description a greater than b
     */
    gtn(b: number): boolean;
    /**
     * @description a greater than or equals b
     */
    gte(b: BnDefinition): boolean;
    /**
     * @description a greater than or equals b
     */
    gten(b: number): boolean;
    /**
     * @description a equals b
     */
    eq(b: BnDefinition | number): boolean;
    /**
     * @description a equals b
     */
    eqn(b: number): boolean;
    /**
     * @description convert to two's complement representation, where width is bit width
     */
    toTwos(width: number): BnDefinition;
    /**
     * @description  convert from two's complement representation, where width is the bit width
     */
    fromTwos(width: number): BnDefinition;
    /**
     * @description negate sign
     */
    neg(): BnDefinition;
    /**
     * @description negate sign
     */
    ineg(): BnDefinition;
    /**
     * @description absolute value
     */
    abs(): BnDefinition;
    /**
     * @description absolute value
     */
    iabs(): BnDefinition;
    /**
     * @description addition
     */
    add(b: BnDefinition | number): BnDefinition;
    /**
     * @description  addition
     */
    iadd(b: BnDefinition): BnDefinition;
    /**
     * @description addition
     */
    addn(b: number): BnDefinition;
    /**
     * @description addition
     */
    iaddn(b: number): BnDefinition;
    /**
     * @description subtraction
     */
    sub(b: BnDefinition | number): BnDefinition;
    /**
     * @description subtraction
     */
    isub(b: BnDefinition): BnDefinition;
    /**
     * @description subtraction
     */
    subn(b: number): BnDefinition;
    /**
     * @description subtraction
     */
    isubn(b: number): BnDefinition;
    /**
     * @description multiply
     */
    mul(b: BnDefinition): BnDefinition;
    /**
     * @description multiply
     */
    imul(b: BnDefinition): BnDefinition;
    /**
     * @description multiply
     */
    muln(b: number): BnDefinition;
    /**
     * @description multiply
     */
    imuln(b: number): BnDefinition;
    /**
     * @description square
     */
    sqr(): BnDefinition;
    /**
     * @description square
     */
    isqr(): BnDefinition;
    /**
     * @description raise `a` to the power of `b`
     */
    pow(b: BnDefinition): BnDefinition;
    /**
     * @description divide
     */
    div(b: BnDefinition): BnDefinition;
    /**
     * @description divide
     */
    divn(b: number): BnDefinition;
    /**
     * @description divide
     */
    idivn(b: number): BnDefinition;
    /**
     * @description reduct
     */
    mod(b: BnDefinition): BnDefinition;
    /**
     * @description reduct
     */
    umod(b: BnDefinition): BnDefinition;
    /**
     * @deprecated
     * @description reduct
     */
    modn(b: number): number;
    /**
     * @description reduct
     */
    modrn(b: number): number;
    /**
     * @description  rounded division
     */
    divRound(b: BnDefinition): BnDefinition;
    /**
     * @description or
     */
    or(b: BnDefinition): BnDefinition;
    /**
     * @description or
     */
    ior(b: BnDefinition): BnDefinition;
    /**
     * @description or
     */
    uor(b: BnDefinition): BnDefinition;
    /**
     * @description or
     */
    iuor(b: BnDefinition): BnDefinition;
    /**
     * @description and
     */
    and(b: BnDefinition): BnDefinition;
    /**
     * @description and
     */
    iand(b: BnDefinition): BnDefinition;
    /**
     * @description and
     */
    uand(b: BnDefinition): BnDefinition;
    /**
     * @description and
     */
    iuand(b: BnDefinition): BnDefinition;
    /**
     * @description and (NOTE: `andln` is going to be replaced with `andn` in future)
     */
    andln(b: number): BnDefinition;
    /**
     * @description xor
     */
    xor(b: BnDefinition): BnDefinition;
    /**
     * @description xor
     */
    ixor(b: BnDefinition): BnDefinition;
    /**
     * @description xor
     */
    uxor(b: BnDefinition): BnDefinition;
    /**
     * @description xor
     */
    iuxor(b: BnDefinition): BnDefinition;
    /**
     * @description set specified bit to 1
     */
    setn(b: number): BnDefinition;
    /**
     * @description shift left
     */
    shln(b: number): BnDefinition;
    /**
     * @description shift left
     */
    ishln(b: number): BnDefinition;
    /**
     * @description shift left
     */
    ushln(b: number): BnDefinition;
    /**
     * @description shift left
     */
    iushln(b: number): BnDefinition;
    /**
     * @description shift right
     */
    shrn(b: number): BnDefinition;
    /**
     * @description shift right (unimplemented https://github.com/indutny/bn.js/blob/master/lib/bn.js#L2086)
     */
    ishrn(b: number): BnDefinition;
    /**
     * @description shift right
     */
    ushrn(b: number): BnDefinition;
    /**
     * @description shift right
     */
    iushrn(b: number): BnDefinition;
    /**
     * @description  test if specified bit is set
     */
    testn(b: number): boolean;
    /**
     * @description clear bits with indexes higher or equal to `b`
     */
    maskn(b: number): BnDefinition;
    /**
     * @description clear bits with indexes higher or equal to `b`
     */
    imaskn(b: number): BnDefinition;
    /**
     * @description add `1 << b` to the number
     */
    bincn(b: number): BnDefinition;
    /**
     * @description not (for the width specified by `w`)
     */
    notn(w: number): BnDefinition;
    /**
     * @description not (for the width specified by `w`)
     */
    inotn(w: number): BnDefinition;
    /**
     * @description GCD
     */
    gcd(b: BnDefinition): BnDefinition;
    /**
     * @description Extended GCD results `({ a: ..., b: ..., gcd: ... })`
     */
    egcd(b: BnDefinition): {
        a: BnDefinition;
        b: BnDefinition;
        gcd: BnDefinition;
    };
    /**
     * @description inverse `a` modulo `b`
     */
    invm(b: BnDefinition): BnDefinition;
    neq(b: BnDefinition | number): boolean;
    geq(b: BnDefinition | number): boolean;
    leq(b: BnDefinition | number): boolean;
    copy(b: BnDefinition): void;
    static _prime(name: IPrimeName): MPrime;
    toRed(reductionContext: ReductionContext): any;
}
export declare const Bn: typeof BnDefinition;
export declare type Bn = BnDefinition;
export {};
//# sourceMappingURL=bn.d.ts.map