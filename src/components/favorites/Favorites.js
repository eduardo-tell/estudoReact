import { useState } from "react";
import CardProduct from "../card-product/CardProduct";
import { useSelector } from "react-redux";
import './styles.scss';
import ButtonCount from "../buttonCount/ButtonCount";

export default function Favorites() {
  const favorites = useSelector(state => state.favorites)

  return (
    <>
      <ButtonCount url="/favoritos" count={favorites?.length} name="Favoritos" />
      <div className="p-1 relative">
        <a className="p-2 bg-sky-400 rounded-lg text-white" href="/favoritos"> {favorites.length} Favoritos </a>
      </div>
    </>
  )
}
