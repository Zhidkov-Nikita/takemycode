// Получаем весь query string после знака ?
const queryString = window.location.search;

// Создаем объект для работы с параметрами URL
const urlParams = new URLSearchParams(queryString);

// Получаем значение параметра "code"
const code = urlParams.get('code');
const input = document.getElementById('CODE');

if (code !== null) {
  // Находим input по id и устанавливаем его значение
  if (input) {
    input.value = code;
  }
}else{
  if (input) {
    input.value = 'ошибка, вы не зарегались :(';
  }
}

const copy = document.getElementById('COPY');
copy.onclick = async function() {
  if (input) {
    try {
        await navigator.clipboard.writeText(input.value);
        copy.value = 'Текст скопирован в буфер обмена';
    } catch (err) {
        copy.value = 'Не удалось скопировать :(';
        alert(err);
    }
    // Снимаем выделение (необязательно)
    window.getSelection().removeAllRanges();
  }
};