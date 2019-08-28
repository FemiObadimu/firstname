const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
function titleCase(str) {
  str =str.toLowerCase() + ' ';
  let cache = '';
  let arr = [];
  for(let i = 0; i < str.length ; i++){
    if(str[i] != ' '  && i != str.length){
      cache += str[i];
    }else{
      cache = capitalize(cache);
      arr.push(cache);
      cache = ''
    }
  }
  str = ''
  for(let j = 0; j < arr.length ; j++){
    if(j != arr.length -1){
      str = str + arr[j] + ' ';
    }else{
      str = str + arr[j] + '.';
    }
  }
  console.log(str)
  return str;
}

titleCase('osahon is a boy')