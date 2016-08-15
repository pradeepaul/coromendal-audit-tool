
namespace coromendal.ACN {
    export interface AcnAuditorRefRow {
        AcnAuditorRefId?: number;
        AcnAuditorId?: number;
        AcnId?: number;
    }

    export namespace AcnAuditorRefRow {
        export const idProperty = 'AcnAuditorRefId';
        export const localTextPrefix = 'ACN.AcnAuditorRef';

        export namespace Fields {
            export declare const AcnAuditorRefId;
            export declare const AcnAuditorId;
            export declare const AcnId;
        }

        ['AcnAuditorRefId', 'AcnAuditorId', 'AcnId'].forEach(x => (<any>Fields)[x] = x);
    }
}

