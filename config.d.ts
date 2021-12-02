declare class Config {
    private values;
    constructor(values: Record<string, string>);
    private keyDefined;
    private getValue;
    get(key: string): string;
}
export declare const config: Config;
export {};
//# sourceMappingURL=config.d.ts.map