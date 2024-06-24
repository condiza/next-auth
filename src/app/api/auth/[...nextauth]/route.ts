import Nextauth from "next-auth";//importamos next-auth para la validacion
import GoogleProvider from "next-auth/providers/google"; //traemos el paquete de google para la autenticacion con google  

//objeto de autenticacion 
const handler = Nextauth({
    providers:[GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })],
});

export {handler as GET, handler as POST}