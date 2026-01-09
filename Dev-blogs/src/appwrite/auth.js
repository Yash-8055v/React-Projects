import { use } from "react";
import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  Client = new Client();
  account;

  constructor() { 
    this.Client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
      console.log("Appwrite Auth Client initialized with endpoint:", config.appwriteUrl);

      console.log("Project ID:", config.appwriteProjectId);

    
    this.account = new Account(this.Client);
    console.log("Appwrite Account service initialized.", this.account);
  }

    async createAccount({email, password, name}) {
      try {
        const userAccount = await this.account.create(
          ID.unique(),
          email,
          password,
          name
        );
        if (userAccount) {
          // call another method
          return await this.login({email, password});
        } else {
          return userAccount;
        }
      } catch (error) {
        console.log("Appwrite service :: createAccount :: error", error);
      }
    }

    async login({email, password}) {
      try {
          return await this.account.createEmailPasswordSession(
          email,
          password
        );
        
      } catch (error) {
        console.log("Appwrite service :: login :: error", error);
      }
    }

    async getCurrentUser() {
      try {
        console.log("Project ID:", import.meta.env.VITE_APPWRITE_PROJECT_ID);

        return await this.account.get();
      } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: error", error);
      }
      return null;
    };

    async logout() {
      try {
        return await this.account.deleteSessions( "current" ); 
      } catch (error) {
        console.log("Appwrite service :: logout :: error", error);
      }
    };
  
}

const authService = new AuthService();

export default authService;