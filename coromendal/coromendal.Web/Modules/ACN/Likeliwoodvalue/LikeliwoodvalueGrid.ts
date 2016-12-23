
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class LikeliwoodvalueGrid extends Serenity.EntityGrid<LikeliwoodvalueRow, any> {
        protected getColumnsKey() { return 'ACN.Likeliwoodvalue'; }
        protected getDialogType() { return LikeliwoodvalueDialog; }
        protected getIdProperty() { return LikeliwoodvalueRow.idProperty; }
        protected getLocalTextPrefix() { return LikeliwoodvalueRow.localTextPrefix; }
        protected getService() { return LikeliwoodvalueService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}