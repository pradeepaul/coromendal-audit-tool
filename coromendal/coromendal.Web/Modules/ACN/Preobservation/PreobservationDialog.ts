
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PreobservationDialog extends Serenity.EntityDialog<PreobservationRow, any> {
        protected getFormKey() { return PreobservationForm.formKey; }
        protected getIdProperty() { return PreobservationRow.idProperty; }
        protected getLocalTextPrefix() { return PreobservationRow.localTextPrefix; }
        protected getNameProperty() { return PreobservationRow.nameProperty; }
        protected getService() { return PreobservationService.baseUrl; }

        protected form = new PreobservationForm(this.idPrefix);
        private setCustomerDetail(details: ACN.AuditobservationRow) {
            this.form.SuggestionList.value = details.SuggestionList;
            this.form.rootList.value = details.rootList;
            this.form.Detailedobservation1.value = details.Detailedobservation1;
            this.form.Name.value = details.Name;
            this.form.Email.value = details.Email;
            if ((Authorization.userDefinition.RoleId == 4) || (Authorization.userDefinition.RoleId == 1)) {
                Serenity.EditorUtils.setReadOnly(this.form.Justification, true);

            }
            

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