

class BackArrow extends React.Component {
    constructor(props) {
        super(props);

        this.redirect = this.redirect.bind(this);
    }

    redirect() {
        window.location = "/Codepen-Casual/Pens.html";
    }

    render() {
        return (
            <div id='back'>
                <i class="fas fa-reply" onClick={this.redirect}></i>
            </div>
        );
    }
}

ReactDOM.render(<BackArrow />, document.getElementById("back-container"));
