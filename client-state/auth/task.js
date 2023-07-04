// Функция для обновления состояния блоков (вход/приветствие)
function updateBlocks() {
  const signinBlock = document.getElementById('signin');
  const welcomeBlock = document.getElementById('welcome');
  const userSpan = document.getElementById('user_id');
  
// Проверяем наличие информации о пользователе в локальном хранилище
  const userId = localStorage.getItem('user_id');
  if (userId) {
// Если инф.есть, показываем блок приветствия с идентификатором    
    signinBlock.classList.remove('signin_active');
    welcomeBlock.classList.add('welcome_active');
    userSpan.textContent = userId;
  } else {
    // Если информации нет, показываем блок авторизации
    signinBlock.classList.add('signin_active');
    welcomeBlock.classList.remove('welcome_active');
  }
}

//Функция для обработки отравки формы авторизации
function submitForm(event) {
  event.preventDefault();

  const form = document.getElementById('signin__form');
  const loginInput = form.querySelector('input[name="login"]');
  const passwordInput = form.querySelector('input[name="password"]')
// Получаем данные из полей формы
  const login = loginInput.value;
  const password = passwordInput.value;
// Отправляем AJAX-запрос на сервер для авторизации
  fetch(form.action, {
    method: 'POST',
    body: JSON.stringify({ login, password}),
    headers: {
      'Content-Type': 'application/json',
      },
    })
      .then (response => response.json())
      .then(data => {
      if (data.sucsess) {
// Если авторизация успешна, сохраняем идентификатор пользователя
    const userId = data.user_id;
    localStorage.setItem('user id', userId);
// Обновляем состояние блоков
    updateBlocks();
    } else {
    alert('Неверный логин/пароль');
// Если авторизация не удалась, выводим сообщение об ошибке
    }
    })
    .catch(error => {
      console.error('Ошибка при авторизации:', error);
      alert('Произошла ошибка при авторизации');
    });
// Очищаем поля формы
    form.reset();
    }
// Обработчик события отправки формы
    const signinForm = document.getElementById('signin__form');
    signinForm.addEventListener('submit', submitForm);
// Обновляем состояние блоков при загрузке страницы
    window.addEventListener('load', updateBlocks);


