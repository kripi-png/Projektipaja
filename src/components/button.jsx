import React from 'react';

export default class Button extends React.Component {
  constructor( props ) {
    super( props );
    // this.addActiveClass= this.addActiveClass.bind(this);
    this.state = {
      active: false
    };
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  render() {
    // console.log( this.props );
    return (
      <div className={this.state.active ? 'Button open': 'Button'} style={this.props.style} onClick={ () => { [...document.querySelectorAll( '.Button.open' )].map( button => { return button.click(); }); this.setState({active: !this.state.active}); }}>
        <img src={this.props.img} alt={'TextButton'}/>

        <ContentBox type={this.props.type} content={this.props.content} contentStyle={this.props.contentStyle}/>
      </div>
    );
  }
}

class ContentBox extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {}
  }
  render() {
    if ( this.props.type === 'text' ) {
      return(
        <div className={'contentBox'} style={this.props.contentStyle}>{this.props.content}</div>
      );
    }
    else if ( this.props.type === 'iframe' ) {
      return(
        // <a class="embedly-card" data-card-via="https://embed.ly/code?url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRickrolling" href="https://en.wikipedia.org/wiki/Rickrolling">Rickrolling</a>
        <iframe title="asd" className={'contentBox'} style={this.props.contentStyle} width={'420'} height={'315'} src={this.props.content} allowFullScreen></iframe>
      );
    }
  }
}
