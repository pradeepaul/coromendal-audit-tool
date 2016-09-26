
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnreportEditor extends Common.GridEditorBase<AcnreportRow> {
        protected getColumnsKey() { return 'ACN.Acnreport'; }
        protected getDialogType() { return AcnreportEditorDialog; }
                protected getLocalTextPrefix() { return AcnreportRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}