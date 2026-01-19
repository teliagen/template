import { ActionProvider, Action, Res } from '@teliagen/commons';

@ActionProvider({
     module: 'hello',
     name: 'HelloActions'
})
export class HelloActions {

     @Action({
          name: 'HelloWorld',
          public: true,
          description: 'Returns a hello world message'
     })
     async helloWorld(): Promise<any> {
          return Res.ok({ message: 'Hello from Teliagen!' });
     }

     @Action({
          name: 'Greet',
          public: true,
          description: 'Returns a personalized greeting',
          input: {
               name: { type: 'string', required: true }
          }
     })
     async greet(input: { name: string }): Promise<any> {
          return Res.ok({ message: `Hello, ${input.name}!` });
     }
}
