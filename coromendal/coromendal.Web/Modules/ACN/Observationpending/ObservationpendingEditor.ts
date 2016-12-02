
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class ObservationpendingEditor extends Common.GridEditorBase<ObservationpendingRow> {
        protected getColumnsKey() { return 'ACN.Observationpending'; }
        protected getDialogType() { return ObservationpendingEditorDialog; }
                protected getLocalTextPrefix() { return ObservationpendingRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}