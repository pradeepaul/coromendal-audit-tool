
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class SbuEditor extends Common.GridEditorBase<SbuRow> {
        protected getColumnsKey() { return 'ACN.Sbu'; }
        protected getDialogType() { return SbuEditorDialog; }
                protected getLocalTextPrefix() { return SbuRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}