
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class SuggestionEditor extends Common.GridEditorBase<SuggestionRow> {
        protected getColumnsKey() { return 'ACN.Suggestion'; }
        protected getDialogType() { return SuggestionEditorDialog; }
                protected getLocalTextPrefix() { return SuggestionRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}