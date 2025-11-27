export async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=8');
    return await response.json();
}

export async function getPhotos() {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=8');
    return await response.json();
}