// level {1}


async function get_data() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    return data;
  }
  
  get_data().then(data =>{
    data //fetched data
  })