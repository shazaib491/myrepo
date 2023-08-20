const getData=async()=>{
    const response=await fetch("http://localhost:3000/blogs");
    const json=await response.json();
    console.log(json);
}

getData();

console.log("sdjfnsdjkfk")