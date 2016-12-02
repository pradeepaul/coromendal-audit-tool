
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class ObservationpreviousauditEditor extends Common.GridEditorBase<ObservationpreviousauditRow> {
        protected getColumnsKey() { return 'ACN.Observationpreviousaudit'; }
        protected getDialogType() { return ObservationpreviousauditEditorDialog; }
                protected getLocalTextPrefix() { return ObservationpreviousauditRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}