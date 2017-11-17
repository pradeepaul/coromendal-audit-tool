
namespace coromendal.Administration {
    export interface MasterAcnAuditorRefRow {
        AcnAuditorRefId?: number;
        AcnAuditorId?: number;
        AcnId?: number;
    }

    export namespace MasterAcnAuditorRefRow {
        export const idProperty = 'AcnAuditorRefId';
        export const localTextPrefix = 'Administration.MasterAcnAuditorRef';

        export namespace Fields {
            export declare const AcnAuditorRefId;
            export declare const AcnAuditorId;
            export declare const AcnId;
        }

        ['AcnAuditorRefId', 'AcnAuditorId', 'AcnId'].forEach(x => (<any>Fields)[x] = x);
    }
}

