
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class QuestionsDialog extends Serenity.EntityDialog<QuestionsRow, any> {
        protected getFormKey() { return QuestionsForm.formKey; }
        protected getIdProperty() { return QuestionsRow.idProperty; }
        protected getLocalTextPrefix() { return QuestionsRow.localTextPrefix; }
        protected getNameProperty() { return QuestionsRow.nameProperty; }
        protected getService() { return QuestionsService.baseUrl; }

        protected form = new QuestionsForm(this.idPrefix);
    }
}