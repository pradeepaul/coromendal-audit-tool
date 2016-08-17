

namespace coromendal.ACN {
    export class NotesForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Notes';
    }

    export interface NotesForm {
        EntityType: Serenity.StringEditor;
        EntityId: Serenity.IntegerEditor;
        Text: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
    }

    [['NoteId', () => Serenity.IntegerEditor], ['EntityType', () => Serenity.StringEditor], ['EntityId', () => Serenity.IntegerEditor], ['Text', () => Serenity.StringEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['InsertDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(NotesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}