function SingleCat({ cat, onDelete }) {
  return (
    <div className="single-cat">
      <h2>{cat.name}</h2>
      <p>{cat.latinName}</p>
      <img className="cat-image" src={cat.image} alt={cat.name} />
      <button onClick={() => onDelete(cat.id)}>Delete</button>
    </div>
  );
}

export default SingleCat;
