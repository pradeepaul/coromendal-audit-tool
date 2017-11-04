
namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MasterAcnDialog extends Serenity.EntityDialog<MasterAcnRow, any> {
        protected getFormKey() { return MasterAcnForm.formKey; }
        protected getIdProperty() { return MasterAcnRow.idProperty; }
        protected getLocalTextPrefix() { return MasterAcnRow.localTextPrefix; }
        protected getNameProperty() { return MasterAcnRow.nameProperty; }
        protected getService() { return MasterAcnService.baseUrl; }

        protected form = new MasterAcnForm(this.idPrefix);
    }
}