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
    console.log( this.props );
    return (
      <div className={this.state.active ? 'Button open': 'Button'} style={this.props.style} onClick={ () => this.setState({active: !this.state.active}) }>
        <img src={this.props.img} alt={'TextButton'}/>

        <ContentBox type={this.props.type} content={this.props.content}/>
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
    console.log( this.props );
    console.log( this.props.type );
    if ( this.props.type === 'text' ) {
      return(
        <div className={'contentBox'}>{this.props.content}</div>
      );
    }
    else if ( this.props.type === 'video' ) {
      return(
        <iframe className={'contentBox'} width={'420'} height={'315'} src={this.props.content} allowFullScreen></iframe>
      );
    }
  }
}
