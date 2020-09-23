import React from 'react';
import Button from './button';

export default class FrontPage extends React.Component {
  render() {
    return (
      <div className="main">
        <Button
          img={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/768px-Facebook_icon_2013.svg.png'}
          style={{left: "2%", top: "5%"}}
          type={'text'}
          content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        />
        <Button
          img={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png'}
          style={{left: "20%", top: "25%"}}
          contentStyle={{ width: "auto", height: '300px' }}
          type={'image'}
          content={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'}
        />
        <Button
          img={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/YouTube_social_white_circle_%282017%29.svg/1024px-YouTube_social_white_circle_%282017%29.svg.png'}
          style={{left: "50%", top: "30%" }}
          contentStyle={{ margin: "0 0 0 -500px" }}
          type={'iframe'}
          content={'https://www.youtube.com/embed/dQw4w9WgXcQ'}
        />
        <Button
          img={'https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg'}
          style={{left: "90%", top: "25%" }}
          contentStyle={{ margin: "0 0 0 -500px"}}
          type={'iframe'}
          content={'https://en.wikipedia.org/wiki/Rickrolling'}
        />
      </div>
    );
  }
}
