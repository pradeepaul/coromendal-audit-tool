namespace coromendal.ACN {
    export interface FeedbackvalueRow {
        Feedbackvalueid?: number;
        Value?: string;
    }

    export namespace FeedbackvalueRow {
        export const idProperty = 'Feedbackvalueid';
        export const nameProperty = 'Value';
        export const localTextPrefix = 'ACN.Feedbackvalue';
        export const lookupKey = 'FeedbackvalueRow';

        export function getLookup(): Q.Lookup<FeedbackvalueRow> {
            return Q.getLookup<FeedbackvalueRow>('FeedbackvalueRow');
        }

        export namespace Fields {
            export declare const Feedbackvalueid: string;
            export declare const Value: string;
        }

        ['Feedbackvalueid', 'Value'].forEach(x => (<any>Fields)[x] = x);
    }
}

