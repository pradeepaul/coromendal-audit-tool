
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class FinalreportDialog extends Serenity.EntityDialog<FinalreportRow, any> {
        protected getFormKey() { return FinalreportForm.formKey; }
        protected getIdProperty() { return FinalreportRow.idProperty; }
        protected getLocalTextPrefix() { return FinalreportRow.localTextPrefix; }
        protected getNameProperty() { return FinalreportRow.nameProperty; }
        protected getService() { return FinalreportService.baseUrl; }

        protected form = new FinalreportForm(this.idPrefix);
    }
}