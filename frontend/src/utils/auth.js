export const BASE_URL = 'https://api.romanovainna.students.nomoredomains.icu';

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
    })
        .then((response) => {
            return response.ok ? response.json() : Promise.reject(response.status)
        })
}

export const autorization = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
    })
        .then((response) => {
            return response.ok ? response.json() : Promise.reject(response.status)
        })
}

// export const logout = () => {
//     return fetch(`${BASE_URL}/signout`, {
//         method: 'GET',
//         credentials: 'include',
//     })
//         .then((response) => {
//             return response.ok ? response.json() : Promise.reject(response.status)
//         })
// }


export const restContent = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        credentials: 'include',
        // headers: {
        //     'Content-Type': 'application/json',
        //      'Authorization': `Bearer ${token}`,
        // }
    })
            .then((response) => {
                return response.ok ? response.json() : Promise.reject(response.status)
            })
    }