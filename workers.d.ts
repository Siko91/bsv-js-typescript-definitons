/**
 * Workers
 * =======
 *
 * Workers manages either processes (in node) or threads (in a browser). The
 * workers are intended to handle CPU-heavy tasks that block IO. This class is
 * a little unusual in that it must use different interfaces whether in node or
 * in the browser. In node, we use node's build-in child_process fork to create
 * new workers we can communicate with. In the browser, we use web workers.
 * Unfortunately, node and web browsers do not have a common interface for
 * workers. There is a node module called webworker-threads for node that
 * mimics the browser's web workers, but unfortunately it does not support
 * require(), and thus isn't very useful in our case. Therefore we fall back to
 * process forks.
 *
 * You probably don't need to use this class directly. Use Work, which will
 * automatically spawn new workers if needed.
 */
import { WorkersResult } from './workers-result';
export declare class Workers {
    nativeWorkers: any[];
    lastid: number;
    incompconsteRes: any[];
    promisemap: Map<any, any>;
    constructor(nativeWorkers?: any[], lastid?: number, incompconsteRes?: any[], promisemap?: Map<any, any>);
    asyncObjectMethod(obj: any, methodname: string, args: any[], id?: number): WorkersResult;
    static asyncObjectMethod(obj: any, methodname: string, args: any[], id?: number): Promise<WorkersResult>;
    asyncClassMethod(classObj: any, methodname: string, args: any[], id?: number): WorkersResult;
    static asyncClassMethod(classObj: any, methodname: string, args: any[], id?: number): Promise<WorkersResult>;
    static endGlobalWorkers(): void;
}
//# sourceMappingURL=workers.d.ts.map