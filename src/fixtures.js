// FIXME: add some meaningful data
const pictures = [];

for(let i = 0; i < 5; i ++) {
     pictures.push("https://picsum.photos/200/300")
}

pictures.forEach(pic => {
   console.log(JSON.parse(JSON.stringify(pic))); //ok
});
export default pictures;
