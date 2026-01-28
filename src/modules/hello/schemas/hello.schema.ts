import { String } from "@teliagen/commons/validation/decorators";
import { Schema } from "@teliagen/commons/schemas/decorator";

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
