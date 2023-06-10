const breedSelect = document.getElementById('breedSelect');
const dogContainer = document.getElementById('dogContainer');

// Get the breed list
fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    const breeds = Object.keys(data.message);

    // Add breeds to the select dropdown
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed;
      option.textContent = breed;
      breedSelect.appendChild(option);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

document.getElementById('fetchButton').addEventListener('click', () => {
  const selectedBreed = breedSelect.value;

  if (selectedBreed) {
    const url = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.message;

        dogContainer.innerHTML = '';

        const dogImage = document.createElement('img');
        dogImage.src = imageUrl;
        dogImage.classList.add('dog-image');
        dogContainer.appendChild(dogImage);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
});

document.getElementById('random').addEventListener('click', () => {
  const url = 'https://dog.ceo/api/breeds/image/random/3';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const imageUrls = data.message;

      dogContainer.innerHTML = '';

      imageUrls.forEach(imageUrl => {
        const dogImage = document.createElement('img');
        dogImage.src = imageUrl;
        dogImage.classList.add('dog-image');
        dogContainer.appendChild(dogImage);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
