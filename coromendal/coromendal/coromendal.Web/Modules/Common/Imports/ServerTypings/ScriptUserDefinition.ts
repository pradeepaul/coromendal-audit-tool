namespace coromendal {
    export interface ScriptUserDefinition {
        Username?: string
        DisplayName?: string
        Permissions?: { [key: string]: boolean }
    }
}

