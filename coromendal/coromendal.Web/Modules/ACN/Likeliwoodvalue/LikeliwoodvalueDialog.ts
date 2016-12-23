
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class LikeliwoodvalueDialog extends Serenity.EntityDialog<LikeliwoodvalueRow, any> {
        protected getFormKey() { return LikeliwoodvalueForm.formKey; }
        protected getIdProperty() { return LikeliwoodvalueRow.idProperty; }
        protected getLocalTextPrefix() { return LikeliwoodvalueRow.localTextPrefix; }
        protected getNameProperty() { return LikeliwoodvalueRow.nameProperty; }
        protected getService() { return LikeliwoodvalueService.baseUrl; }

        protected form = new LikeliwoodvalueForm(this.idPrefix);
    }
}