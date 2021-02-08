const searchFood = () => {
    const searchText = document.getElementById('search-food').value
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=#{searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}