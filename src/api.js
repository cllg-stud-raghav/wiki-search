export const search= async (searchTerm)=>{
    console.log("search fn...")
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&format=json&origin=*`
    const response= await fetch(url);
    const result = await response.json();
    console.log(result.query.search);
    return result.query.search;
}