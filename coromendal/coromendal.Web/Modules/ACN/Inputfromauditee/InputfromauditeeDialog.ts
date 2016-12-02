
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class InputfromauditeeDialog extends Serenity.EntityDialog<InputfromauditeeRow, any> {
        protected getFormKey() { return InputfromauditeeForm.formKey; }
        protected getIdProperty() { return InputfromauditeeRow.idProperty; }
        protected getLocalTextPrefix() { return InputfromauditeeRow.localTextPrefix; }
        protected getNameProperty() { return InputfromauditeeRow.nameProperty; }
        protected getService() { return InputfromauditeeService.baseUrl; }

        protected form = new InputfromauditeeForm(this.idPrefix);
    }
}