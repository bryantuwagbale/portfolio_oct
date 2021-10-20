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
                Lorem Ipsum
            </p>
            <p className="a-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cumque quibusdam perspiciatis expedita, porro, vero suscipit 
                incidunt earum inventore deserunt, in quisquam? Dicta repellendus, 
                atque minima numquam inventore quam modi.
            </p>
            <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">Full Stack Web Developer</h4>
                    <p className="a-award-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Debitis vero 
                        magnam asperiores doloremque et distinctio. 
                        Quasi architecto, a voluptas 
                        quas dicta omnis maiores 
                        officia eveniet sapiente error quaerat. Quos, enim.
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default about
