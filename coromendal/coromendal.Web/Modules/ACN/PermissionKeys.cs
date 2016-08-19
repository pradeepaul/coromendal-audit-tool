
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

        public class NewAcn
        {
            public const string Delete = "NewAcn:Delete";
            public const string Modify = "NewAcn:Modify";
            public const string View = "NewAcn:View";
        }

        public class AcnAuditee
        {
            public const string Delete = "AcnAuditee:Delete";
            public const string Modify = "AcnAuditee:Modify";
            public const string View = "AcnAuditee:View";
        }

        public class AcnAuditeeRef
        {
            public const string Delete = "AcnAuditeeRef:Delete";
            public const string Modify = "AcnAuditeeRef:Modify";
            public const string View = "AcnAuditeeRef:View";
        }

        public class AcnAuditorRef
        {
            public const string Delete = "AcnAuditorRef:Delete";
            public const string Modify = "AcnAuditorRef:Modify";
            public const string View = "AcnAuditorRef:View";
        }

        public class AcnAuditor
        {
            public const string Delete = "AcnAuditor:Delete";
            public const string Modify = "AcnAuditor:Modify";
            public const string View = "AcnAuditor:View";
        }

        public class Feedback
        {
            public const string Delete = "Feedback:Delete";
            public const string Modify = "Feedback:Modify";
            public const string View = "Feedback:View";
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

        public class Questions
        {
            public const string Delete = "Questions:Delete";
            public const string Modify = "Questions:Modify";
            public const string View = "Questions:View";
        }


        public const string General = "ACN:General";
    }
}
