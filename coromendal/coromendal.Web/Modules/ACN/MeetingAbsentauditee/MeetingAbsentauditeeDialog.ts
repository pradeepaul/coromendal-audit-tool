
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingAbsentauditeeDialog extends Serenity.EntityDialog<MeetingAbsentauditeeRow, any> {
        protected getFormKey() { return MeetingAbsentauditeeForm.formKey; }
        protected getIdProperty() { return MeetingAbsentauditeeRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingAbsentauditeeRow.localTextPrefix; }
        protected getNameProperty() { return MeetingAbsentauditeeRow.nameProperty; }
        protected getService() { return MeetingAbsentauditeeService.baseUrl; }

        protected form = new MeetingAbsentauditeeForm(this.idPrefix);
    }
}