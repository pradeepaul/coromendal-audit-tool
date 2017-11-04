
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class FinalobservationEditor extends Common.GridEditorBase<FinalobservationRow> {
        protected getColumnsKey() { return 'ACN.Finalobservation'; }
        protected getDialogType() { return FinalobservationEditorDialog; }
                protected getLocalTextPrefix() { return FinalobservationRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}