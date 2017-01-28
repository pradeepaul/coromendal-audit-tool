
namespace coromendal.ACN {
    export interface FinalstatusvalueRow {
        Finalstatusid?: number;
        Value?: string;
    }

    export namespace FinalstatusvalueRow {
        export const idProperty = 'Finalstatusid';
        export const nameProperty = 'Value';
        export const localTextPrefix = 'ACN.Finalstatusvalue';

        export namespace Fields {
            export declare const Finalstatusid;
            export declare const Value;
        }

        ['Finalstatusid', 'Value'].forEach(x => (<any>Fields)[x] = x);
    }
}

