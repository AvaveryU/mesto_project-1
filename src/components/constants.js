//constants
export const popups = document.querySelectorAll(".popup");
//попап редактирования профиля и его элементы
export const popupEdit = document.querySelector('.popup_type_edit');
export const buttonProfile = popupEdit.querySelector('.form__button');
export const formElementProfile = popupEdit.querySelector(".form");
export const jobInput = formElementProfile.querySelector(".form__item_type_description");
export const nameInput = formElementProfile.querySelector(".form__item_type_name");
//попап добавления карточки и его элементы
export const popupAdd = document.querySelector(".popup_type_add");
export const buttonFormAdd = popupAdd.querySelector('.form__button');
export const formElementLocation = popupAdd.querySelector(".form");
export const inputElementLocation = formElementLocation.querySelector(".form__item_type_location");
export const inputElementLink = formElementLocation.querySelector(".form__item_type_link");
//попап редактирования аватара и его элементы
export const popupAvatar = document.querySelector(".popup_type_avatar");
export const buttonAvatarPhoto = popupAvatar.querySelector('.form__button');
export const formElementAvatar = popupAvatar.querySelector(".form_type_avatar");
export const avatarInput = formElementAvatar.querySelector(".form__item_type_avatar");
//попап подтверждения удаления карточки и его элементы
export const popupConfidence = document.querySelector(".popup__remove-card");
export const buttonConfidence = popupConfidence.querySelector('.form__button');
export const formConfidence = popupConfidence.querySelector(".form_type_remove-card");
//попап открытия изображения созданной карточки и его элементы
export const imageOpen = document.querySelector(".popup_type_image");
export const imageInPopup = imageOpen.querySelector(".popup__image");
export const imageOpeninPopup = imageOpen.querySelector(".popup__title");
export const imageClose = imageOpen.querySelector(".popup__close");
//кнопки на основной странице
export const buttonEdit = document.querySelector(".profile__button_act_edit");
export const buttonAdd = document.querySelector(".profile__button_act_add");
export const buttonAvatar = document.querySelector(".profile__button_act_avatar");
//секция с карточками
export const placeSection = document.querySelector(".places"); 
//элемент карточки
export const cardTemplate = document.querySelector("#card_template").content;
//элементы профиля
export const profileName = document.querySelector(".profile__name");
export const profileDescrip = document.querySelector(".profile__description");
export const profileImage = document.querySelector(".profile__image");

//объект настроек
export const validationConfig = {
    formSelector: '.form',
    inputSelector: '.form__item',
    submitButtonSelector: '.form__button',
    errorClass: 'form__item_type_active',
    inputErrorClass:'form__input-error',
    inactiveButtonClass: 'form__button_disabled',
  }
