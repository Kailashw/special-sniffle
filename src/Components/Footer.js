import React from 'react'
const style = {
    // width: "100%",
    // height: "60px",
    marginTop: "5%",
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "center"
}
const Footer = () => {
    return (
        <footer className="footer" style={style}>
            <p className="col-lg-offset-3" style={{ paddingTop: "15px" }}>created by <a href="http://www.github.com/kailashw">Kailas Walldoddi</a> {"||"} </p>
        </footer>
    )
}

export default Footer;