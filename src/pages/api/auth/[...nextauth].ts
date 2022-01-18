import { query } from "faunadb";

import NextAuth, { Account, Profile, User } from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { fauna } from "../../../services/fauna";

interface SignInProps {
  user: User;
  account: Account;
  profile: Profile;
  email: {
    verificationRequest?: boolean;
  };
}

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          scope: "read:user",
        },
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.JWT_SIGNING_PRIVATE_KEY,
  callbacks: {
    async signIn({ user, account, profile }: SignInProps): Promise<boolean> {
      const { email } = user;

      try {
        await fauna.query(
          query.If(
            query.Not(
              query.Exists(
                query.Match(
                  query.Index("user_by_email"),
                  query.Casefold(user.email)
                )
              )
            ),
            query.Create(query.Collection("users"), { data: { email } }),
            query.Get(
              query.Match(
                query.Index("user_by_email"),
                query.Casefold(user.email)
              )
            )
          )
        );

        return true;
      } catch(err) {
        return false;
      }
    },
  },
});
