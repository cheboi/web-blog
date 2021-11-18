import {Component} from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"

export default class extends Component{
    render(){
        return(
            <div className="layout-wrapper">
                <HeadMetadata
                     title="Contact | Coding Blog"
                     metaDescription="If you have any comments, ideas, critiques, or you just want to say hi, you can contact me via email or the links listed below."
                />
                <Header />
                <div className="contact-container">
                    <div className="contact-section">
                    <p>Hi, I’m Moses, a full stack software engineer based out of small town Kapsowar. I write about modern C#, Asp.net framework, JavaScript and build coding courses that show people how to build real world applications.</p>
                    <p>If you have any comments, ideas, critiques, or you just want to say hi, don’t hesitate to send me an email at moscheb96@gmail.com!</p>
                    </div>

                    <div className="contact-section">
                        <h2>Around the web</h2>
                        <ul>
                            <li><strong>Email</strong>:moscheb96@gmail.com</li>
                            <li><strong>LinkedIn</strong><a href="https://linkedin.com/in/moses-cheboi">Moses Cheboi</a></li>
                            <li><strong>GitHub</strong>: <a href="https://github.com/cheboi">Cheboi Moses</a></li>
                            <li><strong>Twitter</strong>: <a href="https://twitter.com/@moses_cheboy">Moses Cheboi Twitter Page</a></li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}