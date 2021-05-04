import React from 'react';
import '../footer/footer.css'

const Footer=() =>{
        return(
            <div>
                <footer className="text-center py-3" id="footerstyle" style={{fontSize:'20px'}}>
                    <p> © 2021 My Resume. All rights reserved </p>
                    <p> <span> Created By </span>  <span id="nameedit"> Ruchika Agarwal... </span> </p>
                  
                </footer>
            </div>
        )
    
}

export default Footer ;