marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marktext: holdmarktext
    }
    this.handleChange = this.handleChange.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.toggleLight = this.toggleLight.bind(this);
    this.joinEditor = this.joinEditor.bind(this);
  }
  handleChange(e) {
    this.setState ({
      marktext: e.target.value
    });
  }
  changeSize() {
    $('input').toggle();
    this.setState({
      size: $('input').val().slice(0, 4)
    });
  }
  toggleLight() {
    $('.setControls').css('color', this.state.lmode);
    if (this.state.lmode == '#E5F0FF')
      this.setState({
        lmode: '#010123'
      });
    else
      this.setState({
        lmode: '#E5F0FF'
      });
  }
  joinEditor() {
    this.setState({
      join: !this.state.join
    });
    this.state.join ?
      $('#wrapSection').addClass('joinStyle')
    : $('#wrapSection').removeClass('joinStyle');
  }
  render() {
    return (
      <div id='wrapSection'>
        <div id='wrapEditor'>
          <Settings icon={'fas fa-cog'} size={this.changeSize} lm={this.toggleLight} join={this.joinEditor}/>
          <textarea rows='20' className={'setControls'} style={{fontSize: this.state.size, backgroundColor: this.state.lmode}} id='editor' value={this.state.marktext} onChange={this.handleChange} type='text'/>
        </div>
        <Preview text={this.state.marktext}/>
      </div>
    );
  }
}

Editor.defaultProps = { lmode: '#E5F0FF',
      join: false,
      size: 100 }
Editor.propTypes = {
  lmode: PropTypes.string,
  join: PropTypes.boolean,
  size: PropTypes.number
}

const Preview = (props) => {
  return (
    <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.text, { renderer: renderer })}} />
  );
}

/*const Tools = (props) => {
  return (
    
  );
}*/

const Settings = (props) => {
  return (
    <div id='setWindow-Out'>
      <i className={props.icon} onClick={function() {$('#setWindow').toggle()}}/>
      <div id='setWindow' onKeyPress={function(e) { if (e.which == 13 || e.KeyCode == 13) { $('input').toggle() } }}>
        <input list="sizeList"/>
        <datalist id="sizeList" className="setControls">
          <option value="80%" />
          <option value="90%" />
          <option value="100%"/>
          <option value="110%" />
          <option value="120%" />
        </datalist>
        <p id='size' onClick={props.size}>size <i className={'fas fa-caret-right'}></i></p>
        <p id='lm' onClick={props.lm}>light mode</p>
        <p id='join' onClick={props.join}>join</p>
      </div>
    </div>
  );
}

const holdmarktext = `
# Welcome! this is your React Markdown editor

## Here's a sub-heading

### I will introduce you to various styling and mark methods in this editor:

Here you can write code between 2 backticks \`<div> <div>\`

You can make a **bold** text,
as well as _italic_, or combining the two you get
**_both_**
You can ~~cross lines~~ as well

There are [links](https://www.google.com/)

And you can also make multiline code blocks like this:

\`\`\`
function (Example) {
  if (Example == true) {
    return 'marked is a great tool';
  }
}
\`\`\`

You can make 
>Block Quotes!

Here you have a list:
- with simple black dots
  - empty dots
    - and squared
      - with as many items as you want

![Marked logo w/ text](https://avatars2.githubusercontent.com/u/19886934?s=400&v=4)
`

ReactDOM.render(<Editor />, document.getElementById('EditorSection'));