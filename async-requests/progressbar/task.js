const progress = document.getElementById('progress');
const form = document.getElementById('form');

function handleEvent(e) {
  const loader = e.loaded / e.total;
  progress.value = loader
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  const formData = new FormData(form);
  xhr.upload.addEventListener('progress', handleEvent)
  xhr.open(
    'POST', 
    'https://students.netoservices.ru/nestjs-backend/upload'
  );
  xhr.send(formData);
})

