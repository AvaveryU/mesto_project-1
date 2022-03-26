const apiConfig = {
  baseURL: "https://nomoreparties.co/v1/plus-cohort7",
  headers: {
    authorization: "bb6ff8a2-6249-481e-b654-c07491020021",
    "Content-Type": "application/json",
  },
};
//функция проверки ответа сервера на запрос
export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}
//функция получения данных о карточках
export const getInitialCards = () => {
  return fetch(`${apiConfig.baseURL}/cards`, {
    headers: apiConfig.headers,
  }).then(checkResponse);
};
//функция получения данных пользователя
export const getUserInfo = () => {
  return fetch(`${apiConfig.baseURL}/users/me`, {
    headers: apiConfig.headers,
  }).then(checkResponse);
};
//функция для получения/редактирования данных профиля
export const patchProfile = (name, about) => {
  return fetch(`${apiConfig.baseURL}/users/me`, {
    method: "PATCH",
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then(checkResponse);
};
//функция для получения/редактирования фото аватара
export const patchAvatar = (avatar) => {
  return fetch(`${apiConfig.baseURL}/users/me/avatar`, {
    method: "PATCH",
    headers: apiConfig.headers,
    body: JSON.stringify({
      avatar: avatar,
    }),
  }).then(checkResponse);
};
//функция добавления новой карточки
export const postNewCard = (name, link) => {
  return fetch(`${apiConfig.baseURL}/cards`, {
    method: "POST",
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then(checkResponse);
};
//функция удаления новой карточки
export const deleteCard = (card) => {
  return fetch(`${apiConfig.baseURL}/cards/${card}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  }).then(checkResponse);
};
//функция для обозначения лайка
export const putLikeOnCard = (card) => {
  return fetch(`${apiConfig.baseURL}/cards/likes/${card}`, {
    method: "PUT",
    headers: apiConfig.headers,
  }).then(checkResponse);
};
//функция для удаления лайка
export const deleteLikeOnCard = (card) => {
  return fetch(`${apiConfig.baseURL}/cards/likes/${card}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  }).then(checkResponse);
};
