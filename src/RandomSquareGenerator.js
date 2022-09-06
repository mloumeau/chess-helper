export default function randomSquareGenerator() {

    function getRandoms(array){
        return array[Math.floor(Math.random()*array.length)]
    }
    
  return (
    getRandoms("abcdefgh") + getRandoms("12345678")
  );
}