
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class AcnAuditorRefEditor extends Common.GridEditorBase<AcnAuditorRefRow> {
        protected getColumnsKey() { return 'ACN.AcnAuditorRef'; }
        protected getDialogType() { return AcnAuditorRefEditorDialog; }
                protected getLocalTextPrefix() { return AcnAuditorRefRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}