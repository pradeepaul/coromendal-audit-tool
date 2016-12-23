
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RiskmatrixDialog extends Serenity.EntityDialog<RiskmatrixRow, any> {
        protected getFormKey() { return RiskmatrixForm.formKey; }
        protected getIdProperty() { return RiskmatrixRow.idProperty; }
        protected getLocalTextPrefix() { return RiskmatrixRow.localTextPrefix; }
        protected getNameProperty() { return RiskmatrixRow.nameProperty; }
        protected getService() { return RiskmatrixService.baseUrl; }

        protected form = new RiskmatrixForm(this.idPrefix);
    }
}