import countriesListMarkup from "../templates/countriesList.hbs";
import fullCountryInfoMarkup from "../templates/fullCountryInfo.hbs";
import notifications from "./notification.js";
import refs from "./refs.js";

const { succsessNotification, presizeRequestNotification } = notifications;

const { countryList } = refs;

export default function fetchCountriesMarkup(data) {
  let markup;
  if (data.length < 10) {
    markup = countriesListMarkup(data);
  }
  if (data.length === 1) {
    markup = fullCountryInfoMarkup(data);
    succsessNotification();
  }
  if (data.length > 10) {
    presizeRequestNotification();
    return;
  }
  return countryList.insertAdjacentHTML("afterbegin", markup);
}
