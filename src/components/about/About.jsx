import "./about.css"
import Headshot from "../../img/Headshot (small).jpg"
import Award from "../../img/awards.png"

const about = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Headshot} alt="" 
                    className="a-img" />
                </div>
            </div>
            <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                Bringing a New Perspective
            </p>
            <p className="a-desc">
                I leverage my background in creative media with my skills as a web developer to build engaing applications. <br />
                
            </p>
            <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">Full Stack Web Developer</h4>
                    <p className="a-award-desc">HTML</p>
                    <p className="a-award-desc">CSS</p>
                    <p className="a-award-desc">JavaScript</p>
                    <p className="a-award-desc">React</p>
                    <p className="a-award-desc">NodeJs</p>
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default about
