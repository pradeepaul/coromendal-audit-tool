
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class KeyfactsEditor extends Common.GridEditorBase<KeyfactsRow> {
        protected getColumnsKey() { return 'ACN.Keyfacts'; }
        protected getDialogType() { return KeyfactsEditorDialog; }
                protected getLocalTextPrefix() { return KeyfactsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}