
import './animal.css';
const AnimalCard = ({name , scientificName , size , diet ,showAdditional,additional}) => (
    <div className="animal-wrapper">
        <h1>{name}</h1>
        <p>{scientificName}</p>
        <h4>{size}kg</h4>
        <div>{diet.join(', ')}.</div>
        <button onClick={() => showAdditional(additional)}>more info</button>
    </div>
)
export default AnimalCard