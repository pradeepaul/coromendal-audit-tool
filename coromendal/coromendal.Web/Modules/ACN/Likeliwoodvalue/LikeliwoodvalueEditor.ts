
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class LikeliwoodvalueEditor extends Common.GridEditorBase<LikeliwoodvalueRow> {
        protected getColumnsKey() { return 'ACN.Likeliwoodvalue'; }
        protected getDialogType() { return LikeliwoodvalueEditorDialog; }
                protected getLocalTextPrefix() { return LikeliwoodvalueRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}