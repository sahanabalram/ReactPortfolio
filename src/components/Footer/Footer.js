import React,{Component} from "react";
import "./Footer.css";
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                Made By
                <a
                    href="https://github.com/sahanabalram"
                    target="_blank" rel="noopener noreferrer"> Sahana Balram<span role="img" aria-label="heart">❤️</span>
                </a>
                <p>Developed using React</p>
            </div>

        )
    }
}

export default Footer;