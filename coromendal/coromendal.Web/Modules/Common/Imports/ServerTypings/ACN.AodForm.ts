namespace coromendal.ACN {
    export class AodForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Aod';

    }

    export interface AodForm {
        Sbu: Serenity.StringEditor;
        AcnidLocation: Serenity.StringEditor;
        Meetingid: Serenity.LookupEditor;
        AcnidPhaseNo: Serenity.IntegerEditor;
        AcnidCreationdate: Serenity.StringEditor;
        MeetingidPlanedcloseddate: Serenity.DateEditor;
        Actualcomencementdate: Serenity.DateEditor;
        MeetingidAuditopeningmeetingdate: Serenity.DateEditor;
        Actualcompltedate: Serenity.DateEditor;
        ProcessOwner: Serenity.StringEditor;
        Functionalhead: Serenity.StringEditor;
        AcnidPeriodfrom: Serenity.StringEditor;
        AcnidPeriodto: Serenity.StringEditor;
        AcnidFromdate: Serenity.StringEditor;
        AcnidTodate: Serenity.StringEditor;
        Areaofscope: ScopeEditor;
        Exclusions: Serenity.StringEditor;
        Reasons: Serenity.StringEditor;
        inputfromauditee: InputfromauditeeEditor;
        Satisfactionrating: SatisfactionratingEditor;
        Observationpending: ObservationpendingEditor;
        Currentauditobservation: CurrentauditobservationEditor;
        Acnid: Serenity.IntegerEditor;
    }

    [['Sbu', () => Serenity.StringEditor], ['AcnidLocation', () => Serenity.StringEditor], ['Meetingid', () => Serenity.LookupEditor], ['AcnidPhaseNo', () => Serenity.IntegerEditor], ['AcnidCreationdate', () => Serenity.StringEditor], ['MeetingidPlanedcloseddate', () => Serenity.DateEditor], ['Actualcomencementdate', () => Serenity.DateEditor], ['MeetingidAuditopeningmeetingdate', () => Serenity.DateEditor], ['Actualcompltedate', () => Serenity.DateEditor], ['ProcessOwner', () => Serenity.StringEditor], ['Functionalhead', () => Serenity.StringEditor], ['AcnidPeriodfrom', () => Serenity.StringEditor], ['AcnidPeriodto', () => Serenity.StringEditor], ['AcnidFromdate', () => Serenity.StringEditor], ['AcnidTodate', () => Serenity.StringEditor], ['Areaofscope', () => ScopeEditor], ['Exclusions', () => Serenity.StringEditor], ['Reasons', () => Serenity.StringEditor], ['Acnid', () => Serenity.IntegerEditor;] ,['inputfromauditee', () => InputfromauditeeEditor], ['Satisfactionrating', () => SatisfactionratingEditor], ['Observationpending', () => ObservationpendingEditor], ['Currentauditobservation', () => CurrentauditobservationEditor]].forEach(x => Object.defineProperty(AodForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

