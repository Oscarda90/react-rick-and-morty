const Character = ({ character }) => {
  const { name, image, origin: {name: nombre} } = character;
  return (
    <div className="text-center p-5">
      <h3>{name}</h3>
      <img className="img-fluid rounded-pill" src={image} alt={name} />
      <p>{nombre}</p>
    </div>
  );
};

export default Character;
