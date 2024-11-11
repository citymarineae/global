import { Metadata } from "next"
import apiService from "services/api"

type HomeAboutData = {
    homeabout:HomeAboutDataType[]
  }
  
  type HomeAboutDataType = {
    id: string
    title: string
    content: string
    image: string
    metaDataTitle:string
    metaDataDesc:string
  }
  

export async function generateMetadata(): Promise<Metadata>{
    console.log("Here")
    const data:HomeAboutData = await apiService.get("/home-about");
  
    // Assuming you want to use the first item's metadata for this example
    const metadataTitle = data.homeabout[0]?.metaDataTitle || "Default Title";
    const metadataDescription = data.homeabout[0]?.metaDataDesc || "Default description";
      
    return {
      title: metadataTitle,
      description: metadataDescription,
    };
    
  }