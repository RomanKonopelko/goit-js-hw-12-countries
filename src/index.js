import "./css/styles.css";
import getCountry from "./js/fetchCountries.js";
import notifications from "./js/notification.js";
import fetchCountriesMarkup from "./js/markup.js";
import refs from "./js/refs.js";
import debounce from "lodash.debounce";

const {
  errorNotification,
  noticeNotification,
  emptyNotification,
} = notifications;

const { input, countryList } = refs;

input.addEventListener("input", debounce(countryRequest, 1000));

noticeNotification();

function countryRequest() {
  countryList.innerHTML = "";
  const searchQuery = input.value;
  if (!searchQuery) {
    emptyNotification();
    return;
  }
  getCountry(searchQuery).then(fetchCountriesMarkup).catch(errorNotification);
}
