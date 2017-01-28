
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class MeetingAbsentauditorEditor extends Common.GridEditorBase<MeetingAbsentauditorRow> {
        protected getColumnsKey() { return 'ACN.MeetingAbsentauditor'; }
        protected getDialogType() { return MeetingAbsentauditorEditorDialog; }
                protected getLocalTextPrefix() { return MeetingAbsentauditorRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}