import { useEffect } from "react"
import { useDashboardApi } from "../api/use-dashboard"

export const useDashboard = ()=>{
    const {getUserData} = useDashboardApi()

    useEffect(()=>{
        getUserData()
    },[])
    return {}
}