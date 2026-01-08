import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service {
  Client = new Client();
  databases;
  bucket;  

  constructor() {
    this.Client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.databases = new Databases(this.Client);
    this.bucket = new Storage(this.Client);
  }

  async createPost({title, slug, content, featuredImage, status, userId}) {
    try {
      return await this.tablesDB.createRow({
            databaseId: config.appwriteDatabaseId,
            tableId: config.appwriteCollectionId,      // <-- Renamed from 'collectionId'
            rowId: slug,       // <-- Renamed from 'documentId'. Use ID.unique()!
            data: {
                title,
                                 // <-- Added the slug you were missing
                content,
                featuredImage,
                status,
                userId,
            }
        });   
    } catch (error) {
        console.log("Error creating post:", error);
    }

  }

  async updatePost(slug, {title, content, featuredImage, status}) {
    try {
      return await this.tablesDB.updateRow({
            databaseId: config.appwriteDatabaseId,
            tableId: config.appwriteCollectionId,      // <-- Renamed from 'collectionId'
            rowId: slug,       // <-- Renamed from 'documentId'. Use ID.unique()!
            data: {
                title,
                                 // <-- Added the slug you were missing
                content,
                featuredImage,
                status,
                
            }
        });   
    } catch (error) {
      console.log("Error updating post:", error);
    }

  }

  async deletePost(slug) {
    try {
      await this.tablesDB.deleteRow({
            databaseId: config.appwriteDatabaseId,
            tableId: config.appwriteCollectionId,      // <-- Renamed from 'collectionId'
            rowId: slug,       // <-- Renamed from 'documentId'. Use ID.unique()!
        }); 
        return true;  
    } catch (error) {
      console.log("Error deleting post:", error);
      return false;
    } 
  }

  async getPost(slug) {
    try {
      return await this.tablesDB.getRow({
            databaseId: config.appwriteDatabaseId,
            tableId: config.appwriteCollectionId,      // <-- Renamed from 'collectionId'
            rowId: slug,       // <-- Renamed from 'documentId'. Use ID.unique()!
        });
    } catch (error) {
      console.log("Error getting posts:", error);
      return false;
    }
    
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listRows({
            databaseId: config.appwriteDatabaseId,
            tableId: config.appwriteCollectionId, 
            queries     // <-- Renamed from 'collectionId'
        });
        return response.rows;
    } catch (error) {
      console.log("Error getting posts:", error);
      return false;
    }
  }

  // file upload service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(      
            config.appwriteBucketId,
            ID.unique(),
            file
        );
        return response;
    } catch (error) {
      console.log("Error uploading file:", error);
      return false;
    } 
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
            config.appwriteBucketId,
            fileId
        );
        return true;
    } catch (error) {
      console.log("Error deleting file:", error);
      return false;
    }   
  }

  async getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        );
    } catch (error) {
      console.log("Error getting file preview:", error);
      return false;
    }
  }

}


const service = new Service();


export default service;