import "./Intro.css"
import Me from "../../img/user.png"

export const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hey, I'm</h2>
                    <h1 className="i-name">Bryant</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Content Creator</div>
                            <div className="i-title-item">Innovator </div>
                        </div>
                    </div>
                    <p className="i-desc">
                    I create fullsize and mobile friendly applications and have a creative way of approaching all new projects.
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}


export default Intro