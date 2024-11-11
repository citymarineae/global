"use client"

import { createContext, useContext, useState } from "react";

export const MetaDataContext = createContext<any>(null)

export const useMetaData = () =>{
    return useContext(MetaDataContext)
}

export default function MetaDataContextProvider({children}:{children:React.ReactNode}){
    
    const [homeMetaData,setHomeMetaData] = useState({
        title:"",
        desc:""
    })

    return (
        <MetaDataContext.Provider value={{homeMetaData,setHomeMetaData}}>
            {children}
        </MetaDataContext.Provider>
    )
}   