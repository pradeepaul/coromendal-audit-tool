
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RiskratingDialog extends Serenity.EntityDialog<RiskratingRow, any> {
        protected getFormKey() { return RiskratingForm.formKey; }
        protected getIdProperty() { return RiskratingRow.idProperty; }
        protected getLocalTextPrefix() { return RiskratingRow.localTextPrefix; }
        protected getNameProperty() { return RiskratingRow.nameProperty; }
        protected getService() { return RiskratingService.baseUrl; }

        protected form = new RiskratingForm(this.idPrefix);
    }
}