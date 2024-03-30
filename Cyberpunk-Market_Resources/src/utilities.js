export function setUserData(data) {
    localStorage.setItem('user', JSON.stringify(data));
}
export function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}
export function clearUserData() {
    localStorage.removeItem('user');
}
export function createSubmitHandler(callback) {
    return function (e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = [...formData.entries()].map(([key, value]) => [key, value.trim()]);

        callback(Object.fromEntries(data), e.target);
    }
}

export function updateNavBar(){
    const userData = getUserData();

    document.querySelector('nav .guest').style.display = userData ? 'none' : 'block';
    document.querySelector('nav .user').style.display = userData ? 'block' : 'none';
    
}
