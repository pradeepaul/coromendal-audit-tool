
namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MasterAcnAuditorRefDialog extends Serenity.EntityDialog<MasterAcnAuditorRefRow, any> {
        protected getFormKey() { return MasterAcnAuditorRefForm.formKey; }
        protected getIdProperty() { return MasterAcnAuditorRefRow.idProperty; }
        protected getLocalTextPrefix() { return MasterAcnAuditorRefRow.localTextPrefix; }
        protected getService() { return MasterAcnAuditorRefService.baseUrl; }

        protected form = new MasterAcnAuditorRefForm(this.idPrefix);
    }
}