


function getSavedOption(action, callback) {
  chrome.storage.sync.get(action, value => {
    callback(chrome.runtime.lastError ? null : value);
  });
}

function saveOption(action, value) {
  chrome.storage.sync.set({action:value});
}

document.addEventListener('DOMContentLoaded', () => {
    var dropdown = document.getElementById('dropdown');

    getSavedOption("action", value => {
      if (value) {
        dropdown.value = value.action;
      }
    });
    dropdown.addEventListener('change', () => {
      saveOption("action", dropdown.value);
      document.getElementById('showMsg').style.display = "block";
    });
});
