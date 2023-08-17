
const apiURL = 'http://localhost:3001';


async function apiCall<T>(url: string, method: string, body?: any): Promise<T>{ 
    return await fetch(`${apiURL}${url}`,
    {
        method,    
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'authKey',
        },
        body: JSON.stringify(body) 
    })
    .then(response => {
        return response.json();
    })
    .catch(error => { return error; });
}




export {apiCall};