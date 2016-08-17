
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingPointsDialog extends Serenity.EntityDialog<MeetingPointsRow, any> {
        protected getFormKey() { return MeetingPointsForm.formKey; }
        protected getIdProperty() { return MeetingPointsRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingPointsRow.localTextPrefix; }
        protected getNameProperty() { return MeetingPointsRow.nameProperty; }
        protected getService() { return MeetingPointsService.baseUrl; }

        protected form = new MeetingPointsForm(this.idPrefix);
    }
}