
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class NewchangesEditor extends Common.GridEditorBase<NewchangesRow> {
        protected getColumnsKey() { return 'ACN.Newchanges'; }
        protected getDialogType() { return NewchangesEditorDialog; }
                protected getLocalTextPrefix() { return NewchangesRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}