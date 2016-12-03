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
            export declare const AcnAuditorRefId: string;
            export declare const AcnAuditorId: string;
            export declare const AcnId: string;
        }

        ['AcnAuditorRefId', 'AcnAuditorId', 'AcnId'].forEach(x => (<any>Fields)[x] = x);
    }
}

