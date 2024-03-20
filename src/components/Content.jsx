import { GalleryData } from "./GalleryData";
import { useEffect, useState } from "react";
import './tab.css'
function Content() {

  const [data,setData] = useState([]);
  const [collection,setCollection] = useState([]);

  useEffect(()=>{
    setData(GalleryData);
    setCollection([... new Set(GalleryData.map((item)=> item.titile))])
  },[]) 

  const gallery_filter = (itemData) =>{
    const filterData = GalleryData.filter((item)=> item.titile == itemData);
    setData(filterData);
  }

  return (
    <section>
    <div>
        <h4 style={{display:"flex",justifyContent:"center",opacity:"0.5"}}>Portfolio</h4>
        <p className="pfolio" style={{display:"flex",justifyContent:"center" ,fontWeight:"500",fontSize:"30px"}}>Check out our beautifull portfolio</p>
    </div>
     <div class="line"></div>

    <div className="App">
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li><a onClick={()=> setData(GalleryData)}>All</a></li>
            {
              collection.map((item)=> <li><a onClick={()=>{gallery_filter(item)}}>{item}</a></li>)
            }
          </ul>
        </div>
        <div className="galleryContainer">
          {
            data.map((item)=> <div  key={item.id} className="galleryItem"><img src={item.image  } /></div> )
          }
        </div>
      </div>
    </div>
    </section>
  );
}

export default Content;