import { api, API_ENDPOINTS } from "@/app/src/services/api";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  debug: true,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {

        try {          
          const apiUrl = `${process.env.API_URL_V1}/${API_ENDPOINTS.auth.login}`;

          const { data } = await api.post(
            apiUrl,
            {
              email: credentials?.email,
              password: credentials?.password
            }
          );
    
          if (data.access_token) {
            return {
              id: data.user.id, // required
              name: data.user.name,
              email: data.user.email,
              accessToken: data.access_token,
              refreshToken: data.refresh_token,
            };
          }
          
        } catch (error: any) {
          const message = error?.message 
            || error?.response?.data?.message 
            || "Invalid credentials"; throw new Error(message);
        }

        return null;
      }

    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.id as string,
      };
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
