
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnDialog extends Serenity.EntityDialog<AcnRow, any> {
        protected getFormKey() { return AcnForm.formKey; }
        protected getIdProperty() { return AcnRow.idProperty; }
        protected getLocalTextPrefix() { return AcnRow.localTextPrefix; }
        protected getNameProperty() { return AcnRow.nameProperty; }
        protected getService() { return AcnService.baseUrl; }

        protected form = new AcnForm(this.idPrefix);
      


    }
}