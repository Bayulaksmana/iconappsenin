import Credentials from "next-auth/providers/credentials";
 
export const authOptions={
    Session:{
        strategy: "jwt",
        MaxAge: 2 * 24 * 60 * 60, //2day
    },
    providers:
    [
        Credentials({
            type:"credentials",
            credentials:{
                email:{label: "E-Mail", type:"email", placeholder:"Enter your email IconPLN"},
                password:{label: "Password", type:"password", placeholder:"Entry your password.."},
            },
            async authorize (credentials){
                const {email, password}=credentials;
                if (email==="drive@iconpln" && password==="iconplus123"){
                    return {
                        Id: 1,
                        Email : email,
                        Username: "Admin Icon Plus",
                    }
                } else {
                    return null
                }
            }
        })

    ]
}