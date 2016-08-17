

namespace coromendal.ACN {
    export class MyNotesForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.MyNotes';
    }

    export interface MyNotesForm {
        EntityType: Serenity.StringEditor;
        EntityId: Serenity.IntegerEditor;
        Text: Serenity.StringEditor;
        InsertUserId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
    }

    [['MyNoteId', () => Serenity.IntegerEditor], ['EntityType', () => Serenity.StringEditor], ['EntityId', () => Serenity.IntegerEditor], ['Text', () => Serenity.StringEditor], ['InsertUserId', () => Serenity.IntegerEditor], ['InsertDate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(MyNotesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}