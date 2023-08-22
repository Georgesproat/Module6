function SingleCat({ cat }) {
  return (
    <div className="single-cat">
      <h2>{cat.name}</h2>
      <p>{cat.latinName}</p>
      <img className="cat-image" src={cat.image} alt={cat.name} />
    </div>
  );
}

export default SingleCat;
