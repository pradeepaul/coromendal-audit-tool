
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnAuditorEditor extends Common.GridEditorBase<AcnAuditorRow> {
        protected getColumnsKey() { return 'ACN.AcnAuditor'; }
        protected getDialogType() { return AcnAuditorEditorDialog; }
                protected getLocalTextPrefix() { return AcnAuditorRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}