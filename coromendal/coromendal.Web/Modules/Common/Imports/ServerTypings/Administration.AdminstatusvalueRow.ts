
namespace coromendal.Administration {
    export interface AdminstatusvalueRow {
        Adminstatusvalueid?: number;
        Value?: string;
    }

    export namespace AdminstatusvalueRow {
        export const idProperty = 'Adminstatusvalueid';
        export const nameProperty = 'Value';
        export const localTextPrefix = 'Administration.Adminstatusvalue';
        export function getLookup(): Q.Lookup<AdminstatusvalueRow> {
            return Q.getLookup<AdminstatusvalueRow>('AdminstatusvalueRow');
        }

        export namespace Fields {
            export declare const Adminstatusvalueid;
            export declare const Value;
        }

        ['Adminstatusvalueid', 'Value'].forEach(x => (<any>Fields)[x] = x);
    }
}

