namespace coromendal.Administration {

    @Serenity.Decorators.registerFormatter()
    export class AdminListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as number;
            if (!idList)
                return "";
            var name = "";
            var byId = Administration.AdminstatusvalueRow.getLookup().itemById;
            for (var key in byId) {

                if (idList == byId[key].Adminstatusvalueid) {
                    name = byId[key].Value;
                }
            }
            return name;
        }
    }
}