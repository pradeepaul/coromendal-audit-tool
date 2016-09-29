
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class ConformationEditor extends Common.GridEditorBase<ConformationRow> {
        protected getColumnsKey() { return 'ACN.Conformation'; }
        protected getDialogType() { return ConformationEditorDialog; }
                protected getLocalTextPrefix() { return ConformationRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}