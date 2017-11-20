
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PreobservationDialog extends Serenity.EntityDialog<PreobservationRow, any> {
        protected getFormKey() { return PreobservationForm.formKey; }
        protected getIdProperty() { return PreobservationRow.idProperty; }
        protected getLocalTextPrefix() { return PreobservationRow.localTextPrefix; }
        protected getNameProperty() { return PreobservationRow.nameProperty; }
        protected getService() { return PreobservationService.baseUrl; }

        debugger;

        protected form = new PreobservationForm(this.idPrefix);
        protected updateInterface(): void {

            debugger;
            //this.element.find('.add-button').hide();
            this.form.SuggestionList.element.find('.add-button').hide();
            this.form.rootList.element.find('.add-button').hide();
            console.log("success");

        }
        private setCustomerDetail(details: ACN.AuditobservationRow) {
            this.form.SuggestionList.value = details.SuggestionList;
            this.form.rootList.value = details.rootList;
            this.form.Detailedobservation1.value = details.Detailedobservation1;
            this.form.Name.value = details.Name;
            this.form.Email.value = details.Email;
           
            

        }

        protected afterLoadEntity() {
            if (this.form.Observationid.value == 0) {
                this.setCustomerDetail({});
                return;
            }

         

            var id = Q.first(ACN.AuditobservationRow.getLookup().items, x => x.AuditobservationId == this.form.Observationid.value).AuditobservationId;
            ACN.AuditobservationService.Retrieve({
                EntityId: id
            }, response => {
                this.setCustomerDetail(response.Entity);
            });

        }

       
    }
}