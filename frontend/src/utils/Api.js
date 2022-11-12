class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl
    // this._token = token;
    // this._cohort = cohort;
  }

  _request(path, method, info) {
    const pattern = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': this._token,
      },
      credentials: 'include',
    }

    return fetch(
      `${this._baseUrl}/${path}`,
      info ? { ...pattern, body: JSON.stringify(info) } : pattern
    )
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          Promise.reject(`ошибка: ${res.status}`)
        }
      })
  }

  getUserInfo() {
    return this._request('users/me', 'GET')
  }

  editUserInfo(userInfo) {
    return this._request('users/me', 'PATCH', userInfo)
  }

  editAvatar(avatarInfo) {
    return this._request('users/me/avatar', 'PATCH', avatarInfo)
  }

  getCards() {
    const pattern = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': this._token,
      },
      credentials: 'include',
    }

    return fetch(
      `${this._baseUrl}/cards`,
       pattern
    )
      .then(res => {
        if (res.ok) {
          console.log(res);
          return res.cards;
        } else {
          Promise.reject(`ошибка: ${res.status}`)
        }
      })
    // return this._request('cards', 'GET')
  }

  setNewCard(data) {
    return this._request('cards', 'POST', data)
  }

  changeLikeCardStatus(cardId, isLiked) {
    return this._request(`cards/likes/${cardId}`, isLiked? 'DELETE' : 'PUT') 
  }

  changeDeleteCardStatus(id) {
    return this._request(`cards/${id}`, 'DELETE')
  }
}
const newApi = new Api({
  baseUrl: 'https://api.romanovainna.students.nomoredomains.icu',
  // token: '6317d273-77cd-40e4-acd5-6cbb113af6b1',
  // cohort: 'cohort-47'
})

export default newApi