namespace coromendal.Administration {

    @Serenity.Decorators.registerFormatter()
    export class UserFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as number;
            if (!idList)
                return "";
            var name = "";
            var byId = Administration.UserRow.getLookup().itemById;
            for (var key in byId) {
               
                if (idList == byId[key].UserId) {
                    name = byId[key].Username;
                }
            }
            return name ;
        }
    }
}