"use server";
import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

  const session = await cookies().get("appwrite-session");
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

// Cache the admin client instance
let adminClient: Client | null = null;

export async function createAdminClient() {
  // Reuse existing client if available
  if (!adminClient) {
    console.time('client-init');
    adminClient = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
      .setKey(process.env.NEXT_APPWRITE_KEY!);
    console.timeEnd('client-init');
  }

  // Create service instances once
  const account = new Account(adminClient);
  const database = new Databases(adminClient);
  const users = new Users(adminClient);

  return {
    account,
    database,
    users
  };
}
