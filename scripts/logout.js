const logout = () => {
    sessionStorage.clear();
    window.location.href = "./";
    return;
}