
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class MeetingAbsentauditeeEditor extends Common.GridEditorBase<MeetingAbsentauditeeRow> {
        protected getColumnsKey() { return 'ACN.MeetingAbsentauditee'; }
        protected getDialogType() { return MeetingAbsentauditeeEditorDialog; }
                protected getLocalTextPrefix() { return MeetingAbsentauditeeRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}