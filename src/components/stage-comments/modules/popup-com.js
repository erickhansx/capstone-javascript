// function comment (item) {
//     document.getElementById(item).addEventListener('click', () => {
//         const data = {
//             "item_id": item,
//             "userName": item,
//             "comment": item,
//         }

//         fetch('https://www.breakingbadapi.com/api/characters?limit=12&offset=0', {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {'content-type': 'application/json; charset-UTF-8'},
//         })
//         .then((response) => response.json())
//         .then((json) => console.log(json))
//         .catch((err) => console.log(err));
//     })
// }