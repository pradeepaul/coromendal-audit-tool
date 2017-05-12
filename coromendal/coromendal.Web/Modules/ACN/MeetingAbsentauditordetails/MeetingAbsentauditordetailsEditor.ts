
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class MeetingAbsentauditordetailsEditor extends Common.GridEditorBase<MeetingAbsentauditordetailsRow> {
        protected getColumnsKey() { return 'ACN.MeetingAbsentauditordetails'; }
        protected getDialogType() { return MeetingAbsentauditordetailsEditorDialog; }
                protected getLocalTextPrefix() { return MeetingAbsentauditordetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}