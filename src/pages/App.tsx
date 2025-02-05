import { useTranslation } from "react-i18next";
import { useState } from 'react'

import '../styles/components/App.scss'
import Header from "../components/Header";

export default function App() {
  // const { i18n, t } = useTranslation();

  return (
    <main>
      <Header/>
      <section id="main" style={{'scrollSnapAlign': 'start', 'gap': '2rem', 'width': '100%', 'height': '100vh', 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'start', 'overflowY': 'scroll',}}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
        </p>
        <p id="about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iusto excepturi eligendi, illo consequatur vel, aspernatur nemo non, unde consequuntur cupiditate distinctio neque aperiam ratione hic rerum repudiandae nesciunt repellat!
        </p>
      </section>
    </main>
  )
}