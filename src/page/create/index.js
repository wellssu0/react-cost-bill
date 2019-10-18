import React from 'react'

import ViewCategoryTab from '../../components/ViewCategoryTab'
import PriceForm from "../../components/PriceForm";
import CategoriesSelect from "../../components/CategoriesSelect";

const Create = props => {
  return(
    <div>
      <ViewCategoryTab/>
      <CategoriesSelect/>
      <PriceForm/>
    </div>
  )
}

export default Create