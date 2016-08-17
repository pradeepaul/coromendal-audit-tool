
namespace coromendal.ACN {
    export interface NotesRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
    }

    export namespace NotesRow {
        export const idProperty = 'NoteId';
        export const nameProperty = 'EntityType';
        export const localTextPrefix = 'ACN.Notes';

        export namespace Fields {
            export declare const NoteId;
            export declare const EntityType;
            export declare const EntityId;
            export declare const Text;
            export declare const InsertUserId;
            export declare const InsertDate;
        }

        ['NoteId', 'EntityType', 'EntityId', 'Text', 'InsertUserId', 'InsertDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

