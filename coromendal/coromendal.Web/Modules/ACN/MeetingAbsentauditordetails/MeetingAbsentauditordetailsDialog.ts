
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingAbsentauditordetailsDialog extends Serenity.EntityDialog<MeetingAbsentauditordetailsRow, any> {
        protected getFormKey() { return MeetingAbsentauditordetailsForm.formKey; }
        protected getIdProperty() { return MeetingAbsentauditordetailsRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingAbsentauditordetailsRow.localTextPrefix; }
        protected getNameProperty() { return MeetingAbsentauditordetailsRow.nameProperty; }
        protected getService() { return MeetingAbsentauditordetailsService.baseUrl; }

        protected form = new MeetingAbsentauditordetailsForm(this.idPrefix);
        constructor() {
            super();

            this.form.AbsentUser.changeSelect2(e => {
                var MeetingID = this.form.AbsentUser.value;
                console.log(this.form.AbsentUser.value);
               

                var id1 = Q.first(ACN.MinutesofmeetingRow.getLookup().items, x => x.Meetingid == MeetingID);
                ACN.MinutesofmeetingService.Retrieve({
                    EntityId: id1
                }, response => {
                    this.setMeetingDetails(response.Entity);
                });

            });
        }
        private setMeetingDetails(meetingdetails: ACN.MinutesofmeetingRow) {
            this.form.Name.value = meetingdetails.UseridDisplayName;




        }
    }
}