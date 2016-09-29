
namespace coromendal.ACN {
    export interface FeedbackvalueRow {
        Feedbackvalueid?: number;
        Value?: string;
    }

    export namespace FeedbackvalueRow {
        export const idProperty = 'Feedbackvalueid';
        export const nameProperty = 'Value';
        export const localTextPrefix = 'ACN.Feedbackvalue';

        export namespace Fields {
            export declare const Feedbackvalueid;
            export declare const Value;
        }

        ['Feedbackvalueid', 'Value'].forEach(x => (<any>Fields)[x] = x);
    }
}

