import React from 'react';

export default class Button extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      active: false
    };
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  render() {
    return (
      <div className={this.state.active ? 'Button open': 'Button'} style={this.props.style} onClick={ () => { [...document.querySelectorAll( '.Button.open' )].map( button => { return button.click(); }); this.setState({active: !this.state.active}); }}>
        <a title={this.props.hoverInfo}><img src={this.props.img} alt={'Content Box'}/></a>
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
    switch ( this.props.type ) {
      case 'text':
        return(
          <div className={'contentBox'} style={this.props.contentStyle}>{this.props.content}</div>
        );

      case 'iframe':
        return(
          <iframe title={this.props.hoverInfo} className={'contentBox'} style={this.props.contentStyle} width="560" height="315" src={this.props.content} allowFullScreen></iframe>
        );

      case 'image':
        return(
          <img title={this.props.hoverInfo} alt={this.props.hoverInfo} className={'contentBox'} src={this.props.content} style={this.props.contentStyle}/>
        );

      case 'slides':
        return(
          <iframe src={this.props.content} title={this.props.hoverInfo}className={'contentBox'} style={this.props.contentStyle} frameBorder="0" width="480" height="299" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        );

      default:
        throw new Error( 'Invalid Button Type - must be "text", "iframe" or "image"' );
    }
  }
}
