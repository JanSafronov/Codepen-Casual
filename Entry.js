let folders = [
    {"header": "Markdown Previewer" , "link": "../Markdown Previewer/index.html" },
    {"header": "Pomodoro Clock" , "link": "../PomodoroClock/index.haml" },
    {"header": "Survey Form" , "link": "../Survey Form/index.html" }
]

class Item extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }

        this.redirect = this.redirect.bind(this);
    }

    redirect() {
        window.location = this.props.link;
    }

    render() {
        return (
            <div id={this.props.header[0]}>
                <h3 onClick={this.redirect}>{this.props.header}</h3>
            </div>
        );
    }
}

Item.propTypes = {
    "header": PropTypes.string,
    "link": PropTypes.string
};

ReactDOM.render(function () {
    var r = [];
    for (let i = 0; i < folders.length; i++) {
        r.push(<Item header={folders[i].header} link={folders[i].link} />);
    }
    return r;
}(), document.getElementById("main"));