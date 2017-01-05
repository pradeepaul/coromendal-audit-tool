namespace coromendal.ACN {
    export interface LikeliwoodvalueRow {
        Likeliwoodvalueid?: number;
        Likeliwoodvaluename?: string;
    }

    export namespace LikeliwoodvalueRow {
        export const idProperty = 'Likeliwoodvalueid';
        export const nameProperty = 'Likeliwoodvaluename';
        export const localTextPrefix = 'ACN.Likeliwoodvalue';
        export const lookupKey = 'LikeliwoodvalueRow';

        export function getLookup(): Q.Lookup<LikeliwoodvalueRow> {
            return Q.getLookup<LikeliwoodvalueRow>('LikeliwoodvalueRow');
        }

        export namespace Fields {
            export declare const Likeliwoodvalueid: string;
            export declare const Likeliwoodvaluename: string;
        }

        ['Likeliwoodvalueid', 'Likeliwoodvaluename'].forEach(x => (<any>Fields)[x] = x);
    }
}

