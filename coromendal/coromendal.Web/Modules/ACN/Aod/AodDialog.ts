
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
                console.log(this.form.Meetingid.value);
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
            this.form.Acnid.value = meetingdetails.Acnid;
            this.form.AcnidPhaseNo.value = meetingdetails.AcnidPhaseNo;
            this.form.AcnidCreationdate.value = meetingdetails.AcnidCreationdate;
            this.form.MeetingidPlanedcloseddate.value = meetingdetails.planeddate;
            this.form.MeetingidAuditopeningmeetingdate.value = meetingdetails.auditopeneddate;
            this.form.AcnidFromdate.value = meetingdetails.AcnidFromdate;
            this.form.AcnidTodate.value = meetingdetails.AcnidTodate;
            this.form.AcnidPeriodfrom.value = meetingdetails.AcnidPeriodfrom;
            this.form.AcnidPeriodto.value = meetingdetails.AcnidPeriodto;
            this.form.AcnidLocation.value = meetingdetails.AcnidLocation;
            this.form.Areaofscope.value = meetingdetails.AcnidScopeList;
                 

            

        }
        private setCustomerDetail(details: ACN.AcnRow) {
            debugger;
            this.form.Areaofscope.value = details.ScopeList;
        }

        protected afterLoadEntity() {
            if (this.form.Acnid.value==0) {
                this.setCustomerDetail({});
                return;
            }
            
            var id = Q.first(ACN.AcnRow.getLookup().items, x => x.AcnId == this.form.Acnid.value).AcnId;
            ACN.AcnService.Retrieve({
                EntityId: id
            }, response => {
                this.setCustomerDetail(response.Entity);
            });

        }
    }
}