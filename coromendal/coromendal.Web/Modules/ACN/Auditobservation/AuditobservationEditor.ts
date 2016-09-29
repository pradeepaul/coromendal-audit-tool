
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AuditobservationEditor extends Common.GridEditorBase<AuditobservationRow> {
        protected getColumnsKey() { return 'ACN.Auditobservation'; }
        protected getDialogType() { return AuditobservationEditorDialog; }
                protected getLocalTextPrefix() { return AuditobservationRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}