import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import './Reviews.css';

function Reviews() {
    
    const [individuals, setIndividuals] = useState([
        {
            topic: "Algebra and Functions 1",
            qnumber: 1,
            qrating: 4,
            qcomment: "This was an easy question, remember small angles only works in radians",
            qimage: "media/question 1.png",
            qshow: true,
        },
        {
            topic: "Algebra and Functions 1",
            qnumber: 2,
            qrating: 5,
            qcomment: "I know how to differentiate",
            qimage: "media/question 2.png",
            qshow: true,
        },
        {
            topic: "Algebra and Functions 1",
            qnumber: 3,
            qrating: 2,
            qcomment: "I used degrees instead of radians, rember to work in radians next time",
            qimage: "media/question 3.png",
            qshow: true
        },
        {
            topic: "Algebra and Functions 1",
            qnumber: 4,
            qrating: 3,
            qcomment: "Remember to include continuous in my answer when justifying alpha is a root",
            qimage: "media/question 4.png",
            qshow: true,
        },
        {
            topic: "Algebra and Functions 1",
            qnumber: 5,
            qrating: 3,
            qcomment: "This was an alright question. I used quotient rule.",
            qimage: "media/question 5.png",
            qshow: true,
        },
        {
            topic: "Algebra and Functions 1",
            qnumber: 6,
            qrating: 5,
            qcomment: "I used the discriminant and it was easy", 
            qimage: "media/question 6.png",
            qshow: true,
        },
        {
            topic: "Algebra and Functions 1",
            qnumber: 7,
            qrating: 2,
            qcomment: "", 
            qimage: "media/question 7.png",
            qshow: true,
        },
        {
            topic: "Algebra and Functions 1",
            qnumber: 8,
            qrating: 3,
            qcomment: "...", 
            qimage: "media/question 8.png",
            qshow: true,
        },
        {
            topic: "Algebra and Functions 1",
            qnumber: 9,
            qrating: 3,
            qcomment: "Remember to use dy/dx = infinity for a vertical tangent", 
            qimage: "media/question 9.png",
            qshow: true,
        },
        {
            topic: "Algebra and Functions 1",
            qnumber: 10,
            qrating: 1,
            qcomment: "I needed to use separeation of variables ", 
            qimage: "media/question 10.png",
            qshow: true,
        }
    ])

    const [overall, setOverall] = useState([]);

    const calculateOverall = (myTopic) => {
        let total_questions = 0;
        let fives = 0;
        let fours = 0;
        let threes = 0;
        let twos = 0; 
        let ones = 0;
        
        individuals.map((temp1) => {
            if (temp1.topic === myTopic) {
                total_questions = total_questions + 1;
                switch (temp1.qrating) {
                    case 5:
                        fives += 1;
                        break;
                    case 4:
                        fours += 1;
                        break;
                    case 3:
                        threes += 1;
                        break;
                    case 2:
                        twos += 1;
                        break;
                    case 1:
                        ones += 1;
                        break;
                    default:
                        return null;
                }
            }
            
        })
        setOverall([...overall,{
            topic: myTopic,
            total_questions: total_questions,
            fives: fives,
            fours: fours,
            threes: threes,
            twos: twos,
            ones: ones
        }])
        console.log(overall)
    }


    const displayReviews = overall.map((temp) => {
        var average = ((5*temp.fives)+(4*temp.fours)+(3*temp.threes)+(2*temp.twos)+(1*temp.ones))/temp.total_questions;
        average = average.toFixed(1);
        const five = temp.fives/temp.total_questions *100
        const four = temp.fours/temp.total_questions *100
        const three = temp.threes/temp.total_questions *100
        const two = temp.twos/temp.total_questions *100
        const one = temp.ones/temp.total_questions *100
        
        const bar = (num) => {
            if(num > 0){
                return(
                    <div className="star-bar" style={{ width: num+"%" }}></div>
                )
                
            }
        }
        
        return(
            <div className='reviews'>
                <h2>Edexcel 2018 Pure paper 1</h2>
                <div className='total-rating'>
                    <div className='overall-rating'>
                        
                        <div className="number-rating">
                            <h1>{average}</h1>
                            <h3>of 5</h3>
                        </div>
                    </div>
                    
                    <div className="bar-ratings">

                        <div className="bar-ratings-rows">
                            <div className="stars-and-bar">
                                <div className="stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div className="bars">
                                    {bar(five)}
                                </div>
                                {temp.fives}
                            </div>
                        </div>

                        <div className="bar-ratings-rows">
                            <div className="stars-and-bar">
                                <div className="stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                                <div className="bars">
                                    {bar(four)}
                                </div>
                                {temp.fours}
                            </div>
                        </div>

                        <div className="bar-ratings-rows">
                            <div className="stars-and-bar">
                                <div className="stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                                <div className="bars">
                                    {bar(three)}
                                </div>
                                {temp.threes}
                            </div>
                        </div>

                        <div className="bar-ratings-rows">
                            <div className="stars-and-bar">
                                <div className="stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                                <div className="bars">
                                    {bar(two)}
                                </div>
                                {temp.twos}
                            </div>
                        </div>

                        <div className="bar-ratings-rows">
                            <div className="stars-and-bar">
                                <div className="stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                                <div className="bars">
                                    {bar(one)}
                                </div>
                                {temp.ones}
                            </div>
                        </div> 
                        
                    </div>
                </div>
            </div>
        )
    })

    // const [swap, setSwap] = useState(false)

    const displayComments = individuals.map((temp) => {
        function numberOfStars(){
            switch (temp.qrating) {
                case 5:
                    return(
                        <div>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    );
                case 4:
                    return(
                        <div>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                    );
                case 3:
                    return(
                        <div>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                    );
                case 2:
                    return(
                        <div>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                    );
                case 1:
                    return(
                        <div>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                    );
                default:
                    break;
            }
        }

        const toggleImageVisibility = (object) => {
            setIndividuals(individuals.map(temp => 
                temp === object ? { ...temp, qshow: !temp.qshow } : temp
            ));
        };
        return(
            <div class="comments-col">
                <div class="question-commments">
                    <h3>{temp.qnumber}</h3>
                    <div>
                        {numberOfStars()}
                        <p>{temp.qcomment}</p>
                        {/* <button>Edit</button> */}
                        <button onClick={() => {toggleImageVisibility(temp)}}>Question</button>
                        <img src={temp.qimage} hidden={temp.qshow}></img>
                    </div>
                </div> 
            </div>
        )
    })

    useEffect(() => {
        calculateOverall("Algebra and Functions 1")
        console.log(overall)
    },[])

return (
    <div>
        <Header/>
        {displayReviews}
        {displayComments}
        
        <Footer/>
    </div>  
);
}

export default Reviews;
