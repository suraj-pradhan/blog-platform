const config = {
  appwriteKey: String(process.env.NEXT_APPWRITE_KEY),
  appwriteEndpoint: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT),
  appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(process.env.NEXT_PUBLIC_BATABASE_ID),
  appwriteCollectionId: String(process.env.NEXT_PUBLIC_COLLECTION_ID),
  appwriteBucketId: String(process.env.NEXT_PUBLIC_BUCKET_ID),
};

export default config;
