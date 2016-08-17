
namespace coromendal.ACN {
    export interface MyNotesRow {
        MyNoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
    }

    export namespace MyNotesRow {
        export const idProperty = 'MyNoteId';
        export const nameProperty = 'EntityType';
        export const localTextPrefix = 'ACN.MyNotes';

        export namespace Fields {
            export declare const MyNoteId;
            export declare const EntityType;
            export declare const EntityId;
            export declare const Text;
            export declare const InsertUserId;
            export declare const InsertDate;
        }

        ['MyNoteId', 'EntityType', 'EntityId', 'Text', 'InsertUserId', 'InsertDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

