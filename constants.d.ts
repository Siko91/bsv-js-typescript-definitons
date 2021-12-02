export interface NetworkConstants {
    MaxSize: number;
    Port: number;
    Address: {
        pubKeyHash: number;
        payToScriptHash: number;
    };
    Bip32: {
        pubKey: number;
        privKey: number;
    };
    Block: {
        maxNBits: number;
        magicNum: number;
    };
    Msg: {
        magicNum: number;
        versionBytesNum: number;
    };
    PrivKey: {
        versionByteNum: number;
    };
    TxBuilder: {
        dust: number;
        feePerKbNum: number;
    };
    Workers: {
        timeout: number;
    };
}
declare const Constants: {
    Mainnet: NetworkConstants;
    Testnet: NetworkConstants;
    Regtest: NetworkConstants;
    STN: NetworkConstants;
    Default: NetworkConstants;
};
declare const getConstants: (magicNum: any) => NetworkConstants;
export { Constants, getConstants };
//# sourceMappingURL=constants.d.ts.map