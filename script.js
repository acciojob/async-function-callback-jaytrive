const url = "https://jsonplaceholder.typicode.com/posts/1";
const output=document.getElementById("output")
async function fetchData(){
	const res=await fetch("https://jsonplaceholder.typicode.com/posts/1");
	const data= await res.json();
	output.innerHTML=JSON.stringify(data);
}
//your JS code here. If required.
