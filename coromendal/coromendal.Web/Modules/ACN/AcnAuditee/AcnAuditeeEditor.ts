
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnAuditeeEditor extends Common.GridEditorBase<AcnAuditeeRow> {
        protected getColumnsKey() { return 'ACN.AcnAuditee'; }
        protected getDialogType() { return AcnAuditeeEditorDialog; }
                protected getLocalTextPrefix() { return AcnAuditeeRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}