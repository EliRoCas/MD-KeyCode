import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getCharacterById } from "../services/apiService";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ProductDetails = () => {
  const { id } = useParams();
  const query = useQuery();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    (async () => {
      setCharacter(await getCharacterById(id));
    })();
  }, [id]);

  if (!character) return <p>Loading...</p>;

  const price = query.get("price") || "Precio no disponible";

  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.img} alt={character.name} />
      <p>Estatus: {character.status}</p>
      <p>Especie: {character.species}</p>
      <p>Precio: {price} COP </p>
    </div>
  );
};

export default ProductDetails;
