
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class SatisfactionratingEditor extends Common.GridEditorBase<SatisfactionratingRow> {
        protected getColumnsKey() { return 'ACN.Satisfactionrating'; }
        protected getDialogType() { return SatisfactionratingEditorDialog; }
                protected getLocalTextPrefix() { return SatisfactionratingRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}