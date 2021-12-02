/// <reference types="node" />
/**
 * Peer-to-Peer Network Message
 * ============================
 *
 * A message on the bitcoin p2p network.
 */
import { Br } from './br';
import { Bw } from './bw';
import { NetworkConstants } from './constants';
import { Struct } from './struct';
export declare class Msg extends Struct {
    constants: NetworkConstants;
    magicNum: number;
    cmdbuf: Buffer;
    datasize: number;
    checksumbuf: Buffer;
    dataBuf: Buffer;
    constructor(magicNum?: number, cmdbuf?: Buffer, datasize?: number, checksumbuf?: Buffer, dataBuf?: Buffer, constants?: NetworkConstants);
    setCmd(cmdname: string): this;
    getCmd(): string;
    static checksum(dataBuf: Buffer): Buffer;
    static asyncChecksum(dataBuf: Buffer): Promise<Buffer>;
    setData(dataBuf: Buffer): this;
    asyncSetData(dataBuf: Buffer): Promise<this>;
    /**
     * An iterator to produce a message from a series of buffers. Set opts.strict
     * to throw an error if an invalid message occurs in stream.
     */
    genFromBuffers(opts?: {
        strict?: boolean;
    }): Generator<number, any, Buffer>;
    fromBr(br: Br): this;
    toBw(bw?: Bw): Bw;
    fromJSON(json: {
        magicNum: number;
        cmdbuf: string;
        datasize: number;
        checksumbuf: string;
        dataBuf: string;
    }): this;
    toJSON(): {
        magicNum: number;
        cmdbuf: string;
        datasize: number;
        checksumbuf: string;
        dataBuf: string;
    };
    isValid(): boolean;
    asyncIsValid(): Promise<boolean>;
    validate(): this;
    asyncValidate(): Promise<void>;
    static Mainnet: typeof Msg;
    static Testnet: typeof Msg;
    static Regtest: typeof Msg;
    static STN: typeof Msg;
}
//# sourceMappingURL=msg.d.ts.map