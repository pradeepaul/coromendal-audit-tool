
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class NewiprovementsEditor extends Common.GridEditorBase<NewiprovementsRow> {
        protected getColumnsKey() { return 'ACN.Newiprovements'; }
        protected getDialogType() { return NewiprovementsEditorDialog; }
                protected getLocalTextPrefix() { return NewiprovementsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}