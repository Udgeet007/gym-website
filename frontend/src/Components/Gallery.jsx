
export const Gallery = () => {
  const gallery =["/img1.jpeg","/img2.jpeg","img3.jpg","img3.webp","img4.webp","img5.webp","img6.jpeg","img7.webp","img8.webp"];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {
            gallery.slice(0,3).map((element,index)=>(
              <img key={index} src={element} alt="galleryImage" />
            ))
          }
        </div>
        <div>
          {
            gallery.slice(3,6).map((element,index)=>(
              <img key={index} src={element} alt="galleryImage" />
            ))
          }
        </div>
        <div>
          {
            gallery.slice(6,9).map((element,index)=>(
              <img key={index} src={element} alt="galleryImage" />
            ))
          }
        </div>
      </div>
    </section>
  )
}
