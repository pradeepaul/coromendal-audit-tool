
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingAbsentauditorDialog extends Serenity.EntityDialog<MeetingAbsentauditorRow, any> {
        protected getFormKey() { return MeetingAbsentauditorForm.formKey; }
        protected getIdProperty() { return MeetingAbsentauditorRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingAbsentauditorRow.localTextPrefix; }
        protected getNameProperty() { return MeetingAbsentauditorRow.nameProperty; }
        protected getService() { return MeetingAbsentauditorService.baseUrl; }

        protected form = new MeetingAbsentauditorForm(this.idPrefix);
    }
}