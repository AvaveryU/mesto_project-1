//функции для работы с карточками
import { closePopup, renderLoading} from "./utils.js";
import {popupAdd,
  inputElementLocation, inputElementLink, formElementLocation,
  validationConfig, placeSection, cardTemplate, buttonFormAdd} from './constants.js';
import { deleteLikeOnCard, putLikeOnCard, postNewCard } from "./api.js";
import { openPopupConfidence, openPopupImage } from "./modal.js";

//функция создания карточки (возвращает созданную разметку карточки)
export function cardCreate(card, userId) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardDescription = cardElement.querySelector(".card__description");
  const cardLike = cardElement.querySelector(".card__like");
  const cardLikeCounter = cardElement.querySelector(".card__like-counter"); //счетчик лайков
  cardImage.alt = card.name;
  cardImage.src = card.link;
  cardDescription.textContent = card.name;
  cardElement.id = card._id;
  cardLikeCounter.textContent = card.likes.length; //счетчик лайков
  //слушатель на лайк
  cardLike.addEventListener("click", () => {
    if (cardLike.classList.contains("card__like_pos_active")) {
      deleteLikeOnCard(card._id)
        .then((card) => {
          cardLikeCounter.textContent = card.likes.length;
          cardLike.classList.remove("card__like_pos_active");
        })
        .catch((error) => console.log(`Ошибка: ${error}`));
    } else {
      putLikeOnCard(card._id)
        .then((card) => {
          cardLikeCounter.textContent = card.likes.length;
          cardLike.classList.add("card__like_pos_active");
        })
        .catch((error) => console.log(`Ошибка: ${error}`));
    }
  });
  //слушатель на удаление карточки
  const cardTrash = cardElement.querySelector(".card__trash");
  if (card.owner._id !== userId) {
    cardTrash.remove();
  }
  //слушатель на удаление карточки
  cardTrash.addEventListener("click", () => openPopupConfidence(card._id));
  //слушатель на открытие попапа самой карточки
  cardImage.addEventListener("click", openPopupImage);
  return cardElement;
}
// функция добавления карточки в разметку
export function renderCard(card, userId, section) {
  section.prepend(cardCreate(card, userId));
};

//функция добавления карточки
export function addCard(event) {
  event.preventDefault();
  const locationValue = inputElementLocation.value;
  const linkValue = inputElementLink.value;
  renderLoading(true, buttonFormAdd);
  postNewCard(locationValue, linkValue)
    .then((result) => {
      renderCard(result, result.owner._id, placeSection);
      buttonFormAdd.disabled = true;
      buttonFormAdd.classList.add(validationConfig.inactiveButtonClass);
      formElementLocation.reset(); //очистить форму
      closePopup(popupAdd);
    })
    .catch((error) => console.log(`Ошибка: ${error}`))
    .finally(() => {
      renderLoading(false, buttonFormAdd);
    })
}