
namespace coromendal.ACN {
    export interface QuestionsRow {
        QuestionId?: number;
        Questiontext?: string;
    }

    export namespace QuestionsRow {
        export const idProperty = 'QuestionId';
        export const nameProperty = 'Questiontext';
        export const localTextPrefix = 'ACN.Questions';

        export namespace Fields {
            export declare const QuestionId;
            export declare const Questiontext;
        }

        ['QuestionId', 'Questiontext'].forEach(x => (<any>Fields)[x] = x);
    }
}

