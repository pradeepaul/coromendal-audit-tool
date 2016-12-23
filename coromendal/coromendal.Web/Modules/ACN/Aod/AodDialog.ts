
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AodDialog extends Serenity.EntityDialog<AodRow, any> {
        protected getFormKey() { return AodForm.formKey; }
        protected getIdProperty() { return AodRow.idProperty; }
        protected getLocalTextPrefix() { return AodRow.localTextPrefix; }
        protected getNameProperty() { return AodRow.nameProperty; }
        protected getService() { return AodService.baseUrl; }

        protected form = new AodForm(this.idPrefix);
        constructor() {
            super();
           
            this.form.Meetingid.changeSelect2(e => {
                var MeetingID = this.form.Meetingid.value;
                console.log(this.form.Acnid.value);
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
            this.form.AcnidFromdate.value = meetingdetails.AcnidFromdate;
            this.form.Acnid.value = meetingdetails.Acnid;
            this.form.AcnidTodate.value = meetingdetails.AcnidTodate;
            this.form.AcnidPeriodfrom.value = meetingdetails.AcnidPeriodfrom;
            this.form.AcnidPeriodto.value = meetingdetails.Period;
            this.form.AcnidPhaseNo.value = meetingdetails.AcnidPhaseNo;
            this.form.MeetingidMomdate.value = meetingdetails.momdate;
            this.form.MeetingidPlanedcloseddate.value = meetingdetails.planeddate;
            this.form.MeetingidAuditopeningmeetingdate.value = meetingdetails.auditopeneddate;
        }
    }
}