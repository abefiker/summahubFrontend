import './App.css';
// import Instruction from './components/Instruction/Instructions';
import data from './components/App/data'
import AnimalCard from './components/AnimalCard/AnimalCard';
function App() {
  // const greeting = 'greeting';
  // const displayAction = false;
  // const handleClick = (e) => {
  //   alert(e.target.id)
  // }
  // const emojis = [
  //   {
  //     emoji: "😀",
  //     name: "grinning face"
  //   },
  //   {
  //     emoji: "🎉",
  //     name: "party popper"
  //   },
  //   {
  //     emoji: "💃",
  //     name: "woman dancing"
  //   }
  // ];
  return (
    // <div className="container">
    //   <h1 id={greeting}>Hello from SummaHub</h1>
    //   {displayAction && <p>listening music and coding is great isn't it?</p>}
    //   <Instruction />
    //   <ul>
    //     {
    //       emojis.map((item) => (
    //         <li key={item.name}>
    //           <button onClick={handleClick}>
    //             <span role="img" aria-label={item.name} id={item.name}>{item.emoji}</span>
    //           </button>
    //         </li>
    //       )
    //       )
    //     }
    //   </ul>
    // </div>
    <div className='wrapper'>
      <h1>Animals</h1>
      {data.map(animal => <AnimalCard additional={animal.additional}
        diet={animal.diet}
        key={animal.name}
        name={animal.name}
        scientificName={animal.scientificName}
        size={animal.size}
      />)}
    </div>
  );
}

export default App;
