import React from 'react'

function CustomerLevel() {
  return (
    <div >

<div class="tree" >
        <ul >
          <li>
            <a href="#">Node1<br />(A)</a>
            <ul>
              <li>
                <a href="#">Node2<br />(B)</a>
                <ul>
                  <li>
                    <a href="#">Node 2.1<br />(D)</a>
                    <ul>
                      <li>
                        <a href="#">Node 2.1.1<br />(H)</a>
                      </li>
                      <li>
                        <a href="#">Node 2.1.2<br />(I)</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Node 2.2<br />(E)</a>
                    <ul>
                      <li>
                        <a href="#">Node 2.2.1<br />(J)</a>
                      </li>
                      <li>
                        <a href="#">Node 2.2.2<br />(K)</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Node 3<br />(C)</a>
                <ul>
                  <ul>
                    <li>
                      <a href="#">Node 3.1<br />(F)</a>
                      <ul>
                        <li>
                          <a href="#">Node 3.1.1<br />(K)</a>
                        </li>
                        <li>
                          <a href="#">Node 3.1.2<br />(L)</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Node 3.2<br />(G)</a>
                      <ul>
                        <li>
                          <a href="#">Node 3.2.1<br/>(M)</a>
                        </li>
                        <li>
                          <a href="#">Node 3.2.2<br/>(N)</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>  
    </div>
  )
}

export default CustomerLevel
