import { String, Schema } from "@teliagen/commons";

@Schema()
export class GreetInput {
    @String({ required: true })
    name!: string;
}

@Schema()
export class OutputSchema {
    @String({ required: true })
    message!: string;
}
