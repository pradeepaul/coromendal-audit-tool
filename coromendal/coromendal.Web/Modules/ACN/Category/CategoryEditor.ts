
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class CategoryEditor extends Common.GridEditorBase<CategoryRow> {
        protected getColumnsKey() { return 'ACN.Category'; }
        protected getDialogType() { return CategoryEditorDialog; }
                protected getLocalTextPrefix() { return CategoryRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}