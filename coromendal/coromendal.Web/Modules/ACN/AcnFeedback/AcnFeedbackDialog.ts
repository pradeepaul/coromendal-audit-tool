
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnFeedbackDialog extends Serenity.EntityDialog<AcnFeedbackRow, any> {
        protected getFormKey() { return AcnFeedbackForm.formKey; }
        protected getIdProperty() { return AcnFeedbackRow.idProperty; }
        protected getLocalTextPrefix() { return AcnFeedbackRow.localTextPrefix; }
        protected getNameProperty() { return AcnFeedbackRow.nameProperty; }
        protected getService() { return AcnFeedbackService.baseUrl; }

        protected form = new AcnFeedbackForm(this.idPrefix);
        
        constructor() {
            super();

            this.form.Acnid.changeSelect2(e => {
                var MeetingID = this.form.Acnid.value;
               // console.log(this.form.Meetingid.value);
                if (Q.isEmptyOrNull(MeetingID)) {
                    this.setMeetingDetails({});
                    return;
                }

                var id1 = Q.first(ACN.MinutesofmeetingRow.getLookup().items, x => x.Meetingid == parseInt(MeetingID)).Meetingid;
                ACN.MinutesofmeetingService.Retrieve({
                    EntityId: id1
                }, response => {
                    this.setMeetingDetails(response.Entity);
                });

            });
        }
        private setMeetingDetails(meetingdetails: ACN.MinutesofmeetingRow) {
            //this.form.Name.value = Authorization.userDefinition.DisplayName;
            //console.log(Authorization.userDefinition.DisplayName);
           /// this.form.Location.value = meetingdetails.AcnidLocation;


        }      
    }
}