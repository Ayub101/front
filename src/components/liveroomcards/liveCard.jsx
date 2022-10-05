import React,{Component} from "react";
import Card from "../Card/CardUI";
import img1 from "../../assets/index1.jpeg";
import img2 from "../../assets/index2.jpeg";
import img3 from "../../assets/index3.jpeg";

class liveCards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                <div className="col-lg-3">
                        <Card imgsrc={img2} title="Card 2" 
                        text="A vase is made from a number of materials, such as ceramics, non-rusting metals, such as aluminium, brass, bronze, or stainless steel. Even wood has been used to make vases, either by using tree species that naturally resist rot, such as teak, conventional wood"/>
                    </div>
                    <div className="col-lg-3">
                        <Card imgsrc={img2} title="Card 2" 
                        text="A vase is made from a number of materials, such as ceramics, non-rusting metals, such as aluminium, brass, bronze, or stainless steel. Even wood has been used to make vases, either by using tree species that naturally resist rot, such as teak, conventional wood"/>
                    </div>
                    <div className="col-lg-3">
                        <Card imgsrc={img2} title="Card 2" 
                        text="A vase is made from a number of materials, such as ceramics, non-rusting metals, such as aluminium, brass, bronze, or stainless steel. Even wood has been used to make vases, either by using tree species that naturally resist rot, such as teak, conventional wood"/>
                    </div>
                    <div className="col-lg-3">
                        <Card imgsrc={img2} title="Card 2" 
                        text="A vase is made from a number of materials, such as ceramics, non-rusting metals, such as aluminium, brass, bronze, or stainless steel. Even wood has been used to make vases, either by using tree species that naturally resist rot, such as teak, conventional wood"/>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default liveCards;