
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RootcauseDialog extends Serenity.EntityDialog<RootcauseRow, any> {
        protected getFormKey() { return RootcauseForm.formKey; }
        protected getIdProperty() { return RootcauseRow.idProperty; }
        protected getLocalTextPrefix() { return RootcauseRow.localTextPrefix; }
        protected getNameProperty() { return RootcauseRow.nameProperty; }
        protected getService() { return RootcauseService.baseUrl; }

        protected form = new RootcauseForm(this.idPrefix);
    }
}