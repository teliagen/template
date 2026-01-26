import { ActionProvider, Action, Res, Input, Output } from '@teliagen/commons';
import { GreetInput, OutputSchema } from '../schemas/hello.schema';

@ActionProvider({
     module: 'hello',
     name: 'HelloActions'
})
export class HelloActions {

     @Action({
          name: 'HelloWorld',
     })
     @Output(OutputSchema)
     async helloWorld() {
          return Res.json({ message: 'Hello from Teliagen!' });
     }

     @Action({
          name: 'Greet',
     })
     @Output(OutputSchema)
     async greet(@Input(GreetInput) input: GreetInput){
          return Res.json({ message: `Hello, ${input.name}!` });
     }
}
