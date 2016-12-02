
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SatisfactionratingDialog extends Serenity.EntityDialog<SatisfactionratingRow, any> {
        protected getFormKey() { return SatisfactionratingForm.formKey; }
        protected getIdProperty() { return SatisfactionratingRow.idProperty; }
        protected getLocalTextPrefix() { return SatisfactionratingRow.localTextPrefix; }
        protected getNameProperty() { return SatisfactionratingRow.nameProperty; }
        protected getService() { return SatisfactionratingService.baseUrl; }

        protected form = new SatisfactionratingForm(this.idPrefix);
    }
}