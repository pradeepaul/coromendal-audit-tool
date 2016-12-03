namespace coromendal.ACN {
    export interface QuestionsRow {
        QuestionId?: number;
        Questiontext?: string;
    }

    export namespace QuestionsRow {
        export const idProperty = 'QuestionId';
        export const nameProperty = 'Questiontext';
        export const localTextPrefix = 'ACN.Questions';
        export const lookupKey = 'QuestionsRow';

        export function getLookup(): Q.Lookup<QuestionsRow> {
            return Q.getLookup<QuestionsRow>('QuestionsRow');
        }

        export namespace Fields {
            export declare const QuestionId: string;
            export declare const Questiontext: string;
        }

        ['QuestionId', 'Questiontext'].forEach(x => (<any>Fields)[x] = x);
    }
}

