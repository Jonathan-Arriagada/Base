import React from "react";
import CombosItem from "./CombosItem"


function CombosList({ combos }) {
  return (
    <>
      {combos.map(thiscombo => {
        return (
          <>
          <CombosItem combo={thiscombo} key={thiscombo.id}/>
          </>
        )   
      })
      }
    </>
  )
}

export default CombosList;
