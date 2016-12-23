namespace coromendal.ACN {
    export class AodForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Aod';

    }

    export interface AodForm {
        Meetingid: Serenity.LookupEditor;
        AcnidPhaseNo: Serenity.IntegerEditor;
        Acnid: Serenity.IntegerEditor;
        MeetingidMomdate: Serenity.DateEditor;
        MeetingidPlanedcloseddate: Serenity.DateEditor;
        MeetingidAuditopeningmeetingdate: Serenity.DateEditor;
        AcnidPeriodfrom: Serenity.StringEditor;
        AcnidPeriodto: Serenity.StringEditor;
        AcnidFromdate: Serenity.StringEditor;
        AcnidTodate: Serenity.StringEditor;
        Sbu: Serenity.StringEditor;
        Actualcomencementdate: Serenity.StringEditor;
        Actualcompltedate: Serenity.StringEditor;
        ProcessOwner: Serenity.StringEditor;
        Functionalhead: Serenity.StringEditor;
        Areaofscope: Serenity.StringEditor;
        Exclusions: Serenity.StringEditor;
        Reasons: Serenity.StringEditor;
        inputfromauditee: InputfromauditeeEditor;
        Satisfactionrating: SatisfactionratingEditor;
        Observationpending: ObservationpendingEditor;
        Currentauditobservation: CurrentauditobservationEditor;
    }

    [['Meetingid', () => Serenity.LookupEditor], ['AcnidPhaseNo', () => Serenity.IntegerEditor], ['Acnid', () => Serenity.IntegerEditor], ['MeetingidMomdate', () => Serenity.DateEditor], ['MeetingidPlanedcloseddate', () => Serenity.DateEditor], ['MeetingidAuditopeningmeetingdate', () => Serenity.DateEditor], ['AcnidPeriodfrom', () => Serenity.StringEditor], ['AcnidPeriodto', () => Serenity.StringEditor], ['AcnidFromdate', () => Serenity.StringEditor], ['AcnidTodate', () => Serenity.StringEditor], ['Sbu', () => Serenity.StringEditor], ['Actualcomencementdate', () => Serenity.StringEditor], ['Actualcompltedate', () => Serenity.StringEditor], ['ProcessOwner', () => Serenity.StringEditor], ['Functionalhead', () => Serenity.StringEditor], ['Areaofscope', () => Serenity.StringEditor], ['Exclusions', () => Serenity.StringEditor], ['Reasons', () => Serenity.StringEditor], ['inputfromauditee', () => InputfromauditeeEditor], ['Satisfactionrating', () => SatisfactionratingEditor], ['Observationpending', () => ObservationpendingEditor], ['Currentauditobservation', () => CurrentauditobservationEditor]].forEach(x => Object.defineProperty(AodForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

