
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class DarClarificationsEditor extends Common.GridEditorBase<DarClarificationsRow> {
        protected getColumnsKey() { return 'ACN.DarClarifications'; }
        protected getDialogType() { return DarClarificationsEditorDialog; }
                protected getLocalTextPrefix() { return DarClarificationsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}