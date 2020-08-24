import React from 'react'
import { Button} from 'react-bootstrap';


export const Home = () => (

        <div>
            <form>
                <h1>
                    Bedrooms?
                </h1>
                <label>
                1: <span>&nbsp;&nbsp;</span>
                <input
                    name="1bed"
                    type="checkbox"
                    />
                    <span>&nbsp;&nbsp;</span>
                </label>


                <label>
                2: <span>&nbsp;&nbsp;</span>
                <input
                    name="2bed"
                    type="checkbox"
                    />
                </label>
                <br />

                <label>
                3: <span>&nbsp;&nbsp;</span>
                <input
                    name="3bed"
                    type="checkbox"
                    />
                    <span>&nbsp;&nbsp;</span>
                </label>


                <label>
                4: <span>&nbsp;&nbsp;</span>
                <input
                    name="4bed"
                    type="checkbox"
                    />
                </label>
                <br />

                <h1>
                    Minimum Price?
                </h1>
                <label>
                Minimum Price: <span>&nbsp;&nbsp;</span>
                <input
                    name="minPrice"
                    type="number"
                    />
                </label>

                <h1>
                    Maximum Price?
                </h1>
                <label>
                Maximum Price: <span>&nbsp;&nbsp;</span>
                <input
                    name="maxPrice"
                    type="number"
                    />
                </label>
                <br />
                <Button variant="outline-primary">Find Apartments!</Button>{' '}
            </form>

        </div>
)