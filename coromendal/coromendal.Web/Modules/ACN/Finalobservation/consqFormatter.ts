namespace coromendal.ACN {

    @Serenity.Decorators.registerFormatter()
    export class consqFormatter implements Slick.Formatter {
       
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as number;
            if (!idList)
                return "";
            var name = "";
            var byId = RiskratingRow.getLookup().itemById;
            for (var key in byId) {

                if (idList == byId[key].Riskratingid) {
                    name = byId[key].Riskratingname;
                }
            }
            return name;
        }
    }
}