
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingAbsentDialog extends Serenity.EntityDialog<MeetingAbsentRow, any> {
        protected getFormKey() { return MeetingAbsentForm.formKey; }
        protected getIdProperty() { return MeetingAbsentRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingAbsentRow.localTextPrefix; }
        protected getNameProperty() { return MeetingAbsentRow.nameProperty; }
        protected getService() { return MeetingAbsentService.baseUrl; }

        protected form = new MeetingAbsentForm(this.idPrefix);
    }
}