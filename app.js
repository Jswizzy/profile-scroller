const data = [
    {
        name: 'Jan Doe',
        age: 32,
        gender: 'female',
        lookingfor: 'male',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/women/24.jpg'
    },
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/24.jpg'
    },
    {
        name: 'Jaimie Smith',
        age: 32,
        gender: 'female',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/women/14.jpg'
    }
];

function* profileIterator(profiles) {
    let nextIndex = 0;
    while (true) {
        nextIndex = (nextIndex + 1 < profiles.length) ? nextIndex + 1 : 0;
        yield profiles[nextIndex];
    }
}

const profiles = profileIterator(data);

nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
    const curr = profiles.next().value;
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${curr.name}</li>
        <li class="list-group-item">Age: ${curr.age}</li>
        <li class="list-group-item">location: ${curr.location}</li>
        <li class="list-group-item">Preferences: ${curr.gender} looking for ${curr.lookingfor}</li>
    </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${curr.image}" alt="${curr.name}'s picture">`
}
