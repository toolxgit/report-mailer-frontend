import React from 'react'
import { Card } from '@shopify/polaris'
function CardComponent(props) {
    return (
        <div className="card-box">
            <Card sectioned >
                <div >
                    <div className="img-container-dashboard"><img src={props.image} />
                    <h2 >{props.name}</h2>    
                     </div> 
                    
                    <p >$24,68000.00</p>
                </div>

            </Card>
        </div>
    )
}
export default CardComponent