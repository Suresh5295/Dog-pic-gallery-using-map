
import ReactDOM from 'react-dom/client';
import "./style.css"

import one from "./assets/images/2.jpg"
import two from "./assets/images/3.jpg"
import three from "./assets/images/4.jpg"
import four from "./assets/images/5.jpg"



const root = ReactDOM.createRoot(document.getElementById('root'));

var image =[one,two,three,four,two,three,four,one]
var title =["Bid Eyed Buggy","The Innocent Look",
"Bid Eyed Buggy","The Innocent Look",
"Bid Eyed Buggy","The Innocent Look",
"Bid Eyed Buggy","The Innocent Look"]
 
var ImageWithTitle = ({ image, title }) => (
  <div className='container' >
    <img src={image} alt={title} style={{width:"250px"}} />
    <h2>{title}</h2>
  </div>
);

root.render(

  <div className='ctr'>
    
    
      {image.map((image, index) => (
        <ImageWithTitle key={index} image={image} title={title[index]} />
      ))}
   
    

</div>);
