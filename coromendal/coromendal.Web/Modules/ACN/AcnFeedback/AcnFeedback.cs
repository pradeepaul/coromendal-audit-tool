
using Serenity.ComponentModel;
using System.ComponentModel;
namespace coromendal.ACN.Scripts
{
    [EnumKey("ACN.Scripts.AcnFeedback")]
    public enum AcnFeedback
    {
        [Description("Film")]
        Film = 1,
        [Description("TV Series")]
        TvSeries = 2,
        [Description("Mini Series")]
        MiniSeries = 3
    }
}