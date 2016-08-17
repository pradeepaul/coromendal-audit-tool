
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class MeetingPointsEditor extends Common.GridEditorBase<MeetingPointsRow> {
        protected getColumnsKey() { return 'ACN.MeetingPoints'; }
        protected getDialogType() { return MeetingPointsDialog; }
                protected getLocalTextPrefix() { return MeetingPointsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}