
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingIssueDialog extends Serenity.EntityDialog<MeetingIssueRow, any> {
        protected getFormKey() { return MeetingIssueForm.formKey; }
        protected getIdProperty() { return MeetingIssueRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingIssueRow.localTextPrefix; }
        protected getNameProperty() { return MeetingIssueRow.nameProperty; }
        protected getService() { return MeetingIssueService.baseUrl; }

        protected form = new MeetingIssueForm(this.idPrefix);
    }
}