
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class CurrentauditobservationEditor extends Common.GridEditorBase<CurrentauditobservationRow> {
        protected getColumnsKey() { return 'ACN.Currentauditobservation'; }
        protected getDialogType() { return CurrentauditobservationEditorDialog; }
                protected getLocalTextPrefix() { return CurrentauditobservationRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}