
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class MinutesofmeetingEditor extends Common.GridEditorBase<MinutesofmeetingRow> {
        protected getColumnsKey() { return 'ACN.Minutesofmeeting'; }
        protected getDialogType() { return MinutesofmeetingEditorDialog; }
                protected getLocalTextPrefix() { return MinutesofmeetingRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}