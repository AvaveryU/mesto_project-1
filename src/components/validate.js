//функциональность валидации форм

//функця валидации полей - показать ошибку
const showInputError = (inputElement, errorElement, errorMessage, validationConfig) => {
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationConfig.errorClass);
  inputElement.classList.add(validationConfig.inputErrorClass);
};
//функця валидации полей - скрыть ошибку
const hideInputError = (inputElement, errorElement, validationConfig) => {
  errorElement.textContent = '';
  errorElement.classList.remove(validationConfig.errorClass);
  inputElement.classList.remove(validationConfig.inputErrorClass);
};
//функция проверки валидности поля
const isValid = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`.form__item_type_error-${inputElement.id}`);
  const isInputValid = inputElement.validity.valid;
  if (!isInputValid) {
    const errorMessage = inputElement.validationMessage;
    showInputError(inputElement, errorElement, errorMessage, validationConfig);
  } else {
    hideInputError(inputElement, errorElement, validationConfig);
  }
};
//функция проверки наличия невалидного поля в форме
const hasInvalidInput = (inputListArray) => {
  return inputListArray.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true. Обход массива прекратится и вся фунцкция вернёт true
    return !inputElement.validity.valid;
  });
};

// функция для дезактивации кнопки в форме
export const toggleButtonState = (inputListArray, buttonElement, validationConfig) => {
  if (hasInvalidInput(inputListArray)) {
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  };
};
//добавление полям формы обработчиков
const setEventListeners = (formElement, validationConfig) => {
  const inputList = formElement.querySelectorAll(validationConfig.inputSelector);
  const inputListArray = Array.from(inputList);
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector); //кнопка в форме
  toggleButtonState(inputListArray, buttonElement, validationConfig);
  inputListArray.forEach(inputElement => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, validationConfig);
      toggleButtonState(inputListArray, buttonElement, validationConfig);
    });
  });
};
// включение валидации 
export const enableValidation = (validationConfig) => {
  const formList = document.querySelectorAll(validationConfig.formSelector);
  const formListArray = Array.from(formList);
  const handFormSumit = (event) => {
    event.preventDefault();
  };
  formListArray.forEach(formElement => {
    formElement.addEventListener("submit", handFormSumit);
    setEventListeners(formElement, validationConfig);
  });
};
