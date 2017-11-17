
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    export class MasterAcnAuditorRefEditor extends Common.GridEditorBase<MasterAcnAuditorRefRow> {
        protected getColumnsKey() { return 'Administration.MasterAcnAuditorRef'; }
        protected getDialogType() { return MasterAcnAuditorRefEditorDialog; }
                protected getLocalTextPrefix() { return MasterAcnAuditorRefRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}