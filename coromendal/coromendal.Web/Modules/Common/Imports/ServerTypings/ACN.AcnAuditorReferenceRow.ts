
namespace coromendal.ACN {
    export interface AcnAuditorReferenceRow {
        AcnAuditorReferenceId?: number;
        AcnAuditorId?: number;
        AcnmasterId?: number;
    }

    export namespace AcnAuditorReferenceRow {
        export const idProperty = 'AcnAuditorReferenceId';
        export const localTextPrefix = 'ACN.AcnAuditorReference';

        export namespace Fields {
            export declare const AcnAuditorReferenceId;
            export declare const AcnAuditorId;
            export declare const AcnmasterId;
        }

        ['AcnAuditorReferenceId', 'AcnAuditorId', 'AcnmasterId'].forEach(x => (<any>Fields)[x] = x);
    }
}

