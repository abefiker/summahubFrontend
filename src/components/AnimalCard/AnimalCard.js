
const AnimalCard = ({name , scientificName , size , diet}) => (
    <div>
        <h1>{name}</h1>
        <p>{scientificName}</p>
        <h4>{size}kg</h4>
        <div>{diet.join(', ')}.</div>
    </div>
)
export default AnimalCard