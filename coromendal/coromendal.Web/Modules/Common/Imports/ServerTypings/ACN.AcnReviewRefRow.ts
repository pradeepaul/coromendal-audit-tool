
namespace coromendal.ACN {
    export interface AcnReviewRefRow {
        AcnReviewRefId?: number;
        AcnReviewId?: number;
        AcnId?: number;
    }

    export namespace AcnReviewRefRow {
        export const idProperty = 'AcnReviewRefId';
        export const localTextPrefix = 'ACN.AcnReviewRef';

        export namespace Fields {
            export declare const AcnReviewRefId;
            export declare const AcnReviewId;
            export declare const AcnId;
        }

        ['AcnReviewRefId', 'AcnReviewId', 'AcnId'].forEach(x => (<any>Fields)[x] = x);
    }
}

