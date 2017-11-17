
namespace coromendal.ACN
{
    /// <summary>
    /// This class contains some permission key constants solely for
    /// easy access and intellisense purposes.
    /// 
    /// Please note that adding a permission here won't show it
    /// in user permissions dialog. In fact, Serenity doesn't
    /// care about this class at all.
    /// 
    /// To show a new permission in user/role permission dialog, just use
    /// its string key with ReadPermission / ModifyPermission / 
    /// DeletePermission / PageAuthorize / ServiceAuthorize etc. attributes 
    /// and Serenity will auto discover them at application start.
    /// 
    /// Permission tree hierarchy in dialog is determined by colons (:)
    /// in permission keys.
    /// </summary>

   
    public class PermissionKeys
    {
        public class Acn
        {
            public const string Delete = "Acn:Delete";
            public const string Modify = "Acn:Modify";
            public const string View = "Acn:View";
        }

        public class AcnAuditee
        {
            public const string Delete = "AcnAuditee:Delete";
            public const string Modify = "AcnAuditee:Modify";
            public const string View = "AcnAuditee:View";
        }

        public class AcnAuditor
        {
            public const string Delete = "AcnAuditor:Delete";
            public const string Modify = "AcnAuditor:Modify";
            public const string View = "AcnAuditor:View";
        }

        public class AcnFeedback
        {
            public const string Delete = "AcnFeedback:Delete";
            public const string Modify = "AcnFeedback:Modify";
            public const string View = "AcnFeedback:View";
        }


        public class AcnFeedbackRetail
        {
            public const string Delete = "AcnFeedbackRetail:Delete";
            public const string Modify = "AcnFeedbackRetail:Modify";
            public const string View = "AcnFeedbackRetail:View";
        }

        public class Acnreport
        {
            public const string Delete = "Acnreport:Delete";
            public const string Modify = "Acnreport:Modify";
            public const string View = "Acnreport:View";
        }

        public class Auditobservation
        {
            public const string Delete = "Auditobservation:Delete";
            public const string Modify = "Auditobservation:Modify";
            public const string View = "Auditobservation:View";
        }

        public class conformation
        {
            public const string Delete = "conformation:Delete";
            public const string Modify = "conformation:Modify";
            public const string View = "conformation:View";
        }


        public class Keyfacts
        {
            public const string Delete = "Keyfacts:Delete";
            public const string Modify = "Keyfacts:Modify";
            public const string View = "Keyfacts:View";
        }

        public class riskrating
        {
            public const string Delete = "riskrating:Delete";
            public const string Modify = "riskrating:Modify";
            public const string View = "riskrating:View";
        }
        public class Rootcause
        {
            public const string Delete = "Rootcause:Delete";
            public const string Modify = "Rootcause:Modify";
            public const string View = "Rootcause:View";
        }

        public class MeetingAbsent
        {
            public const string Delete = "MeetingAbsent:Delete";
            public const string Modify = "MeetingAbsent:Modify";
            public const string View = "MeetingAbsent:View";
        }

        public class MeetingIssue
        {
            public const string Delete = "MeetingIssue:Delete";
            public const string Modify = "MeetingIssue:Modify";
            public const string View = "MeetingIssue:View";
        }

        public class MeetingPoints
        {
            public const string Delete = "MeetingPoints:Delete";
            public const string Modify = "MeetingPoints:Modify";
            public const string View = "MeetingPoints:View";
        }

        public class minutesofmeeting
        {
            public const string Delete = "minutesofmeeting:Delete";
            public const string Modify = "minutesofmeeting:Modify";
            public const string View = "minutesofmeeting:View";
        }

        public class Notes
        {
            public const string Delete = "Notes:Delete";
            public const string Modify = "Notes:Modify";
            public const string View = "Notes:View";
        }

        public class scope
        {
            public const string Delete = "scope:Delete";
            public const string Modify = "scope:Modify";
            public const string View = "scope:View";
        }

        public class Suggestion
        {
            public const string Delete = "Suggestion:Delete";
            public const string Modify = "Suggestion:Modify";
            public const string View = "Suggestion:View";
        }


        public class Questions
        {
            public const string Delete = "Questions:Delete";
            public const string Modify = "Questions:Modify";
            public const string View = "Questions:View";
        }

        public class AOD
        {
            public const string Delete = "AOD:Delete";
            public const string Modify = "AOD:Modify";
            public const string View = "AOD:View";
        }
        public class DaRrelease
        {
            public const string Delete = "DaRrelease:Delete";
            public const string Modify = "DaRrelease:Modify";
            public const string View = "DaRrelease:View";
        }
        public class DarClarifications
        {
            public const string Delete = "DarClarifications:Delete";
            public const string Modify = "DarClarifications:Modify";
            public const string View = "DarClarifications:View";
        }
        public class MeetingAbsentauditee
        {
            public const string Delete = "MeetingAbsentauditee:Delete";
            public const string Modify = "MeetingAbsentauditee:Modify";
            public const string View = "MeetingAbsentauditee:View";
        }
        public class MeetingAbsentauditor
        {
            public const string Delete = "MeetingAbsentauditor:Delete";
            public const string Modify = "MeetingAbsentauditor:Modify";
            public const string View = "MeetingAbsentauditor:View";
        }

        public class satisfactionrating
        {
            public const string Delete = "satisfactionrating:Delete";
            public const string Modify = "satisfactionrating:Modify";
            public const string View = "satisfactionrating:View";
        }

        public class Observationpreviousaudit
        {
            public const string Delete = "Observationpreviousaudit:Delete";
            public const string Modify = "Observationpreviousaudit:Modify";
            public const string View = "Observationpreviousaudit:View";
        }

        public class observationpending
        {
            public const string Delete = "observationpending:Delete";
            public const string Modify = "observationpending:Modify";
            public const string View = "observationpending:View";
        }

        public class currentauditobservation
        {
            public const string Delete = "currentauditobservation:Delete";
            public const string Modify = "currentauditobservation:Modify";
            public const string View = "currentauditobservation:View";
        }

        public class finalobservation
        {
            public const string Delete = "finalobservation:Delete";
            public const string Modify = "finalobservation:Modify";
            public const string View = "finalobservation:View";
        }

       





        public const string General = "ACN:General";
    }
}
