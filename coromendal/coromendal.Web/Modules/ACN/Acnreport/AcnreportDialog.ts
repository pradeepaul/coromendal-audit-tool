
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnreportDialog extends Serenity.EntityDialog<AcnreportRow, any> {
        protected getFormKey() { return AcnreportForm.formKey; }
        protected getIdProperty() { return AcnreportRow.idProperty; }
        protected getLocalTextPrefix() { return AcnreportRow.localTextPrefix; }
        protected getNameProperty() { return AcnreportRow.nameProperty; }
        protected getService() { return AcnreportService.baseUrl; }

        protected form = new AcnreportForm(this.idPrefix);
    }
}