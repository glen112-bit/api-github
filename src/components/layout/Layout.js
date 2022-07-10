import React from "react"
import Header from '../../components/header/Header'
import * as S from "./styled"

function Layout({children}){
  return(
   <S.WrapperLayout>
     <Header />
     {children}
   </S.WrapperLayout>
    )
}

export default Layout
