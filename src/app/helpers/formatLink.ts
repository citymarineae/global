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

    // console.log(name.replace(/&/g, '-')    // Replace ampersand with 'and'
    // .replace(/,/g, '')                  // Remove commas
    // .replace(/’/g, '-')                  // Replace apostrophe with hyphen
    // .replace(/ +/g, '-')                 // Replace multiple spaces with a single hyphen
    // .replace(/-+/g, '-')                 // Replace consecutive hyphens with a single hyphen
    // .toLowerCase()                       // Convert everything to lowercase
    // .trim()); 


    return name.replace(/&/g, '-')
    .replace(/,/g, '')                  
    .replace(/’/g, '-')                  
    .replace(/ +/g, '-')                 
    .replace(/-+/g, '-')                 
    .toLowerCase()                       
    .trim()
        
    // Optional: convert to lowercase
};