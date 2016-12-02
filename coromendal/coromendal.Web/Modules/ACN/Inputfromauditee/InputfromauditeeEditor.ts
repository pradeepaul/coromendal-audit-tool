
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class InputfromauditeeEditor extends Common.GridEditorBase<InputfromauditeeRow> {
        protected getColumnsKey() { return 'ACN.Inputfromauditee'; }
        protected getDialogType() { return InputfromauditeeEditorDialog; }
                protected getLocalTextPrefix() { return InputfromauditeeRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}