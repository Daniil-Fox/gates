import { validateForms } from "./../functions/validate-forms";
const rules1 = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
];

const afterForm = () => {
  const modalForm = (document.querySelector("[data-modal-form]").style.display =
    "none");
  const modalThanks = (document.querySelector(
    "[data-modal-thanks]"
  ).style.display = "block");
};

validateForms(".modal-form", rules1, afterForm);
