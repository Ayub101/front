import React,{Component} from "react";
import Card from "../Card/CardUI";
import img1 from "../../assets/index1.jpeg";
import img2 from "../../assets/index2.jpeg";
import img3 from "../../assets/index3.jpeg";

class videoCards4 extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                <div className="col-lg-3">
                        <Card imgsrc={img3} title="Card 3"
                        text="A book is a medium for recording information in the form typically composed, The technical term for this physical arrangement is codex.for extended written compositions or records, the codex replaces its predecessor, the scroll"/>
                    </div>
                    <div className="col-lg-3">
                        <Card imgsrc={img2} title="Card 2" 
                        text="A vase is made from a number of materials, such as ceramics, non-rusting metals, such as aluminium, brass, bronze, or stainless steel. Even wood has been used to make vases, either by using tree species that naturally resist rot, such as teak, conventional wood"/>
                    </div>
                    <div className="col-lg-3">
                        <Card imgsrc={img1} title="Card 1" 
                         text="New York, often called New York City (NYC) to distinguish it from the State of New York, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles 778.2 , New York City is also the most densely populated major city in the United States."/>
                    </div> 
                    <div className="col-lg-3">
                        <Card imgsrc={img3} title="Card 3"
                        text="A book is a medium for recording information in the form typically composed, The technical term for this physical arrangement is codex.for extended written compositions or records, the codex replaces its predecessor, the scroll"/>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default videoCards4;