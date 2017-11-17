
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class PreobservationEditor extends Common.GridEditorBase<PreobservationRow> {
        protected getColumnsKey() { return 'ACN.Preobservation'; }
        protected getDialogType() { return PreobservationEditorDialog; }
                protected getLocalTextPrefix() { return PreobservationRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}