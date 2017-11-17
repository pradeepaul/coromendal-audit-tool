
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MinutesofmeetingDialog extends Serenity.EntityDialog<MinutesofmeetingRow, any> {
        protected getFormKey() { return MinutesofmeetingForm.formKey; }
        protected getIdProperty() { return MinutesofmeetingRow.idProperty; }
        protected getLocalTextPrefix() { return MinutesofmeetingRow.localTextPrefix; }
        protected getNameProperty() { return MinutesofmeetingRow.nameProperty; }
        protected getService() { return MinutesofmeetingService.baseUrl; }

        protected form = new MinutesofmeetingForm(this.idPrefix);
        constructor() {
            super();     
            this.form.Acnid.changeSelect2(e => {
               var AcnID = this.form.Acnid.value;
               console.log(this.form.Acnid.value);               
               if (Q.isEmptyOrNull(AcnID)) {
                   this.setCustomerDetails({});
                    return;
               }

               var id = Q.first(ACN.AcnRow.getLookup().items, x => x.AcnId == parseInt(AcnID)).AcnId;
               ACN.AcnService.Retrieve({
                 EntityId: id
               }, response => {
                   this.setCustomerDetails(response.Entity);
               });
               
            });
        }
        private setCustomerDetails(details: ACN.AcnRow) {
            this.form.AcnidPhaseNo.value = details.PhaseNo;
            this.form.AcnidCreationdate.value = details.creationdate;
            this.form.AcnidPeriodfrom.value = details.Periodfrom;
            this.form.AcnidPeriodto.value = details.Periodto;
            this.form.AcnidFromdate.value = details.Fromdate;
            this.form.AcnidTodate.value = details.Todate;
            this.form.AcnidScopeList.value = details.ScopeList;
            this.form.MeetingTitle.value = details.AcnTilte;
            this.form.Status.value = 2;
            
            

        }
        private setCustomerDetail(details: ACN.AcnRow) {
            debugger;
            this.form.AcnidScopeList.value = details.ScopeList;
        }

        protected afterLoadEntity() {
            if (Q.isEmptyOrNull(this.form.Acnid.value)) {
                this.setCustomerDetail({});
                return;
            }

            var id = Q.first(ACN.AcnRow.getLookup().items, x => x.AcnId == parseInt(this.form.Acnid.value)).AcnId;
            ACN.AcnService.Retrieve({
                EntityId: id
            }, response => {
                this.setCustomerDetail(response.Entity);
            });

        }


    }
}