import axios from "axios"

export default async function user(){

    const res = await axios('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details')

    const data = res.data


    return <div>
        {data.name}
        {data.email}
    </div>
    
    
}