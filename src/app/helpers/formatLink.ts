export const formatNameForURL = (name:string) => {
    return name
        .replace(/,/g, '') // Replace commas with hyphens
        .replace(/ /g, '-')
        .replace(/\./g, '')
        .toLowerCase(); // Optional: convert to lowercase
};

export const formatNewsForUrl = (news:string) =>{
    return news
        .replace(/,/g, '') // Replace commas with hyphens
        .replace(/ /g, '-')
        .replace(/\./g, '')
        .replace(/’/g,'')
        .toLowerCase();
} 

export const formatMarineSectionForURL = (name:string) => {


    return name.replace(/&/g, '-')
    .replace(/,/g, '')                  
    .replace(/’/g, '-')
    .replace(/'/g, '')                    
    .replace(/ +/g, '-')                 
    .replace(/-+/g, '-')                 
    .toLowerCase()                       
    .trim()
        
};