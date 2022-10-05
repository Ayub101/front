import React,{Component} from "react";
import Card from "../Card/CardUI";
import img1 from "../../assets/index1.jpeg";
import img2 from "../../assets/index2.jpeg";
import img3 from "../../assets/index3.jpeg";

class liveCards2 extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                <div className="col-lg-3">
                        <Card imgsrc={img3} title="Card 3"
                        text="A book is a medium for recording information in the form typically composed, The technical term for this physical arrangement is codex.for extended written compositions or records, the codex replaces its predecessor, the scroll"/>
                    </div>
                    <div className="col-lg-3">
                        <Card imgsrc={img3} title="Card 3"
                        text="A book is a medium for recording information in the form typically composed, The technical term for this physical arrangement is codex.for extended written compositions or records, the codex replaces its predecessor, the scroll"/>
                    </div>
                    <div className="col-lg-3">
                        <Card imgsrc={img3} title="Card 3"
                        text="A book is a medium for recording information in the form typically composed, The technical term for this physical arrangement is codex.for extended written compositions or records, the codex replaces its predecessor, the scroll"/>
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

export default liveCards2;