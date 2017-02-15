namespace coromendal.ACN {
    export interface FinalstatusvalueRow {
        Finalstatusid?: number;
        Value?: string;
    }

    export namespace FinalstatusvalueRow {
        export const idProperty = 'Finalstatusid';
        export const nameProperty = 'Value';
        export const localTextPrefix = 'ACN.Finalstatusvalue';
        export const lookupKey = 'FinalstatusvalueRow';

        export function getLookup(): Q.Lookup<FinalstatusvalueRow> {
            return Q.getLookup<FinalstatusvalueRow>('FinalstatusvalueRow');
        }

        export namespace Fields {
            export declare const Finalstatusid: string;
            export declare const Value: string;
        }

        ['Finalstatusid', 'Value'].forEach(x => (<any>Fields)[x] = x);
    }
}

