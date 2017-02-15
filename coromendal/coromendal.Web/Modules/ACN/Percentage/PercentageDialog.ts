
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PercentageDialog extends Serenity.EntityDialog<PercentageRow, any> {
        protected getFormKey() { return PercentageForm.formKey; }
        protected getIdProperty() { return PercentageRow.idProperty; }
        protected getLocalTextPrefix() { return PercentageRow.localTextPrefix; }
        protected getNameProperty() { return PercentageRow.nameProperty; }
        protected getService() { return PercentageService.baseUrl; }

        protected form = new PercentageForm(this.idPrefix);
    }
}