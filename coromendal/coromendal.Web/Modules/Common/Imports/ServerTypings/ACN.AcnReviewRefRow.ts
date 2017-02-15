namespace coromendal.ACN {
    export interface AcnReviewRefRow {
        AcnReviewRefId?: number;
        AcnReviewId?: number;
        ReportId?: number;
    }

    export namespace AcnReviewRefRow {
        export const idProperty = 'AcnReviewRefId';
        export const localTextPrefix = 'ACN.AcnReviewRef';

        export namespace Fields {
            export declare const AcnReviewRefId: string;
            export declare const AcnReviewId: string;
            export declare const ReportId: string;
        }

        ['AcnReviewRefId', 'AcnReviewId', 'ReportId'].forEach(x => (<any>Fields)[x] = x);
    }
}

