namespace coromendal {
    export interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        UserId?: number;
        RoleId?: number;
        Email?: string;
        Permissions?: { [key: string]: boolean };
    }
}

