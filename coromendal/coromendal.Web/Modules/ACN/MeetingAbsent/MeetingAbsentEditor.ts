
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class MeetingAbsentEditor extends Common.GridEditorBase<MeetingAbsentRow> {
        protected getColumnsKey() { return 'ACN.MeetingAbsent'; }
        protected getDialogType() { return MeetingAbsentEditorDialog; }
                protected getLocalTextPrefix() { return MeetingAbsentRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}