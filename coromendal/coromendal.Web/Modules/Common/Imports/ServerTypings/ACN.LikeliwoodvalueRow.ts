
namespace coromendal.ACN {
    export interface LikeliwoodvalueRow {
        Likeliwoodvalueid?: number;
        Likeliwoodvaluename?: string;
    }

    export namespace LikeliwoodvalueRow {
        export const idProperty = 'Likeliwoodvalueid';
        export const nameProperty = 'Likeliwoodvaluename';
        export const localTextPrefix = 'ACN.Likeliwoodvalue';

        export namespace Fields {
            export declare const Likeliwoodvalueid;
            export declare const Likeliwoodvaluename;
        }

        ['Likeliwoodvalueid', 'Likeliwoodvaluename'].forEach(x => (<any>Fields)[x] = x);
    }
}

