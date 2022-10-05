import React,{Component} from "react";
import Card from "../Card/CardUI";
import img1 from "../../assets/index1.jpeg";
import img2 from "../../assets/index2.jpeg";
import img3 from "../../assets/index3.jpeg";

class liveCards3 extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                <div className="col-lg-3">
                        <Card imgsrc={img1} title="Card 1" 
                         text="New York, often called New York City (NYC) to distinguish it from the State of New York, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles 778.2 , New York City is also the most densely populated major city in the United States."/>
                    </div>
                    <div className="col-lg-3">
                        <Card imgsrc={img1} title="Card 1" 
                         text="New York, often called New York City (NYC) to distinguish it from the State of New York, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles 778.2 , New York City is also the most densely populated major city in the United States."/>
                    </div>
                    <div className="col-lg-3">
                        <Card imgsrc={img1} title="Card 1" 
                         text="New York, often called New York City (NYC) to distinguish it from the State of New York, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles 778.2 , New York City is also the most densely populated major city in the United States."/>
                    </div>
                    <div className="col-lg-3">
                        <Card imgsrc={img1} title="Card 1" 
                         text="New York, often called New York City (NYC) to distinguish it from the State of New York, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles 778.2 , New York City is also the most densely populated major city in the United States."/>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default liveCards3;