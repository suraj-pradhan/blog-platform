import config from "../../config/config";
import { Client, Account, ID, Databases } from "node-appwrite";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(config.appwriteEndpoint)
    .setProject(config.appwriteProjectId);

  return {
    get database() {
      return new Databases(client);
    },
  };
}
