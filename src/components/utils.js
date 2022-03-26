//утилитарные функции
import {handleEscDown} from './modal.js';
export function closePopup(popup) {
  popup.classList.remove("popup_opened"); 
  window.removeEventListener('keydown', handleEscDown);
};
//функция открытия попапа
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  window.addEventListener('keydown', handleEscDown);
}
//функция загрузки
export function renderLoading(isLoading, button) {
  if (isLoading) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = "Сохранить";
  }
}
//функция удаления
export function renderRemoving(isRemoving, button) {
  if (isRemoving) {
    button.textContent = "Удаление...";
  } else {
    button.textContent = "Да";
  }
}