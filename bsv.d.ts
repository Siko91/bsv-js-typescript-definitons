// Type definitions for bsv 2.0.10
// Project: https://github.com/moneybutton/bsv
// Forked From: https://github.com/bitpay/bitcore-lib
// Definitions by: Aleksandar Dinkov <https://github.com/Siko91>

/// <reference types="node" />

declare module 'bsv' {
  namespace Hash {
    function sha1(t: Buffer): Buffer;
    function sha256(t: Buffer): Buffer;
    function sha256Sha256(t: Buffer): Buffer;
    function ripemd160(t: Buffer): Buffer;
    function sha256Ripemd160(t: Buffer): Buffer;
    function sha512(t: Buffer): Buffer;
    function hmac(t: Buffer, e: Buffer, r: Buffer): Buffer;
    function sha1Hmac(t: Buffer, e: Buffer): Buffer;
    function sha256Hmac(t: Buffer, e: Buffer): Buffer;
    function sha512Hmac(t: Buffer, e: Buffer): Buffer;

    function asyncSha1(t: Buffer): Promise<Buffer>;
    function asyncSha256(t: Buffer): Promise<Buffer>;
    function asyncSha256Sha256(t: Buffer): Promise<Buffer>;
    function asyncRipemd160(t: Buffer): Promise<Buffer>;
    function asyncSha256Ripemd160(t: Buffer): Promise<Buffer>;
    function asyncSha512(t: Buffer): Promise<Buffer>;
    function asyncSha1Hmac(t: Buffer, e: Buffer): Promise<Buffer>;
    function asyncSha256Hmac(t: Buffer, e: Buffer): Promise<Buffer>;
    function asyncSha512Hmac(t: Buffer, e: Buffer): Promise<Buffer>;
  }

  let Constants: {
    Mainnet: {
      MaxSize: number;
      Port: number;
      Address: { pubKeyHash: number; payToScriptHash: number };
      Bip32: { pubKey: number; privKey: number };
      Block: { maxNBits: number; magicNum: number };
      Msg: { magicNum: number; versionBytesNum: number };
      PrivKey: { versionByteNum: number };
      TxBuilder: { dust: number; feePerKbNum: number };
      Workers: { timeout: number };
    };
    Testnet: {
      MaxSize: number;
      Port: number;
      Address: { pubKeyHash: number; payToScriptHash: number };
      Bip32: { pubKey: number; privKey: number };
      Block: { maxNBits: number; magicNum: number };
      Msg: { magicNum: number; versionBytesNum: number };
      PrivKey: { versionByteNum: number };
      TxBuilder: { dust: number; feePerKbNum: number };
      Workers: { timeout: number };
    };
    Regtest: {
      MaxSize: number;
      Port: number;
      Address: { pubKeyHash: number; payToScriptHash: number };
      Bip32: { pubKey: number; privKey: number };
      Block: { maxNBits: number; magicNum: number };
      Msg: { magicNum: number; versionBytesNum: number };
      PrivKey: { versionByteNum: number };
      TxBuilder: { dust: number; feePerKbNum: number };
      Workers: { timeout: number };
    };
    STN: {
      MaxSize: number;
      Port: number;
      Address: { pubKeyHash: number; payToScriptHash: number };
      Bip32: { pubKey: number; privKey: number };
      Block: { maxNBits: number; magicNum: number };
      Msg: { magicNum: number; versionBytesNum: number };
      PrivKey: { versionByteNum: number };
      TxBuilder: { dust: number; feePerKbNum: number };
      Workers: { timeout: number };
    };
    Default: {
      MaxSize: number;
      Port: number;
      Address: { pubKeyHash: number; payToScriptHash: number };
      Bip32: { pubKey: number; privKey: number };
      Block: { maxNBits: number; magicNum: number };
      Msg: { magicNum: number; versionBytesNum: number };
      PrivKey: { versionByteNum: number };
      TxBuilder: { dust: number; feePerKbNum: number };
      Workers: { timeout: number };
    };
  };

  let deps: {
    aes: any;
    bnjs: any;
    bs58: any;
    elliptic: any;
    hashjs: any;
    pbkdf2: any;
    Buffer: any;
  };

  let en: string[];
  let jp: string[];
  let version: string;

  function cmp(t: Buffer, e: Buffer): boolean;

  function getConstants(magicNum: number): any;

  class Ach {
    static encrypt(t: Buffer, e: Buffer, r: Buffer): Buffer;
    static decrypt(t: Buffer, e: Buffer): Buffer;

    static asyncEncrypt(t: Buffer, e: Buffer, r: Buffer): Promise<Buffer>;
    static asyncDecrypt(t: Buffer, e: Buffer): Promise<Buffer>;
  }

  namespace Address {
    class Mainnet extends Address {
      constructor(privkey: PrivKey, pubkey: PubKey);
    }

    class Testnet extends Address {
      constructor(privkey: PrivKey, pubkey: PubKey);
    }
  }

  class Address extends Struct {
    static fromBuffer(t: Buffer): Address;
    static fromPubKeyHashBuf(t: Buffer): Address;
    static fromPubKey(t: PubKey): Address;
    static fromPrivKey(t: PrivKey): Address;
    static fromRandom(): Address;
    static fromString(t: string): Address;
    static fromTxInScript(t: Script): Address;
    static fromTxOutScript(t: Script): Address;
    static fromJSON(t: any): Address;
    static fromObject(t: any): Address;
    static fromBr(t: Br): Address;
    static fromFastBuffer(t: Buffer, ...e: any): Address;
    static fromHex(t: string, ...e: any): Address;
    static fromFastHex(t: string, ...e: any): Address;

    static asyncFromPubKey(t: PubKey): Promise<Address>;
    static asyncFromPrivKey(t: PrivKey): Promise<Address>;
    static asyncFromRandom(): Promise<Address>;
    static asyncFromString(t: string): Promise<Address>;
    static asyncFromBr(t: Br): Promise<Address>;
    static asyncFromBuffer(t: Buffer, ...e: any): Promise<Address>;
    static asyncFromHex(t: string, ...e: any): Promise<Address>;
    static asyncFromJSON(t: any, ...e: any): Promise<Address>;

    Constants: { pubKeyHash: number; payToScriptHash: number };

    constructor(
      versionByteNum: number,
      hashBuf: Buffer,
      constants?: { pubKeyHash: number; payToScriptHash: number }
    );

    fromBuffer(t: Buffer): Address;
    fromPubKeyHashBuf(t: Buffer): Address;
    fromPubKey(t: PubKey): Address;
    fromPrivKey(t: PrivKey): Address;
    fromRandom(): Address;
    fromString(t: string): Address;
    fromTxInScript(t: Script): Address;
    fromTxOutScript(t: Script): Address;
    fromJSON(t: any): Address;
    fromObject(t: any): Address;
    fromBr(t: Br): Address;
    fromFastBuffer(t: Buffer, ...e: any): Address;
    fromHex(t: string, ...e: any): Address;
    fromFastHex(t: string, ...e: any): Address;

    asyncFromPubKey(t: PubKey): Promise<Address>;
    asyncFromPrivKey(t: PrivKey): Promise<Address>;
    asyncFromRandom(): Promise<Address>;
    asyncFromString(t: string): Promise<Address>;
    asyncFromBr(t: Br): Promise<Address>;
    asyncFromBuffer(t: Buffer, ...e: any): Promise<Address>;
    asyncFromHex(t: string, ...e: any): Promise<Address>;
    asyncFromJSON(t: any, ...e: any): Promise<Address>;

    toTxOutScript(): Script;
    toBuffer(): Buffer;
    toJSON(): any;
    toString(): string;
    toBw(t: any): Bw;
    toFastBuffer(...t: any): Buffer;
    toHex(...t: any): string;
    toFastHex(...t: any): string;

    asyncToString(): Promise<string>;
    asyncToBw(t: any): Promise<Bw>;
    asyncToBuffer(...t: any): Promise<Buffer>;
    asyncToHex(...t: any): Promise<string>;
    asyncToJSON(): Promise<any>;

    isValid(): boolean;
    validate(): Address;

    clone(): Address;
    cloneByBuffer(): Address;
    cloneByFastBuffer(): Address;
    cloneByHex(): Address;
    cloneByString(): Address;
    cloneByJSON(): Address;
  }

  class Aes {
    static encrypt(t: Buffer, e: Buffer): Buffer;
    static decrypt(t: Buffer, e: Buffer): Buffer;
    static buf2Words(t: Buffer): number[];
    static words2Buf(t: number[]): Buffer;
  }

  class Aescbc {
    static encrypt(t: Buffer, e: Buffer, r?: Buffer, i?: boolean): Buffer;
    static decrypt(t: Buffer, e: Buffer, r?: Buffer): Buffer;
  }

  class Base58 extends Struct {
    static fromHex(t: string): Base58;
    static fromBuffer(t: Buffer): Base58;
    static fromString(t: string): Base58;
    static fromObject(t: any): Base58;
    static fromBr(t: Br): Base58;
    static fromFastBuffer(t: Buffer, ...e: any): Base58;
    static fromFastHex(t: string, ...e: any): Base58;
    static fromJSON(t: any): Base58;

    static asyncFromBr(t: Br): Promise<Base58>;
    static asyncFromBuffer(t: Buffer, ...e: any): Promise<Base58>;
    static asyncFromHex(t: string, ...e: any): Promise<Base58>;
    static asyncFromString(t: string, ...e: any): Promise<Base58>;
    static asyncFromJSON(t: any, ...e: any): Promise<Base58>;

    static encode(t: Buffer): string;
    static decode(t: string): Buffer;

    buf: Buffer;
    constructor(t: Buffer);

    fromHex(t: string): Base58;
    fromBuffer(t: Buffer): Base58;
    fromString(t: string): Base58;
    fromObject(t: any): Base58;
    fromBr(t: Br): Base58;
    fromFastBuffer(t: Buffer, ...e: any): Base58;
    fromFastHex(t: string, ...e: any): Base58;
    fromJSON(t: any): Base58;

    asyncFromBr(t: Br): Promise<Base58>;
    asyncFromBuffer(t: Buffer, ...e: any): Promise<Base58>;
    asyncFromHex(t: string, ...e: any): Promise<Base58>;
    asyncFromString(t: string, ...e: any): Promise<Base58>;
    asyncFromJSON(t: any, ...e: any): Promise<Base58>;

    toHex(): string;
    toBuffer(): Buffer;
    toString(): string;
    toBw(t: any): Bw;
    toFastBuffer(...t: any): Buffer;
    toFastHex(...t: any): string;
    toJSON(): any;

    asyncToBw(t: any): Promise<any>;
    asyncToBuffer(...t: any): Promise<Buffer>;
    asyncToHex(...t: any): Promise<string>;
    asyncToString(...t: any): Promise<string>;
    asyncToJSON(): Promise<any>;

    clone(): Base58;
    cloneByBuffer(): Base58;
    cloneByFastBuffer(): Base58;
    cloneByHex(): Base58;
    cloneByString(): Base58;
    cloneByJSON(): Base58;
  }
  class Base58Check extends Struct {
    static encode(t: string): Buffer;
    static decode(t: Buffer): string;

    static fromHex(t: string): Base58Check;
    static fromBuffer(t: Buffer): Base58Check;
    static fromString(t: string): Base58Check;
    static fromObject(t: any): Base58Check;
    static fromBr(t: Br): Base58Check;
    static fromFastBuffer(t: Buffer, ...e: any): Base58Check;
    static fromFastHex(t: string, ...e: any): Base58Check;
    static fromJSON(t: any): Base58Check;

    static asyncFromBr(t: Br): Promise<Base58Check>;
    static asyncFromBuffer(t: Buffer, ...e: any): Promise<Base58Check>;
    static asyncFromHex(t: string, ...e: any): Promise<Base58Check>;
    static asyncFromString(t: string, ...e: any): Promise<Base58Check>;
    static asyncFromJSON(t: any, ...e: any): Promise<Base58Check>;

    buf: Buffer;
    constructor(t: Buffer);

    fromHex(t: string): Base58Check;
    fromBuffer(t: Buffer): Base58Check;
    fromString(t: string): Base58Check;
    fromObject(t: any): Base58Check;
    fromBr(t: Br): Base58Check;
    fromFastBuffer(t: Buffer, ...e: any): Base58Check;
    fromFastHex(t: string, ...e: any): Base58Check;
    fromJSON(t: any): Base58Check;

    asyncFromBr(t: Br): Promise<Base58Check>;
    asyncFromBuffer(t: Buffer, ...e: any): Promise<Base58Check>;
    asyncFromHex(t: string, ...e: any): Promise<Base58Check>;
    asyncFromString(t: string, ...e: any): Promise<Base58Check>;
    asyncFromJSON(t: any, ...e: any): Promise<Base58Check>;

    toHex(): string;
    toBuffer(): Buffer;
    toString(): string;
    toBw(t: any): Bw;
    toFastBuffer(...t: any): Buffer;
    toFastHex(...t: any): string;
    toJSON(): any;

    asyncToBw(t: any): Promise<Bw>;
    asyncToBuffer(...t: any): Promise<Buffer>;
    asyncToHex(...t: any): Promise<string>;
    asyncToString(...t: any): Promise<string>;
    asyncToJSON(): Promise<any>;

    clone(): Base58Check;
    cloneByBuffer(): Base58Check;
    cloneByFastBuffer(): Base58Check;
    cloneByHex(): Base58Check;
    cloneByString(): Base58Check;
    cloneByJSON(): Base58Check;
  }

  namespace Bip32 {
    class Mainnet extends Bip32 {}
    class Testnet extends Bip32 {}
  }

  class Bip32 extends Struct {
    static fromRandom(): Bip32;
    static fromString(t: string): Bip32;
    static fromSeed(t: any): Bip32;
    static fromBuffer(t: Buffer): Bip32;
    static fromFastBuffer(t: Buffer): Bip32;
    static fromJSON(value: any): Bip32;
    static fromObject(t: any): Bip32;
    static fromBr(t: Br): Bip32;
    static fromHex(t: string, ...e: any): Bip32;
    static fromFastHex(t: string, ...e: any): Bip32;

    static asyncFromString(t: string): Promise<Bip32>;
    static asyncFromSeed(t: any): Promise<Bip32>;
    static asyncFromBr(t: any): Promise<Bip32>;
    static asyncFromBuffer(t: Buffer, ...e: any): Promise<Bip32>;
    static asyncFromHex(t: string, ...e: any): Promise<Bip32>;
    static asyncFromJSON(t: any, ...e: any): Promise<Bip32>;

    Constants: { pubKey: number; privKey: number };
    PrivKey: PrivKey;

    constructor(
      versionBytesNum: number,
      depth: any,
      parentFingerPrint: any,
      childIndex: any,
      chainCode: any,
      privKey: PrivKey,
      pubKey: PubKey,
      Constants?: { pubKey: number; privKey: number },
      PrivKeyClass?: any
    );

    fromRandom(): Bip32;
    fromString(t: string): Bip32;
    fromSeed(t: any): Bip32;
    fromBuffer(t: Buffer): Bip32;
    fromFastBuffer(t: Buffer): Bip32;
    fromJSON(value: any): Bip32;
    fromObject(t: any): Bip32;
    fromBr(t: Br): Bip32;
    fromHex(t: string, ...e: any): Bip32;
    fromFastHex(t: string, ...e: any): Bip32;

    asyncFromString(t: string): Promise<Bip32>;
    asyncFromSeed(t: any): Promise<Bip32>;
    asyncFromBr(t: any): Promise<Bip32>;
    asyncFromBuffer(t: Buffer, ...e: any): Promise<Bip32>;
    asyncFromHex(t: string, ...e: any): Promise<Bip32>;
    asyncFromJSON(t: any, ...e: any): Promise<Bip32>;

    toPublic(): Bip32;
    toBuffer(): Buffer;
    toFastBuffer(): Buffer;
    toString(): string;
    toJSON(): any;
    toBw(t: any): Bw;
    toHex(...t: any): string;
    toFastHex(...t: any): string;

    asyncToString(): Promise<string>;
    asyncToBw(t: any): Promise<Bw>;
    asyncToBuffer(...t: any): Promise<Buffer>;
    asyncToHex(...t: any): Promise<string>;
    asyncToJSON(): Promise<any>;

    derive(t: string): Bip32;
    asyncDerive(t: string): Promise<Bip32>;
    deriveChild(t: string): Bip32;

    isPrivate(): boolean;

    clone(): Bip32;
    cloneByBuffer(): Bip32;
    cloneByFastBuffer(): Bip32;
    cloneByHex(): Bip32;
    cloneByString(): Bip32;
    cloneByJSON(): Bip32;
  }

  class Bip39 extends Struct {
    Wordlist: any;
    constructor(mnemonic: string, seed: Buffer, wordlist?: any);

    fromBr(t: any): Bip39;
    fromRandom(t: any): Bip39;
    fromEntropy(t: any): Bip39;
    fromString(t: any): Bip39;
    fromObject(t: any): Bip39;
    fromBuffer(t: any, ...e: any): Bip39;
    fromFastBuffer(t: any, ...e: any): Bip39;
    fromHex(t: any, ...e: any): Bip39;
    fromFastHex(t: any, ...e: any): Bip39;
    fromJSON(t: any): Bip39;

    asyncFromRandom(t: any): Promise<Bip39>;
    asyncFromEntropy(t: any): Promise<Bip39>;
    asyncFromBr(t: any): Promise<Bip39>;
    asyncFromBuffer(t: any, ...e: any): Promise<Bip39>;
    asyncFromHex(t: any, ...e: any): Promise<Bip39>;
    asyncFromString(t: any, ...e: any): Promise<Bip39>;
    asyncFromJSON(t: any, ...e: any): Promise<Bip39>;

    toBw(t: any): Bw;
    toString(): string;
    toSeed(t: any): Buffer;
    toBuffer(...t: any): Buffer;
    toFastBuffer(...t: any): Buffer;
    toHex(...t: any): string;
    toFastHex(...t: any): string;
    toJSON(): any;

    asyncToSeed(t: any): Promise<Buffer>;
    asyncToBw(t: any): Promise<Bw>;
    asyncToBuffer(...t: any): Promise<Buffer>;
    asyncToHex(...t: any): Promise<string>;
    asyncToString(...t: any): Promise<string>;
    asyncToJSON(): Promise<any>;

    entropy2Mnemonic(buf: Buffer): Bip39;
    check(): boolean;
    mnemonic2Seed(passphrase?: string): Bip39;
    isValid(passphrase?: any): boolean;

    clone(): Bip39;
    cloneByBuffer(): Bip39;
    cloneByFastBuffer(): Bip39;
    cloneByHex(): Bip39;
    cloneByString(): Bip39;
    cloneByJSON(): Bip39;
  }

  class Block extends Struct {
    static fromJSON(t: any): Block;
    static fromBr(t: Br): Block;
    static fromObject(t: any): Block;
    static fromBuffer(t: Buffer, ...e: any): Block;
    static fromFastBuffer(t: Buffer, ...e: any): Block;
    static fromHex(t: string, ...e: any): Block;
    static fromFastHex(t: string, ...e: any): Block;
    static fromString(t: string, ...e: any): Block;

    static asyncFromBr(t: Br): Promise<Block>;
    static asyncFromBuffer(t: Buffer, ...e: any): Promise<Block>;
    static asyncFromHex(t: string, ...e: any): Promise<Block>;
    static asyncFromString(t: string, ...e: any): Promise<Block>;
    static asyncFromJSON(t: any, ...e: any): Promise<Block>;

    static MAX_BLOCK_SIZE: number;
    constructor(blockHeader: BlockHeader, txsVi: any, txs: any[]);

    fromJSON(t: any): Block;
    fromBr(t: Br): Block;
    fromObject(t: any): Block;
    fromBuffer(t: Buffer, ...e: any): Block;
    fromFastBuffer(t: Buffer, ...e: any): Block;
    fromHex(t: string, ...e: any): Block;
    fromFastHex(t: string, ...e: any): Block;
    fromString(t: string, ...e: any): Block;

    asyncFromBr(t: Br): Promise<Block>;
    asyncFromBuffer(t: Buffer, ...e: any): Promise<Block>;
    asyncFromHex(t: string, ...e: any): Promise<Block>;
    asyncFromString(t: string, ...e: any): Promise<Block>;
    asyncFromJSON(t: any, ...e: any): Promise<Block>;

    toJSON(): any;
    toBw(t: any): Bw;
    toBuffer(...t: any): Buffer;
    toFastBuffer(...t: any): Buffer;
    toHex(...t: any): string;
    toFastHex(...t: any): string;
    toString(...t: any): string;

    asyncToBw(t: any): Promise<Bw>;
    asyncToBuffer(...t: any): Promise<Buffer>;
    asyncToHex(...t: any): Promise<string>;
    asyncToString(...t: any): Promise<string>;
    asyncToJSON(): Promise<any>;

    hash(): Buffer;
    asyncHash(): Promise<Buffer>;
    id(): string;
    asyncId(): Promise<string>;
    verifyMerkleRoot(): -1 | 0 | 1;

    clone(): Block;
    cloneByBuffer(): Block;
    cloneByFastBuffer(): Block;
    cloneByHex(): Block;
    cloneByString(): Block;
    cloneByJSON(): Block;
  }

  class BlockHeader extends Struct {
    static fromJSON(t: any): BlockHeader;
    static fromBr(t: any): BlockHeader;
    static fromObject(t: any): BlockHeader;
    static fromBuffer(t: any, ...e: any): BlockHeader;
    static fromFastBuffer(t: any, ...e: any): BlockHeader;
    static fromHex(t: any, ...e: any): BlockHeader;
    static fromFastHex(t: any, ...e: any): BlockHeader;
    static fromString(t: any, ...e: any): BlockHeader;

    static asyncFromBr(t: any): Promise<BlockHeader>;
    static asyncFromBuffer(t: any, ...e: any): Promise<BlockHeader>;
    static asyncFromHex(t: any, ...e: any): Promise<BlockHeader>;
    static asyncFromString(t: any, ...e: any): Promise<BlockHeader>;
    static asyncFromJSON(t: any, ...e: any): Promise<BlockHeader>;

    constructor(
      versionBytesNum: number,
      prevBlockHashBuf: Buffer,
      merkleRootBuf: Buffer,
      time: any,
      bits: any,
      nonce: any
    );

    fromJSON(t: any): BlockHeader;
    fromBr(t: any): BlockHeader;
    fromObject(t: any): BlockHeader;
    fromBuffer(t: any, ...e: any): BlockHeader;
    fromFastBuffer(t: any, ...e: any): BlockHeader;
    fromHex(t: any, ...e: any): BlockHeader;
    fromFastHex(t: any, ...e: any): BlockHeader;
    fromString(t: any, ...e: any): BlockHeader;

    asyncFromBr(t: any): Promise<BlockHeader>;
    asyncFromBuffer(t: any, ...e: any): Promise<BlockHeader>;
    asyncFromHex(t: any, ...e: any): Promise<BlockHeader>;
    asyncFromString(t: any, ...e: any): Promise<BlockHeader>;
    asyncFromJSON(t: any, ...e: any): Promise<BlockHeader>;

    toJSON(): any;
    toBw(t: any): Bw;
    toBuffer(...t: any): Buffer;
    toFastBuffer(...t: any): Buffer;
    toHex(...t: any): string;
    toFastHex(...t: any): string;
    toString(...t: any): string;

    asyncToBw(t: any): Promise<Bw>;
    asyncToBuffer(...t: any): Promise<Buffer>;
    asyncToHex(...t: any): Promise<string>;
    asyncToString(...t: any): Promise<string>;
    asyncToJSON(): Promise<any>;

    clone(): BlockHeader;
    cloneByBuffer(): BlockHeader;
    cloneByFastBuffer(): BlockHeader;
    cloneByHex(): BlockHeader;
    cloneByString(): BlockHeader;
    cloneByJSON(): BlockHeader;
  }

  class Bn {
    static BN: typeof Bn;
    static wordSize: 26;
    constructor(
      number: number | string | number[] | Uint8Array | Buffer | Bn,
      base?: number | 'hex',
      endian?: any
    );
    constructor(
      number: number | string | number[] | Uint8Array | Buffer | Bn,
      endian?: any
    );
    static red(reductionContext: Bn | any): any;
    static mont(num: Bn): any;
    static isBN(b: any): b is Bn;
    static max(left: Bn, right: Bn): Bn;
    static min(left: Bn, right: Bn): Bn;
    clone(): Bn;
    toString(base?: number | 'hex', length?: number): string;
    toNumber(): number;
    toJSON(): any;
    toArray(endian?: any, length?: number): number[];
    toArrayLike(
      ArrayType: typeof Buffer,
      endian?: any,
      length?: number
    ): Buffer;
    toArrayLike(ArrayType: any[], endian?: any, length?: number): any[];
    toBuffer(endian?: any, length?: number): Buffer;
    bitLength(): number;
    zeroBits(): number;
    byteLength(): number;
    isNeg(): boolean;
    isEven(): boolean;
    isOdd(): boolean;
    isZero(): boolean;
    cmp(b: Bn): -1 | 0 | 1;
    ucmp(b: Bn): -1 | 0 | 1;
    cmpn(b: number): -1 | 0 | 1;
    lt(b: Bn): boolean;
    ltn(b: number): boolean;
    lte(b: Bn): boolean;
    lten(b: number): boolean;
    gt(b: Bn): boolean;
    gtn(b: number): boolean;
    gte(b: Bn): boolean;
    gten(b: number): boolean;
    eq(b: Bn): boolean;
    eqn(b: number): boolean;
    toTwos(width: number): Bn;
    fromTwos(width: number): Bn;
    neg(): Bn;
    ineg(): Bn;
    abs(): Bn;
    iabs(): Bn;
    add(b: Bn): Bn;
    iadd(b: Bn): Bn;
    addn(b: number): Bn;
    iaddn(b: number): Bn;
    sub(b: Bn): Bn;
    isub(b: Bn): Bn;
    subn(b: number): Bn;
    isubn(b: number): Bn;
    mul(b: Bn): Bn;
    imul(b: Bn): Bn;
    muln(b: number): Bn;
    imuln(b: number): Bn;
    sqr(): Bn;
    isqr(): Bn;
    pow(b: Bn): Bn;
    div(b: Bn): Bn;
    divn(b: number): Bn;
    idivn(b: number): Bn;
    mod(b: Bn): Bn;
    umod(b: Bn): Bn;
    modn(b: number): number;
    modrn(b: number): number;
    divRound(b: Bn): Bn;
    or(b: Bn): Bn;
    ior(b: Bn): Bn;
    uor(b: Bn): Bn;
    iuor(b: Bn): Bn;
    and(b: Bn): Bn;
    iand(b: Bn): Bn;
    uand(b: Bn): Bn;
    iuand(b: Bn): Bn;
    andln(b: number): Bn;
    xor(b: Bn): Bn;
    ixor(b: Bn): Bn;
    uxor(b: Bn): Bn;
    iuxor(b: Bn): Bn;
    setn(b: number): Bn;
    shln(b: number): Bn;
    ishln(b: number): Bn;
    ushln(b: number): Bn;
    iushln(b: number): Bn;
    shrn(b: number): Bn;
    ishrn(b: number): Bn;
    ushrn(b: number): Bn;
    iushrn(b: number): Bn;
    testn(b: number): boolean;
    maskn(b: number): Bn;
    imaskn(b: number): Bn;
    bincn(b: number): Bn;
    notn(w: number): Bn;
    inotn(w: number): Bn;
    gcd(b: Bn): Bn;
    egcd(b: Bn): { a: Bn; b: Bn; gcd: Bn };
    invm(b: Bn): Bn;
  }

  class Br {
    buf: Buffer;
    pos: undefined;
    constructor(buf: Buffer);
    static fromObject(obj: { buf: Buffer }): Br;
    eof(): boolean;
    read(): Buffer;
    readReverse(): Buffer;
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

  class Bsm extends Struct {
    static sign(tmessageBuf: Buffer, keyPair: KeyPair): any;
    static asyncSign(tmessageBuf: Buffer, keyPair: KeyPair): Promise<any>;
    static verify(
      messageBuf: Buffer,
      sigstr: string,
      address: Address
    ): boolean;
    static asyncVerify(
      messageBuf: Buffer,
      sigstr: string,
      address: Address
    ): Promise<boolean>;

    static magicBytes: Buffer;

    constructor(
      messageBuf: Buffer,
      keyPair: KeyPair,
      sig: Sig,
      address: Address,
      verified: boolean
    );

    fromObject(t: any): Bsm;
    fromBr(t: Br): Bsm;
    fromBuffer(t: Buffer, ...e: any): Bsm;
    fromFastBuffer(t: Buffer, ...e: any): Bsm;
    fromHex(t: string, ...e: any): Bsm;
    fromFastHex(t: string, ...e: any): Bsm;
    fromString(t: string, ...e: any): Bsm;
    fromJSON(t: any): Bsm;

    asyncFromBr(t: Br): Promise<Bsm>;
    asyncFromBuffer(t: Buffer, ...e: any): Promise<Bsm>;
    asyncFromHex(t: string, ...e: any): Promise<Bsm>;
    asyncFromString(t: string, ...e: any): Promise<Bsm>;
    asyncFromJSON(t: any, ...e: any): Promise<Bsm>;

    sign(): any;
    verify(): boolean;

    toBw(t: any): Bw;
    toBuffer(...t: any): Buffer;
    toFastBuffer(...t: any): Buffer;
    toHex(...t: any): string;
    toFastHex(...t: any): string;
    toString(...t: any): string;
    toJSON(): any;

    asyncToBw(t: any): Promise<Bw>;
    asyncToBuffer(...t: any): Promise<Buffer>;
    asyncToHex(...t: any): Promise<string>;
    asyncToString(...t: any): Promise<string>;
    asyncToJSON(): Promise<any>;

    clone(): any;
    cloneByBuffer(): any;
    cloneByFastBuffer(): any;
    cloneByHex(): any;
    cloneByString(): any;
    cloneByJSON(): any;
  }

  class Bw {
    constructor(data: Buffer);
    bufs: Buffer[];
    static fromObject(obj: { buf: Buffer }): Bw;
    getLength(): number;
    toBuffer(): Buffer;
    write(buf: Buffer): void;
    writeReverse(buf: Buffer): void;
    writeUInt8(val: number): void;
    writeInt8(val: number): void;
    writeUInt16BE(val: number): void;
    writeInt16BE(val: number): void;
    writeUInt16LE(val: number): void;
    writeInt16LE(val: number): void;
    writeUInt32BE(val: number): void;
    writeInt32BE(val: number): void;
    writeUInt32LE(val: number): void;
    writeInt32LE(val: number): void;
    writeUInt64BEBn(val: Bn): void;
    writeUInt64LEBn(val: Bn): void;
    writeVarIntNum(val: number): void;
    writeVarIntBn(val: Bn): void;
  }

  namespace Cbc {
    function buf2BlocksBuf(t: any): any;
    function blockBufs2Buf(t: any, e: any): any;
    function encrypt(t: any, e: any, r: any, i: any): any;
    function decrypt(t: any, e: any, r: any, i: any): any;
    function encryptBlock(t: any, e: any, r: any, i: any): any;
    function decryptBlock(t: any, e: any, r: any, i: any): any;
    function encryptBlocks(t: any, e: any, r: any, i: any): any;
    function decryptBlocks(t: any, e: any, r: any, i: any): any;
    function pkcs7Pad(t: any, e: any): any;
    function pkcs7Unpad(t: any, e: any): any;
    function xorBufs(t: any, e: any): any;
  }

  class Ecdsa extends Struct {
    constructor(
      sig: any,
      keyPair: any,
      hashBuf: Buffer,
      k: any,
      endian: any,
      verified: any
    );

    static fromJSON(value: any, ...e: any[]): Ecdsa;
    static fromBuffer(data: Buffer, ...e: any[]): Ecdsa;
    static fromString(data: string, ...e: any[]): Ecdsa;
    static fromBr(data: Br): Ecdsa;
    static fromHex(data: string, ...e: any[]): Ecdsa;

    static asyncfromJSON(value: any, ...e: any[]): Promise<Ecdsa>;
    static asyncfromBuffer(data: Buffer, ...e: any[]): Promise<Ecdsa>;
    static asyncfromString(data: string, ...e: any[]): Promise<Ecdsa>;
    static asyncfromBr(data: Br): Promise<Ecdsa>;
    static asyncfromHex(data: string, ...e: any[]): Promise<Ecdsa>;

    static sig2PubKey(sig: any, hashBuf: Buffer): PubKey;
    static asyncSig2PubKey(sig: any, hashBuf: Buffer): Promise<any>;
    static sign(sig: any, hashBuf: Buffer, endian: any): Ecdsa;
    static asyncSign(sig: any, hashBuf: Buffer, endian: any): Promise<Ecdsa>;
    static asyncVerify(
      sig: any,
      hashBuf: Buffer,
      endian: any,
      t: any
    ): Promise<Ecdsa>;

    fromJSON(value: any, ...e: any[]): Ecdsa;
    fromBuffer(data: Buffer, ...e: any[]): Ecdsa;
    fromString(data: string, ...e: any[]): Ecdsa;
    fromBr(data: Br): Ecdsa;
    fromHex(data: string, ...e: any[]): Ecdsa;

    asyncfromJSON(value: any, ...e: any[]): Promise<Ecdsa>;
    asyncfromBuffer(data: Buffer, ...e: any[]): Promise<Ecdsa>;
    asyncfromString(data: string, ...e: any[]): Promise<Ecdsa>;
    asyncfromBr(data: Br): Promise<Ecdsa>;
    asyncfromHex(data: string, ...e: any[]): Promise<Ecdsa>;

    toJSON(): any;
    toBuffer(): Buffer;
    toString(): string;

    calcrecovery(): Ecdsa;
    asyncCalcrecovery(): Promise<Ecdsa>;
    randomK(): Ecdsa;
    deterministicK(): Ecdsa;
    sig2PubKey(): PubKey;
    asyncSig2PubKey(): Promise<any>;

    sign(): Ecdsa;
    asyncSign(): Promise<Ecdsa>;
    signRandomK(): Ecdsa;

    verify(t: any): Ecdsa;
    verifyStr(t: any): string;
    asyncVerify(t: any): Promise<Ecdsa>;
  }

  namespace Ecies {
    function ivkEkM(t: any, e: any): any;
    function electrumEncrypt(t: any, e: any, r?: any): any;
    function electrumDecrypt(t: any, e: any, r: any, i?: any): any;
    function bitcoreEncrypt(t: any, e: any, r: any, i: any): any;
    function asyncBitcoreEncrypt(t: any, e: any, r: any, i: any): Promise<any>;
    function bitcoreDecrypt(t: any, e: any): any;
    function asyncBitcoreDecrypt(t: any, e: any): Promise<any>;
  }

  class Interp extends Struct {
    static MAX_SCRIPT_ELEMENT_SIZE: number;
    static LOCKTIME_THRESHOLD: number;
    static SCRIPT_VERIFY_NONE: number;
    static SCRIPT_VERIFY_P2SH: number;
    static SCRIPT_VERIFY_STRICTENC: number;
    static SCRIPT_VERIFY_DERSIG: number;
    static SCRIPT_VERIFY_LOW_S: number;
    static SCRIPT_VERIFY_NULLDUMMY: number;
    static SCRIPT_VERIFY_SIGPUSHONLY: number;
    static SCRIPT_VERIFY_MINIMALDATA: number;
    static SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS: number;
    static SCRIPT_VERIFY_CLEANSTACK: number;
    static SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY: number;
    static SCRIPT_VERIFY_CHECKSEQUENCEVERIFY: number;
    static SCRIPT_ENABLE_SIGHASH_FORKID: number;
    static defaultFlags: number;

    constructor(
      script: any,
      tx: any,
      nIn: any,
      stack?: any[],
      altStack?: any[],
      pc?: number,
      pBeginCodeHash?: number,
      nOpCount?: number,
      ifStack?: any[],
      errStr?: string,
      flags?: any,
      valueBn?: Bn | any
    );

    static fromBr(br: Br): Interp;
    static fromJSON(value: any[]): Interp;
    static fromBuffer(t: Buffer, ...e: any[]): Interp;
    static fromHex(t: string, ...e: any[]): Interp;
    static fromString(t: string, ...e: any[]): Interp;
    static fromObject(t: any): Interp;
    static fromFastBuffer(t: Buffer, ...e: any[]): Interp;
    static fromFastHex(t: string, ...e: any[]): Interp;

    static asyncFromBr(br: Br): Promise<Interp>;
    static asyncFromJSON(value: any[]): Promise<Interp>;
    static asyncFromBuffer(t: Buffer, ...e: any[]): Promise<Interp>;
    static asyncFromHex(t: string, ...e: any[]): Promise<Interp>;
    static asyncFromString(t: string, ...e: any[]): Promise<Interp>;

    stack: any[];
    altStack: any[];
    pc: number;
    pBeginCodeHash: number;
    nOpCount: number;
    ifStack: any[];
    errStr: string;
    flags: number;
    valueBn: { negative: number; words: number[]; length: number; red: any };

    fromBr(br: Br): Interp;
    fromJSON(value: any[]): Interp;
    fromBuffer(t: Buffer, ...e: any[]): Interp;
    fromHex(t: string, ...e: any[]): Interp;
    fromString(t: string, ...e: any[]): Interp;
    fromObject(t: any): Interp;
    fromFastBuffer(t: Buffer, ...e: any[]): Interp;
    fromFastHex(t: string, ...e: any[]): Interp;

    asyncFromBr(br: Br): Promise<Interp>;
    asyncFromJSON(value: any[]): Promise<Interp>;
    asyncFromBuffer(t: Buffer, ...e: any[]): Promise<Interp>;
    asyncFromHex(t: string, ...e: any[]): Promise<Interp>;
    asyncFromString(t: string, ...e: any[]): Promise<Interp>;

    toJSON(): any;
    toJSONNoTx(): any;
    toBw(t: any): Bw;
    toBuffer(...t: any[]): Buffer;
    toFastBuffer(...t: any[]): Buffer;
    toHex(...t: any[]): string;
    toFastHex(...t: any[]): string;
    toString(...t: any[]): string;

    asyncToBw(t: any): Promise<Bw>;
    asyncToBuffer(...t: any[]): Promise<Buffer>;
    asyncToHex(...t: any[]): Promise<string>;
    asyncToString(...t: any[]): Promise<string>;
    asyncToJSON(): Promise<any>;

    initialize(): Interp;
    checkSigEncoding(t: any): boolean;
    checkPubKeyEncoding(t: any): boolean;
    checkLockTime(t: any): boolean;
    checkSequence(t: any): boolean;

    eval(): any;
    step(): any;

    verify(
      script: any,
      script2: any,
      tx: any,
      nIn: any,
      flags: any,
      valueBn: Bn
    ): boolean;

    results(
      script: any,
      script2: any,
      tx: any,
      nIn: any,
      flags: any,
      valueBn: Bn
    ): boolean;

    getDebugObject(): any;
    getDebugString(): string;

    clone(): Interp;
    cloneByBuffer(): Interp;
    cloneByFastBuffer(): Interp;
    cloneByHex(): Interp;
    cloneByString(): Interp;
    cloneByJSON(): Interp;
  }

  namespace KeyPair {
    class Mainnet extends KeyPair {
      constructor(privkey: PrivKey, pubkey: PubKey);
    }

    class Testnet extends KeyPair {
      constructor(privkey: PrivKey, pubkey: PubKey);
    }
  }

  class KeyPair extends Struct {
    PrivKey: PrivKey;

    constructor(privkey: PrivKey, pubkey: PubKey, network?: any);

    fromJSON(t: any): KeyPair;
    fromBr(t: Br): KeyPair;
    fromString(t: string): KeyPair;
    fromPrivKey(t: PrivKey): KeyPair;
    fromRandom(): KeyPair;
    fromObject(t: any): KeyPair;
    fromBuffer(t: Buffer, ...e: any[]): KeyPair;
    fromFastBuffer(t: Buffer, ...e: any[]): KeyPair;
    fromHex(t: string, ...e: any[]): KeyPair;
    fromFastHex(t: string, ...e: any[]): KeyPair;

    asyncFromPrivKey(t: PrivKey): Promise<KeyPair>;
    asyncFromRandom(): Promise<KeyPair>;
    asyncFromBr(t: any): Promise<KeyPair>;
    asyncFromBuffer(t: Buffer, ...e: any[]): Promise<KeyPair>;
    asyncFromHex(t: string, ...e: any[]): Promise<KeyPair>;
    asyncFromString(t: string, ...e: any[]): Promise<KeyPair>;
    asyncFromJSON(t: any, ...e: any[]): Promise<KeyPair>;

    toBw(t: any): Bw;
    toString(): string;
    toPublic(): PubKey | any;
    toBuffer(...t: any[]): Buffer;
    toFastBuffer(...t: any[]): Buffer;
    toHex(...t: any[]): string;
    toFastHex(...t: any[]): string;
    toJSON(): any;

    asyncToBw(t: any): Promise<Bw>;
    asyncToBuffer(...t: any[]): Promise<Buffer>;
    asyncToHex(...t: any[]): Promise<string>;
    asyncToString(...t: any[]): Promise<string>;
    asyncToJSON(): Promise<any>;

    clone(): KeyPair;
    cloneByBuffer(): KeyPair;
    cloneByFastBuffer(): KeyPair;
    cloneByHex(): KeyPair;
    cloneByString(): KeyPair;
    cloneByJSON(): KeyPair;
  }

  class OpCode extends Struct {
    static str: { [x: number]: string };
    static OP_FALSE: number;
    static OP_0: number;
    static OP_PUSHDATA1: number;
    static OP_PUSHDATA2: number;
    static OP_PUSHDATA4: number;
    static OP_1NEGATE: number;
    static OP_RESERVED: number;
    static OP_TRUE: number;
    static OP_1: number;
    static OP_2: number;
    static OP_3: number;
    static OP_4: number;
    static OP_5: number;
    static OP_6: number;
    static OP_7: number;
    static OP_8: number;
    static OP_9: number;
    static OP_10: number;
    static OP_11: number;
    static OP_12: number;
    static OP_13: number;
    static OP_14: number;
    static OP_15: number;
    static OP_16: number;
    static OP_NOP: number;
    static OP_VER: number;
    static OP_IF: number;
    static OP_NOTIF: number;
    static OP_VERIF: number;
    static OP_VERNOTIF: number;
    static OP_ELSE: number;
    static OP_ENDIF: number;
    static OP_VERIFY: number;
    static OP_RETURN: number;
    static OP_TOALTSTACK: number;
    static OP_FROMALTSTACK: number;
    static OP_2DROP: number;
    static OP_2DUP: number;
    static OP_3DUP: number;
    static OP_2OVER: number;
    static OP_2ROT: number;
    static OP_2SWAP: number;
    static OP_IFDUP: number;
    static OP_DEPTH: number;
    static OP_DROP: number;
    static OP_DUP: number;
    static OP_NIP: number;
    static OP_OVER: number;
    static OP_PICK: number;
    static OP_ROLL: number;
    static OP_ROT: number;
    static OP_SWAP: number;
    static OP_TUCK: number;
    static OP_CAT: number;
    static OP_SUBSTR: number;
    static OP_SPLIT: number;
    static OP_LEFT: number;
    static OP_NUM2BIN: number;
    static OP_RIGHT: number;
    static OP_BIN2NUM: number;
    static OP_SIZE: number;
    static OP_INVERT: number;
    static OP_AND: number;
    static OP_OR: number;
    static OP_XOR: number;
    static OP_EQUAL: number;
    static OP_EQUALVERIFY: number;
    static OP_RESERVED1: number;
    static OP_RESERVED2: number;
    static OP_1ADD: number;
    static OP_1SUB: number;
    static OP_2MUL: number;
    static OP_2DIV: number;
    static OP_NEGATE: number;
    static OP_ABS: number;
    static OP_NOT: number;
    static OP_0NOTEQUAL: number;
    static OP_ADD: number;
    static OP_SUB: number;
    static OP_MUL: number;
    static OP_DIV: number;
    static OP_MOD: number;
    static OP_LSHIFT: number;
    static OP_RSHIFT: number;
    static OP_BOOLAND: number;
    static OP_BOOLOR: number;
    static OP_NUMEQUAL: number;
    static OP_NUMEQUALVERIFY: number;
    static OP_NUMNOTEQUAL: number;
    static OP_LESSTHAN: number;
    static OP_GREATERTHAN: number;
    static OP_LESSTHANOREQUAL: number;
    static OP_GREATERTHANOREQUAL: number;
    static OP_MIN: number;
    static OP_MAX: number;
    static OP_WITHIN: number;
    static OP_RIPEMD160: number;
    static OP_SHA1: number;
    static OP_SHA256: number;
    static OP_HASH160: number;
    static OP_HASH256: number;
    static OP_CODESEPARATOR: number;
    static OP_CHECKSIG: number;
    static OP_CHECKSIGVERIFY: number;
    static OP_CHECKMULTISIG: number;
    static OP_CHECKMULTISIGVERIFY: number;
    static OP_NOP1: number;
    static OP_NOP2: number;
    static OP_CHECKLOCKTIMEVERIFY: number;
    static OP_NOP3: number;
    static OP_CHECKSEQUENCEVERIFY: number;
    static OP_NOP4: number;
    static OP_NOP5: number;
    static OP_NOP6: number;
    static OP_NOP7: number;
    static OP_NOP8: number;
    static OP_NOP9: number;
    static OP_NOP10: number;
    static OP_SMALLDATA: number;
    static OP_SMALLINTEGER: number;
    static OP_PUBKEYS: number;
    static OP_PUBKEYHASH: number;
    static OP_PUBKEY: number;
    static OP_INVALIDOPCODE: number;
    static fromNumber(op: number): OpCode;
    static fromString(op: string): OpCode;

    constructor(op: number);
    toNumber(): number;
    toString(): string;
  }

  class Point {
    static fromX(t: any, e: any): Point;
    static fromJSON(t: any): Point;

    curve: any;
    type: any;
    precomputed: any;
    x: any;
    y: any;
    inf: any;

    constructor(t: any, e: any, r: any);

    fromX(t: any, e: any): Point;
    fromJSON(t: any): Point;
    fromString(t: any): Point;

    copyFrom(t: Point | any): Point;

    getX(): any;
    getY(): any;
    _getBeta(): any;

    validate(): any;
    inspect(): any;

    add(t: any): Point;
    mul(t: any): Point;
    mulAdd(t: any, e: any, r: any): Point;
    isInfinity(): boolean;
    dbl(): any;
    jmulAdd(t: any, e: any, r: any): any;
    eq(t: Point): boolean;
    neg(t: Point): boolean;

    toJSON(): any;
    toString(): string;
    toJ(): any;
  }

  class PrivKey extends Struct {
    static fromJSON(value: any): PrivKey;
    static fromRandom(): PrivKey;
    static fromBuffer(value: Buffer): PrivKey;
    static fromBn(value: Bn): PrivKey;
    static fromWif(value: string): PrivKey;
    static fromString(value: string): PrivKey;
    static fromHex(value: string): PrivKey;

    Constants: any;
    constructor(bn: Bn, compressed: any, Constants?: any);

    fromJSON(value: any): PrivKey;
    fromRandom(): PrivKey;
    fromBuffer(value: Buffer): PrivKey;
    fromBn(value: Bn): PrivKey;
    fromWif(value: string): PrivKey;
    fromString(value: string): PrivKey;
    fromHex(value: string): PrivKey;

    validate(): PrivKey;

    toJSON(): any;
    toBuffer(): Buffer;
    toBn(): Bn;
    toWif(): string;
    toString(): string;
  }

  class PubKey extends Struct {
    static fromJSON(value: any): PubKey;
    static fromPrivKey(value: PrivKey): PubKey;
    static fromBuffer(value: Buffer): PubKey;
    static fromFastBuffer(value: any): PubKey;
    static fromDer(value: any): PubKey;
    static fromString(value: string): PubKey;
    static fromX(value: any): PubKey;

    static asyncFromPrivKey(value: PrivKey): Promise<PubKey>;
    static asyncFromBuffer(value: Buffer): Promise<PubKey>;

    constructor(point: any, compressed: any);
    fromJSON(value: any): PubKey;
    fromPrivKey(value: PrivKey): PubKey;
    fromBuffer(value: Buffer): PubKey;
    fromFastBuffer(value: any): PubKey;
    fromDer(value: any): PubKey;
    fromString(value: string): PubKey;
    fromX(value: any): PubKey;

    asyncFromPrivKey(value: PrivKey): Promise<PubKey>;
    asyncFromBuffer(value: Buffer): Promise<PubKey>;

    validate(): PubKey;

    toJSON(): any;
    toBuffer(): Buffer;
    toFastBuffer(): any;
    toDer(): any;
    toString(): string;
  }

  namespace Random {
    function getRandomBuffer(t: any): Buffer;
  }

  class Script extends Struct {
    static fromJSON(value: any): Script;
    static fromBuffer(value: Buffer): Script;
    static fromString(value: string): Script;
    static fromBitcoindString(value: string): Script;
    static fromAsmString(value: string): Script;
    static fromOpReturnData(value: any): Script;
    static fromSafeData(value: any): Script;
    static fromSafeDataArray(value: any[]): Script;
    static fromPubKeyHash(value: string | any): Script;
    static fromPubKeys(num: number, keys: PubKey[] | any[], r: boolean): Script;
    static writeScript(value: Script): Script;
    static writeString(value: string): Script;
    static writeOpCode(value: OpCode): Script;
    static writeBn(value: Bn): Script;
    static writeNumber(value: number): Script;
    static writeBuffer(value: Buffer): Script;

    chunks: {
      buf?: Buffer;
      len?: number;
      opCodeNum: number;
    }[];

    constructor(
      ckunks: {
        buf?: Buffer;
        len?: number;
        opCodeNum: number;
      }[]
    );

    fromJSON(value: any): Script;
    fromBuffer(value: Buffer): Script;
    fromString(value: string): Script;
    fromBitcoindString(value: string): Script;
    fromAsmString(value: string): Script;
    fromOpReturnData(value: any): Script;
    fromSafeData(value: any): Script;
    fromSafeDataArray(value: any[]): Script;
    fromPubKeyHash(value: string | any): Script;
    fromPubKeys(num: number, keys: PubKey[] | any[], r: boolean): Script;
    toJSON(): any;
    toBuffer(): Buffer;
    toString(): string;
    toBitcoindString(): string;
    toAsmString(): string;
    getData(): Buffer[];
    removeCodeseparators(): Script;
    isPushOnly(): boolean;
    isNonSpendable(): boolean;
    isOpReturn(): boolean;
    isSafeDataOut(): boolean;
    isPubKeyHashOut(): boolean;
    isPubKeyHashIn(): boolean;
    isScriptHashOut(): boolean;
    isScriptHashIn(): boolean;
    isMultiSigOut(): boolean;
    isMultiSigIn(): boolean;
    findAndDelete(t: any): Script;
    writeScript(value: Script): Script;
    writeString(value: string): Script;
    writeOpCode(value: OpCode): Script;
    setChunkOpCode(index: number, opcode: number): Script;
    writeBn(value: Bn): Script;
    writeNumber(value: number): Script;
    setChunkBn(index: number, value: Bn): Script;
    writeBuffer(value: Buffer): Script;
    setChunkBuffer(index: number, value: Buffer): Script;
    checkMinimalPush(index: number): any;
  }

  class Sig extends Struct {
    static SIGHASH_ALL: number;
    static SIGHASH_NONE: number;
    static SIGHASH_SINGLE: number;
    static SIGHASH_FORKID: number;
    static SIGHASH_ANYONECANPAY: number;
    static fromBuffer(t: Buffer): Sig;
    static fromCompact(t: any): Sig;
    static fromRS(t: any): Sig;
    static fromDer(t: any, e: any): Sig;
    static fromTxFormat(t: any): Sig;
    static fromString(t: string): Sig;

    constructor(r: any, s: any, nHashType: any, recovery: any, compressed: any);

    fromBuffer(t: Buffer): Sig;
    fromCompact(t: any): Sig;
    fromRS(t: any): Sig;
    fromDer(t: any, e: any): Sig;
    fromTxFormat(t: any): Sig;
    fromString(t: string): Sig;

    hasLowS(): boolean;
    hasDefinedHashType(): boolean;
    toBuffer(): Buffer;
    toCompact(t: any, e: any): any;
    toRS(): any;
    toDer(): any;
    toTxFormat(): any;
    toString(): string;
  }

  class SigOperations extends Struct {
    static fromBr(value: Br | any): SigOperations;
    static fromJSON(value: any): SigOperations;
    static fromObject(value: SigOperations | any): SigOperations;
    static fromString(value: string): SigOperations;
    static fromBuffer(value: Buffer): SigOperations;
    static fromFastBuffer(value: Buffer): SigOperations;
    static fromHex(value: string): SigOperations;
    static fromFastHex(value: any): SigOperations;

    constructor(t?: Map<any, any>);
    map: Map<any, any>;

    fromBr(value: Br | any): SigOperations;
    fromJSON(value: any): SigOperations;
    fromObject(value: SigOperations | any): SigOperations;
    fromString(value: string): SigOperations;
    fromBuffer(value: Buffer): SigOperations;
    fromFastBuffer(value: Buffer): SigOperations;
    fromHex(value: string): SigOperations;
    fromFastHex(value: any): SigOperations;

    setOne(t: any, e: any, r: any, i?: any, s?: any, n?: any): any;
    setMany(t: any, e: any, r: any): any;
    addOne(t: any, e: any, r: any, i?: any, s?: any, n?: any): any;
    get(t: any, e: any): any;

    toJSON(): any;
  }

  class Struct {
    static fromObject(t: any): any;
    static fromBr(t: Br): any;
    static fromBuffer(t: Buffer, ...e: any[]): any;
    static fromFastBuffer(t: Buffer, ...e: any[]): any;
    static fromHex(t: string, ...e: any[]): any;
    static fromFastHex(t: string, ...e: any[]): any;
    static fromString(t: string, ...e: any[]): any;
    static fromJSON(value: any): any;

    static asyncFromBr(t: any): Promise<any>;
    static asyncFromBuffer(t: any, ...e: any[]): Promise<any>;
    static asyncFromHex(t: string, ...e: any[]): Promise<any>;
    static asyncFromString(t: string, ...e: any[]): Promise<any>;
    static asyncfromJSON(value: any, ...e: any[]): Promise<any>;

    fromObject(t: any): any;
    fromBr(t: Br): any;
    fromBuffer(t: Buffer, ...e: any[]): any;
    fromFastBuffer(t: Buffer, ...e: any[]): any;
    fromHex(t: string, ...e: any[]): any;
    fromFastHex(t: string, ...e: any[]): any;
    fromString(t: string, ...e: any[]): any;
    fromJSON(value: any): any;

    asyncFromBr(t: any): Promise<any>;
    asyncFromBuffer(t: any, ...e: any[]): Promise<any>;
    asyncFromHex(t: string, ...e: any[]): Promise<any>;
    asyncFromString(t: string, ...e: any[]): Promise<any>;
    asyncfromJSON(value: any, ...e: any[]): Promise<any>;

    constructor(t: any);

    expect(len: number, startbuf: Buffer): any;

    clone(): any;
    cloneByBuffer(): any;
    cloneByFastBuffer(): any;
    cloneByHex(): any;
    cloneByString(): any;
    cloneByJSON(): any;

    toBw(t: any): Bw;
    toBuffer(...t: any[]): Buffer;
    toFastBuffer(...t: any[]): any;
    toHex(...t: any[]): string;
    toFastHex(...t: any[]): string;
    toString(...t: any[]): string;
    toJSON(): any;

    asyncToBw(t: any): Promise<Bw>;
    asyncToBuffer(...t: any[]): Promise<Buffer>;
    asyncToHex(...t: any[]): Promise<string>;
    asyncToString(...t: any[]): Promise<string>;
    asyncToJSON(): Promise<any>;
  }

  class Tx extends Struct {
    static MAX_MONEY: number;
    static SCRIPT_ENABLE_SIGHASH_FORKID: number;

    versionBytesNum: any;
    txInsVi: any;
    txIns: any;
    txOutsVi: any;
    txOuts: any;
    nLockTime: any;

    constructor(
      versionBytesNum: number,
      txInsVi: any | number,
      txIns: TxIn[],
      txOutsVi: any | number,
      txOuts: TxOut[],
      nLockTime: number
    );

    static fromJSON(t: any): Tx;
    static fromBr(t: Br): Tx;
    static fromObject(t: any): Tx;
    static fromBuffer(t: Buffer, ...e: any): Tx;
    static fromFastBuffer(t: Buffer, ...e: any): Tx;
    static fromHex(t: string, ...e: any): Tx;
    static fromFastHex(t: string, ...e: any): Tx;
    static fromString(t: string, ...e: any): Tx;

    static asyncFromBr(t: Br): Promise<Tx>;
    static asyncFromBuffer(t: Buffer, ...e: any): Promise<Tx>;
    static asyncFromHex(t: string, ...e: any): Promise<Tx>;
    static asyncFromString(t: string, ...e: any): Promise<Tx>;
    static asyncFromJSON(t: any, ...e: any): Promise<Tx>;

    fromJSON(t: any): Tx;
    fromBr(t: Br): Tx;
    fromObject(t: any): Tx;
    fromBuffer(t: Buffer, ...e: any): Tx;
    fromFastBuffer(t: Buffer, ...e: any): Tx;
    fromHex(t: string, ...e: any): Tx;
    fromFastHex(t: string, ...e: any): Tx;
    fromString(t: string, ...e: any): Tx;

    asyncFromBr(t: Br): Promise<Tx>;
    asyncFromBuffer(t: Buffer, ...e: any): Promise<Tx>;
    asyncFromHex(t: string, ...e: any): Promise<Tx>;
    asyncFromString(t: string, ...e: any): Promise<Tx>;
    asyncFromJSON(t: any, ...e: any): Promise<Tx>;

    toJSON(): any;
    toBw(t: any): Bw;
    toBuffer(...t: any): Buffer;
    toFastBuffer(...t: any): Buffer;
    toHex(...t: any): string;
    toFastHex(...t: any): string;
    toString(...t: any): string;

    asyncToBw(t: any): Promise<Bw>;
    asyncToBuffer(...t: any): Promise<Buffer>;
    asyncToHex(...t: any): Promise<string>;
    asyncToString(...t: any): Promise<string>;
    asyncToJSON(): Promise<any>;

    clone(): Tx;
    cloneByBuffer(): Tx;
    cloneByFastBuffer(): Tx;
    cloneByHex(): Tx;
    cloneByString(): Tx;
    cloneByJSON(): Tx;

    hashPrevouts(): Buffer;
    hashSequence(): Buffer;
    hashOutputs(): Buffer;

    sighash(
      nHashType: any,
      inputIndex: number,
      scriptCodeOfInput: any,
      valueBn: Bn,
      flags?: any,
      hashCacheStruct?: any
    ): Br;
    asyncSighash(
      nHashType: any,
      inputIndex: number,
      scriptCodeOfInput: any,
      valueBn: Bn,
      flags?: any,
      hashCacheStruct?: any
    ): Promise<Br>;
    sighashPreimage(
      nHashType: any,
      inputIndex: number,
      scriptCodeOfInput: any,
      valueBn: Bn,
      flags?: any,
      hashCacheStruct?: any
    ): Buffer;

    asyncSighashPreimage(
      nHashType: any,
      inputIndex: number,
      scriptCodeOfInput: any,
      valueBn: Bn,
      flags?: any,
      hashCacheStruct?: any
    ): Promise<Buffer>;
    sign(
      keyPair: any,
      nHashType?: any,
      inputIndex?: any,
      scriptCodeOfInput?: any,
      valueBn?: Bn,
      flags?: any,
      hashCacheStruct?: any
    ): Ecdsa;
    asyncSign(
      keyPair: any,
      nHashType?: any,
      inputIndex?: any,
      scriptCodeOfInput?: any,
      valueBn?: Bn,
      flags?: any,
      hashCacheStruct?: any
    ): Promise<Ecdsa>;
    verify(
      sig: any,
      pubKey: PubKey,
      inputIndex: any,
      subScript: any,
      enforceLowS?: boolean,
      valueBn?: Bn,
      flags?: any,
      hashCacheStruct?: any
    ): Ecdsa;
    asyncVerify(
      sig: any,
      pubKey: PubKey,
      inputIndex: any,
      subScript: any,
      enforceLowS?: boolean,
      valueBn?: Bn,
      flags?: any,
      hashCacheStruct?: any
    ): Promise<Ecdsa>;

    hash(): Buffer;
    asyncHash(): Promise<Buffer>;
    id(): string;
    asyncId(): Promise<string>;
    addTxIn(
      txHashBuf: Buffer,
      txOutNum: number,
      script: Script,
      nSequence: number
    ): any;
    addTxOut(valueBn: Bn, Script: any): any;
    isCoinbase(): boolean;
    sort(): Tx;

    expect(len: number, startbuf: Buffer): any;
  }

  class TxBuilder extends Struct {
    tx?: Tx;
    txIns?: TxIn[];
    txOuts?: TxOut[];
    uTxOutMap?: any;
    sigOperations?: any;
    feePerKbNum?: number;
    nLockTime?: any;
    versionBytesNum?: number;
    sigsPerInput?: any;
    dust?: any;
    dustChangeToFees?: boolean | any;
    hashCache?: any;

    constructor(
      tx?: Tx,
      txIns?: TxIn[],
      txOuts?: TxOut[],
      uTxOutMap?: any,
      sigOperations?: any,
      changeScript?: any,
      changeAmountBn?: Bn,
      feeAmountBn?: Bn,
      feePerKbNum?: number,
      nLockTime?: any,
      versionBytesNum?: number,
      sigsPerInput?: any,
      dust?: any,
      dustChangeToFees?: boolean | any,
      hashCache?: any
    );

    static fromJSON(t: any): TxBuilder;
    static fromObject(t: any): TxBuilder;
    static fromBr(t: Br): TxBuilder;
    static fromBuffer(t: Buffer, ...e: any): TxBuilder;
    static fromFastBuffer(t: Buffer, ...e: any): TxBuilder;
    static fromHex(t: string, ...e: any): TxBuilder;
    static fromFastHex(t: string, ...e: any): TxBuilder;
    static fromString(t: string, ...e: any): TxBuilder;

    static asyncFromBr(t: Br): Promise<TxBuilder>;
    static asyncFromBuffer(t: Buffer, ...e: any): Promise<TxBuilder>;
    static asyncFromHex(t: string, ...e: any): Promise<TxBuilder>;
    static asyncFromString(t: string, ...e: any): Promise<TxBuilder>;
    static asyncFromJSON(t: any, ...e: any): Promise<TxBuilder>;

    fromJSON(t: any): TxBuilder;
    fromObject(t: any): TxBuilder;
    fromBr(t: Br): TxBuilder;
    fromBuffer(t: Buffer, ...e: any): TxBuilder;
    fromFastBuffer(t: Buffer, ...e: any): TxBuilder;
    fromHex(t: string, ...e: any): TxBuilder;
    fromFastHex(t: string, ...e: any): TxBuilder;
    fromString(t: string, ...e: any): TxBuilder;

    asyncFromBr(t: Br): Promise<TxBuilder>;
    asyncFromBuffer(t: Buffer, ...e: any): Promise<TxBuilder>;
    asyncFromHex(t: string, ...e: any): Promise<TxBuilder>;
    asyncFromString(t: string, ...e: any): Promise<TxBuilder>;
    asyncFromJSON(t: any, ...e: any): Promise<TxBuilder>;

    toJSON(): any;
    toBw(t: any): Bw;
    toBuffer(...t: any): Buffer;
    toFastBuffer(...t: any): Buffer;
    toHex(...t: any): string;
    toFastHex(...t: any): string;
    toString(...t: any): string;

    asyncToBw(t: any): Promise<Bw>;
    asyncToBuffer(...t: any): Promise<Buffer>;
    asyncToHex(...t: any): Promise<string>;
    asyncToString(...t: any): Promise<string>;
    asyncToJSON(): Promise<any>;

    setFeePerKbNum(feePerKbNum: number): TxBuilder;
    setChangeAddress(addr: Address): TxBuilder;
    setChangeScript(changeScriptt: any): TxBuilder;
    setNLocktime(nLockTime: any): TxBuilder;
    setVersion(versionBytesNum: any): TxBuilder;
    setDust(dust?: any): TxBuilder;
    sendDustChangeToFees(dustChangeToFees?: boolean): TxBuilder;

    inputFromScript(
      txHashBuf: Buffer,
      txOutNum: number,
      txOut: TxOut,
      script: Script,
      nSequence: number
    ): TxBuilder;

    inputFromPubKeyHash(
      txHashBuf: Buffer,
      txOutNum: number,
      txOut: TxOut,
      pubKey: PubKey,
      nSequence: number,
      nHashType: any
    ): TxBuilder;

    outputToAddress(valueBn: Bn, addr: Address): TxBuilder;
    outputToScript(valueBn: Bn, script: Script): TxBuilder;

    buildOutputs(): Bn;
    buildInputs(outAmountBn: Bn, extraInputsNum?: number): Bn;
    estimateSize(): number;
    estimateFee(extraFeeAmount?: Bn): Bn;
    build(opts?: { useAllInputs: boolean }): TxBuilder;
    sort(): TxBuilder;

    importPartiallySignedTx(
      tx: Tx,
      uTxOutMap?: any,
      sigOperations?: any
    ): TxBuilder;

    addSigOperation(
      txHashBuf: Buffer,
      txOutNum: number,
      nScriptChunk: any,
      type: any,
      addressStr: string,
      nHashType: any
    ): TxBuilder;

    fillSig(nIn: any, nScriptChunk: any, sig: Sig): TxBuilder;

    getSig(
      keyPair: KeyPair,
      nHashType?: any,
      nIn?: number,
      subScript?: any,
      flags?: any
    ): Ecdsa;

    asyncGetSig(
      keyPair: KeyPair,
      nHashType?: any,
      nIn?: number,
      subScript?: any,
      flags?: any
    ): Promise<Ecdsa>;

    signTxIn(
      nIn: any,
      keyPair: KeyPair,
      txOut: TxOut,
      nScriptChunk: any,
      nHashType?: any,
      flags?: any
    ): TxBuilder;

    asyncSignTxIn(
      nIn: any,
      keyPair: KeyPair,
      txOut: TxOut,
      nScriptChunk: any,
      nHashType?: any,
      flags?: any
    ): Promise<TxBuilder>;
    signWithKeyPairs(t: any): any;

    expect(len: number, startbuf: Buffer): any;

    clone(): TxBuilder;
    cloneByBuffer(): TxBuilder;
    cloneByFastBuffer(): TxBuilder;
    cloneByHex(): TxBuilder;
    cloneByString(): TxBuilder;
    cloneByJSON(): TxBuilder;
  }

  class TxIn extends Struct {
    static LOCKTIME_VERIFY_SEQUENCE: number;
    static SEQUENCE_FINAL: number;
    static SEQUENCE_LOCKTIME_DISABLE_FLAG: number;
    static SEQUENCE_LOCKTIME_TYPE_FLAG: number;
    static SEQUENCE_LOCKTIME_MASK: number;
    static SEQUENCE_LOCKTIME_GRANULARITY: number;

    nSequence: number;

    constructor(
      txHashBuf: Buffer,
      txOutNum: number,
      scriptVi: any,
      script: Script,
      nSequence?: number
    );

    static fromProperties(
      txHashBuf: Buffer,
      txOutNum: number,
      script: Script,
      nSequence: number
    ): TxIn;
    static fromJSON(t: any): TxIn;
    static fromBr(t: Br): TxIn;
    static fromPubKeyHashTxOut(
      txHashBuf: Buffer,
      txOutNum: number,
      txOut: TxOut,
      pubKey: PubKey
    ): TxIn;
    static fromObject(t: any): TxIn;
    static fromBuffer(t: Buffer, ...e: any): TxIn;
    static fromFastBuffer(t: Buffer, ...e: any): TxIn;
    static fromHex(t: string, ...e: any): TxIn;
    static fromFastHex(t: string, ...e: any): TxIn;
    static fromString(t: string, ...e: any): TxIn;

    static asyncFromBr(t: Buffer): Promise<TxIn>;
    static asyncFromBuffer(t: Buffer, ...e: any): Promise<TxIn>;
    static asyncFromHex(t: string, ...e: any): Promise<TxIn>;
    static asyncFromString(t: string, ...e: any): Promise<TxIn>;
    static asyncFromJSON(t: any, ...e: any): Promise<TxIn>;

    fromProperties(
      txHashBuf: Buffer,
      txOutNum: number,
      script: Script,
      nSequence: number
    ): TxIn;
    fromJSON(t: any): TxIn;
    fromBr(t: Br): TxIn;
    fromPubKeyHashTxOut(
      txHashBuf: Buffer,
      txOutNum: number,
      txOut: TxOut,
      pubKey: PubKey
    ): TxIn;
    fromObject(t: any): TxIn;
    fromBuffer(t: Buffer, ...e: any): TxIn;
    fromFastBuffer(t: Buffer, ...e: any): TxIn;
    fromHex(t: string, ...e: any): TxIn;
    fromFastHex(t: string, ...e: any): TxIn;
    fromString(t: string, ...e: any): TxIn;

    asyncFromBr(t: Buffer): Promise<TxIn>;
    asyncFromBuffer(t: Buffer, ...e: any): Promise<TxIn>;
    asyncFromHex(t: string, ...e: any): Promise<TxIn>;
    asyncFromString(t: string, ...e: any): Promise<TxIn>;
    asyncFromJSON(t: any, ...e: any): Promise<TxIn>;

    toJSON(): any;
    toBw(t: any): Bw;
    toBuffer(...t: any): Buffer;
    toFastBuffer(...t: any): Buffer;
    toHex(...t: any): string;
    toFastHex(...t: any): string;
    toString(...t: any): string;

    asyncToBw(t: any): Promise<Bw>;
    asyncToBuffer(...t: any): Promise<Buffer>;
    asyncToHex(...t: any): Promise<string>;
    asyncToString(...t: any): Promise<string>;
    asyncToJSON(): Promise<any>;

    setScript(t: Script): TxIn;
    hasNullInput(): boolean;
    setNullInput(): void;

    clone(): TxIn;
    cloneByBuffer(): TxIn;
    cloneByFastBuffer(): TxIn;
    cloneByHex(): TxIn;
    cloneByString(): TxIn;
    cloneByJSON(): TxIn;
  }

  class TxOut extends Struct {
    constructor(valueBn: Bn, scriptVi: any, script: Script);

    fromProperties(valueBn: Bn, script: Script): TxOut;
    fromJSON(t: any): TxOut;
    fromBr(t: Br): TxOut;
    fromObject(t: any): TxOut;
    fromBuffer(t: Buffer, ...e: any): TxOut;
    fromFastBuffer(t: Buffer, ...e: any): TxOut;
    fromHex(t: string, ...e: any): TxOut;
    fromFastHex(t: string, ...e: any): TxOut;
    fromString(t: string, ...e: any): TxOut;

    asyncFromBr(t: Br): Promise<TxOut>;
    asyncFromBuffer(t: Buffer, ...e: any): Promise<TxOut>;
    asyncFromHex(t: string, ...e: any): Promise<TxOut>;
    asyncFromString(t: string, ...e: any): Promise<TxOut>;
    asyncFromJSON(t: any, ...e: any): Promise<TxOut>;

    toJSON(): any;
    toBw(t: any): Bw;
    toBuffer(...t: any): Buffer;
    toFastBuffer(...t: any): Buffer;
    toHex(...t: any): string;
    toFastHex(...t: any): string;
    toString(...t: any): string;

    asyncToBw(t: any): Promise<Bw>;
    asyncToBuffer(...t: any): Promise<Buffer>;
    asyncToHex(...t: any): Promise<string>;
    asyncToString(...t: any): Promise<string>;
    asyncToJSON(): Promise<any>;

    setScript(script: Script): TxOut;

    clone(): TxOut;
    cloneByBuffer(): TxOut;
    cloneByFastBuffer(): TxOut;
    cloneByHex(): TxOut;
    cloneByString(): TxOut;
    cloneByJSON(): TxOut;
  }

  class TxOutMap extends Struct {
    map: Map<string, TxOut>;
    constructor(map?: Map<string, TxOut>);

    fromJSON(t: any): TxOutMap;
    fromObject(t: any): TxOutMap;
    fromBr(t: Br): TxOutMap;
    fromBuffer(t: Buffer, ...e: any): TxOutMap;
    fromFastBuffer(t: Buffer, ...e: any): TxOutMap;
    fromHex(t: string, ...e: any): TxOutMap;
    fromFastHex(t: string, ...e: any): TxOutMap;
    fromString(t: string, ...e: any): TxOutMap;

    asyncFromBr(t: Br): Promise<TxOutMap>;
    asyncFromBuffer(t: Buffer, ...e: any): Promise<TxOutMap>;
    asyncFromHex(t: string, ...e: any): Promise<TxOutMap>;
    asyncFromString(t: string, ...e: any): Promise<TxOutMap>;
    asyncFromJSON(t: any, ...e: any): Promise<TxOutMap>;

    toJSON(): any;
    toBw(t: Bw): any;
    toBuffer(...t: any): Buffer;
    toFastBuffer(...t: any): Buffer;
    toHex(...t: any): string;
    toFastHex(...t: any): string;
    toString(...t: any): string;

    asyncToBw(t: any): Promise<Bw>;
    asyncToBuffer(...t: any): Promise<Buffer>;
    asyncToHex(...t: any): Promise<string>;
    asyncToString(...t: any): Promise<string>;
    asyncToJSON(): Promise<any>;
    set(txHashBuf: Buffer, txOutNum: number, txOut: TxOut): TxOutMap;
    get(txHashBuf: Buffer, txOutNum: number): TxOut;
    setTx(t: Tx): TxOutMap;

    clone(): TxOutMap;
    cloneByBuffer(): TxOutMap;
    cloneByFastBuffer(): TxOutMap;
    cloneByHex(): TxOutMap;
    cloneByString(): TxOutMap;
    cloneByJSON(): TxOutMap;
  }

  class TxVerifier extends Struct {
    static fromObject(t: any): TxVerifier;
    static fromBr(t: Br): TxVerifier;
    static fromBuffer(t: Buffer, ...e: any): TxVerifier;
    static fromFastBuffer(t: Buffer, ...e: any): TxVerifier;
    static fromHex(t: string, ...e: any): TxVerifier;
    static fromFastHex(t: string, ...e: any): TxVerifier;
    static fromString(t: string, ...e: any): TxVerifier;
    static fromJSON(t: any): TxVerifier;

    static asyncFromBr(t: Br): Promise<TxVerifier>;
    static asyncFromBuffer(t: Buffer, ...e: any): Promise<TxVerifier>;
    static asyncFromHex(t: string, ...e: any): Promise<TxVerifier>;
    static asyncFromString(t: string, ...e: any): Promise<TxVerifier>;
    static asyncFromJSON(t: any, ...e: any): Promise<TxVerifier>;

    constructor(t: any, e: any, r: any, i: any);

    fromObject(t: any): TxVerifier;
    fromBr(t: Br): TxVerifier;
    fromBuffer(t: Buffer, ...e: any): TxVerifier;
    fromFastBuffer(t: Buffer, ...e: any): TxVerifier;
    fromHex(t: string, ...e: any): TxVerifier;
    fromFastHex(t: string, ...e: any): TxVerifier;
    fromString(t: string, ...e: any): TxVerifier;
    fromJSON(t: any): TxVerifier;

    asyncFromBr(t: Br): Promise<TxVerifier>;
    asyncFromBuffer(t: Buffer, ...e: any): Promise<TxVerifier>;
    asyncFromHex(t: string, ...e: any): Promise<TxVerifier>;
    asyncFromString(t: string, ...e: any): Promise<TxVerifier>;
    asyncFromJSON(t: any, ...e: any): Promise<TxVerifier>;

    toBw(t: any): Bw;
    toBuffer(...t: any): Buffer;
    toFastBuffer(...t: any): Buffer;
    toHex(...t: any): string;
    toFastHex(...t: any): string;
    toString(...t: any): string;
    toJSON(): any;

    asyncToBw(t: any): Promise<Bw>;
    asyncToBuffer(...t: any): Promise<Buffer>;
    asyncToHex(...t: any): Promise<string>;
    asyncToString(...t: any): Promise<string>;
    asyncToJSON(): Promise<any>;

    verify(flags?: any): boolean;
    checkStr(): string;
    verifyStr(flags: any): string;
    verifyNIn(nIn: number, flags: any): boolean;

    asyncVerify(flags: any): Promise<boolean>;
    asyncVerifyStr(flags: any): Promise<string>;
    asyncVerifyNIn(nIn: number, flags: any): Promise<boolean>;

    getDebugObject(): any;
    getDebugString(): string;

    clone(): TxVerifier;
    cloneByBuffer(): TxVerifier;
    cloneByFastBuffer(): TxVerifier;
    cloneByHex(): TxVerifier;
    cloneByString(): TxVerifier;
    cloneByJSON(): TxVerifier;
  }

  class VarInt extends Struct {
    static fromBn(t: Bn): VarInt;
    static fromNumber(t: number): VarInt;
    static fromObject(t: any): VarInt;
    static fromBr(t: Br): VarInt;
    static fromBuffer(t: Buffer, ...e: any): VarInt;
    static fromFastBuffer(t: Buffer, ...e: any): VarInt;
    static fromHex(t: string, ...e: any): VarInt;
    static fromFastHex(t: string, ...e: any): VarInt;
    static fromString(t: string, ...e: any): VarInt;
    static fromJSON(t: any): VarInt;

    static asyncFromBr(t: Br): Promise<VarInt>;
    static asyncFromBuffer(t: Buffer, ...e: any): Promise<VarInt>;
    static asyncFromHex(t: string, ...e: any): Promise<VarInt>;
    static asyncFromString(t: string, ...e: any): Promise<VarInt>;
    static asyncFromJSON(t: any, ...e: any): Promise<VarInt>;

    constructor(buf: Buffer);

    fromBn(t: Bn): VarInt;
    fromNumber(t: number): VarInt;
    fromObject(t: any): VarInt;
    fromBr(t: Br): VarInt;
    fromBuffer(t: Buffer, ...e: any): VarInt;
    fromFastBuffer(t: Buffer, ...e: any): VarInt;
    fromHex(t: string, ...e: any): VarInt;
    fromFastHex(t: string, ...e: any): VarInt;
    fromString(t: string, ...e: any): VarInt;
    fromJSON(t: any): VarInt;

    asyncFromBr(t: Br): Promise<VarInt>;
    asyncFromBuffer(t: Buffer, ...e: any): Promise<VarInt>;
    asyncFromHex(t: string, ...e: any): Promise<VarInt>;
    asyncFromString(t: string, ...e: any): Promise<VarInt>;
    asyncFromJSON(t: any, ...e: any): Promise<VarInt>;

    toBn(): Bn;
    toNumber(): number;
    toBw(t: any): Bw;
    toBuffer(...t: any): Buffer;
    toFastBuffer(...t: any): Buffer;
    toHex(...t: any): string;
    toFastHex(...t: any): string;
    toString(...t: any): string;
    toJSON(): any;

    asyncToBw(t: any): Promise<Bw>;
    asyncToBuffer(...t: any): Promise<Buffer>;
    asyncToHex(...t: any): Promise<string>;
    asyncToString(...t: any): Promise<string>;
    asyncToJSON(): Promise<any>;

    clone(): VarInt;
    cloneByBuffer(): VarInt;
    cloneByFastBuffer(): VarInt;
    cloneByHex(): VarInt;
    cloneByString(): VarInt;
    cloneByJSON(): VarInt;
  }

  class Workers {
    static asyncObjectMethod(
      obj: any,
      methodname: string,
      args: any[],
      id?: number
    ): Promise<WorkersResult>;

    static asyncClassMethod(
      classObj: any,
      methodname: string,
      args: any[],
      id?: number
    ): Promise<WorkersResult>;

    nativeWorkers: any[];
    lastid: number;
    incompconsteRes: any[];
    promisemap: Map<any, any>;

    constructor(
      nativeWorkers?: any[],
      lastid?: number,
      incompconsteRes?: any[],
      promisemap?: Map<any, any>
    );

    asyncObjectMethod(
      obj: any,
      methodname: string,
      args: any[],
      id?: number
    ): Promise<WorkersResult>;

    asyncClassMethod(
      classObj: any,
      methodname: string,
      args: any[],
      id?: number
    ): Promise<WorkersResult>;
  }

  class WorkersResult extends Struct {
    constructor(resbuf: Buffer, isError: boolean, id: number);

    fromResult(result: any, id: number): WorkersResult;
    fromError(error: any, id: number): WorkersResult;
    fromBr(t: Br): WorkersResult;
    fromObject(t: any): WorkersResult;
    fromBuffer(t: Buffer, ...e: any): WorkersResult;
    fromFastBuffer(t: Buffer, ...e: any): WorkersResult;
    fromHex(t: string, ...e: any): WorkersResult;
    fromFastHex(t: string, ...e: any): WorkersResult;
    fromString(t: string, ...e: any): WorkersResult;
    fromJSON(t: any): WorkersResult;

    asyncFromBr(t: Br): Promise<WorkersResult>;
    asyncFromBuffer(t: Buffer, ...e: any): Promise<WorkersResult>;
    asyncFromHex(t: string, ...e: any): Promise<WorkersResult>;
    asyncFromString(t: string, ...e: any): Promise<WorkersResult>;
    asyncFromJSON(t: any, ...e: any): Promise<WorkersResult>;

    toBw(t: any): Bw;
    toBuffer(...t: any): Buffer;
    toFastBuffer(...t: any): Buffer;
    toHex(...t: any): string;
    toFastHex(...t: any): string;
    toString(...t: any): string;
    toJSON(): any;

    asyncToBw(t: any): Promise<Bw>;
    asyncToBuffer(...t: any): Promise<Buffer>;
    asyncToHex(...t: any): Promise<string>;
    asyncToString(...t: any): Promise<string>;
    asyncToJSON(): Promise<any>;

    clone(): WorkersResult;
    cloneByBuffer(): WorkersResult;
    cloneByFastBuffer(): WorkersResult;
    cloneByHex(): WorkersResult;
    cloneByString(): WorkersResult;
    cloneByJSON(): WorkersResult;
  }
}
