
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnAuditeeRefEditor extends Common.GridEditorBase<AcnAuditeeRefRow> {
        protected getColumnsKey() { return 'ACN.AcnAuditeeRef'; }
        protected getDialogType() { return AcnAuditeeRefEditorDialog; }
                protected getLocalTextPrefix() { return AcnAuditeeRefRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}