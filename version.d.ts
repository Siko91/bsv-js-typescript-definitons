/// <reference types="node" />
/**
 * Version
 * =======
 *
 * This data structure is used to specify details about what version of the
 * p2p network is supported by this or other nodes.
 */
import { Bn } from './bn';
import { Br } from './br';
import { Bw } from './bw';
import { Struct } from './struct';
import { VarInt } from './var-int';
export declare class Version extends Struct {
    versionBytesNum: number;
    servicesBuf: Buffer;
    timeBn: Bn;
    addrRecvServicesBuf: Buffer;
    addrRecvIpAddrBuf: Buffer;
    addrRecvPort: number;
    addrTransServicesBuf: Buffer;
    addrTransIpAddrBuf: Buffer;
    addrTransPort: number;
    nonceBuf: Buffer;
    userAgentVi: VarInt;
    userAgentBuf: Buffer;
    startHeightNum: number;
    relay: boolean;
    constructor(versionBytesNum?: number, servicesBuf?: Buffer, timeBn?: Bn, addrRecvServicesBuf?: Buffer, addrRecvIpAddrBuf?: Buffer, addrRecvPort?: number, addrTransServicesBuf?: Buffer, addrTransIpAddrBuf?: Buffer, addrTransPort?: number, nonceBuf?: Buffer, userAgentVi?: VarInt, userAgentBuf?: Buffer, startHeightNum?: number, relay?: boolean);
    toBw(bw?: Bw): Bw;
    fromBr(br: Br): this;
}
//# sourceMappingURL=version.d.ts.map