import './Characters.css'
import { Link } from 'react-router-dom'
import CharTabs from "../shared/includes/CharTabs";

function Characters() {
  // return (
  //   <main id="main_area">
  //       <div className="wrapper">
  //           <div className="Characters">
  //             <h1 className='charTitle'>Characters</h1>

  //               <div className='Char_Nav'>

  //               </div>

  //               <ul className="char_con">
  //                   <li><Link to="/characters/1"><img src="../images/characters/bedo.png" alt="" /><h2>Name Here</h2><Link/></Link></li>
  //                   <li><Link to="/characters/2"><img src="../images/characters/lanie.png" alt="" /><h2>Name Here</h2></Link></li>
  //                   <li><Link to="/characters/3"><img src="../images/characters/tine.png" alt="" /><h2>Name Here</h2></Link></li>
  //                   <li><Link to="/characters/4"><img src="../images/characters/benji.png" alt="" /><h2>Name Here</h2></Link></li>
  //                   <li><Link to="/characters/5"><img src="../images/characters/carmz.png" alt="" /><h2>Name Here</h2></Link></li>
  //                   <li><Link to="/characters/6"><img src="../images/characters/chely.png" alt="" /><h2>Name Here</h2></Link></li>
  //                   <li><Link to="/characters/7"><img src="../images/characters/desire.png" alt="" /><h2>Name Here</h2></Link></li>
  //                   <li><Link to="/characters/8"><img src="../images/characters/jeezer.png" alt="" /><h2>Name Here</h2></Link></li>
  //                   <li><Link to="/characters/9"><img src="../images/characters/joan.png" alt="" /><h2>Name Here</h2></Link></li>
  //                   <li><Link to="/characters/10"><img src="../images/characters/kim.png" alt="" /><h2>Name Here</h2></Link></li>
  //                   <li><Link to="/characters/11"><img src="../images/characters/lovely.png" alt="" /><h2>Name Here</h2></Link></li>
  //                   <li><Link to="/characters/12"><img src="../images/characters/mon.png" alt="" /><h2>Name Here</h2></Link></li>
  //                   <li><Link to="/characters/13"><img src="../images/characters/thel.png" alt="" /><h2>Name Here</h2></Link></li>
  //               </ul>
  //           </div>
  //       </div>
  //     </main>
  // )


    return (
      <main id="main_area">
         <div className="wrapper">
           <div className="Characters">
              <h1 className='charTitle'>Characters</h1>
              <CharTabs>
                <div label="Main Companions">
                  <ul className="char_con">
                      <li><Link to="/characters/1"><img src="../images/characters/bedo.png" alt="" /><h2>Name Here</h2><Link/></Link></li>
                      <li><Link to="/characters/2"><img src="../images/characters/lanie.png" alt="" /><h2>Name Here</h2></Link></li>
                      <li><Link to="/characters/3"><img src="../images/characters/tine.png" alt="" /><h2>Name Here</h2></Link></li>
                      <li><Link to="/characters/4"><img src="../images/characters/benji.png" alt="" /><h2>Name Here</h2></Link></li>
                      <li><Link to="/characters/5"><img src="../images/characters/carmz.png" alt="" /><h2>Name Here</h2></Link></li>
                      <li><Link to="/characters/6"><img src="../images/characters/chely.png" alt="" /><h2>Name Here</h2></Link></li>
                      <li><Link to="/characters/7"><img src="../images/characters/desire.png" alt="" /><h2>Name Here</h2></Link></li>
                      <li><Link to="/characters/8"><img src="../images/characters/jeezer.png" alt="" /><h2>Name Here</h2></Link></li>
                      <li><Link to="/characters/9"><img src="../images/characters/joan.png" alt="" /><h2>Name Here</h2></Link></li>
                      <li><Link to="/characters/10"><img src="../images/characters/kim.png" alt="" /><h2>Name Here</h2></Link></li>
                      <li><Link to="/characters/11"><img src="../images/characters/lovely.png" alt="" /><h2>Name Here</h2></Link></li>
                      <li><Link to="/characters/12"><img src="../images/characters/mon.png" alt="" /><h2>Name Here</h2></Link></li>
                      <li><Link to="/characters/13"><img src="../images/characters/thel.png" alt="" /><h2>Name Here</h2></Link></li>
                  </ul>
                </div>
                <div label="Apps Guild">
                  Apps Guild hHere...
                </div>
                <div label="The Devoids">
                  The Devoids here...
                </div>
                <div label="Supporting Characters">
                  Supporting characters here...
                </div>
              </CharTabs>
            </div>
          </div>
        </main>
    );

}

export default Characters
