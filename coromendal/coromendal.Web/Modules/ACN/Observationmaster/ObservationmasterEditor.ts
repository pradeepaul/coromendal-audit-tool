
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class ObservationmasterEditor extends Common.GridEditorBase<ObservationmasterRow> {
        protected getColumnsKey() { return 'ACN.Observationmaster'; }
        protected getDialogType() { return ObservationmasterEditorDialog; }
                protected getLocalTextPrefix() { return ObservationmasterRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}