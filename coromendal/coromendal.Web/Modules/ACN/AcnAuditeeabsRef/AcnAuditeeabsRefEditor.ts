
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnAuditeeabsRefEditor extends Common.GridEditorBase<AcnAuditeeabsRefRow> {
        protected getColumnsKey() { return 'ACN.AcnAuditeeabsRef'; }
        protected getDialogType() { return AcnAuditeeabsRefEditorDialog; }
                protected getLocalTextPrefix() { return AcnAuditeeabsRefRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}