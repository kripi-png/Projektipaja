import React from 'react';
import Button from './button';

export default class FrontPage extends React.Component {
  render() {
    return (
      <div className="main">
        <Button
          img={'https://upload.wikimedia.org/wikipedia/commons/b/b9/Group_font_awesome.svg'}
          style={{left: "18%", top: "52%", transform: 'translate(-50%, -50%)'}}
          type={'slides'}
          hoverInfo={'Ryhmäyttäminen'}
          contentStyle={{ margin: "-150px 100px" }}
          content={'https://docs.google.com/presentation/d/e/2PACX-1vT3reFsprMQH9rFI9rROMjQiMLkTtT1V0dTGPNdOY1LeoBZ02RCBIVpn_QFol3Rlw87L7yqfQ3OhS0P/embed?start=false&loop=false&delayms=15000'}
        />
        <Button
          img={'https://icon-library.com/images/info-icon-svg/info-icon-svg-27.jpg'}
          style={{left: "48.5vw", top: "27vh", transform: 'translate(-50%, -50%)'}}
          type={'slides'}
          hoverInfo={'Infoa IOVT:stä'}
          contentStyle={{ margin: "0 -200px " }}
          content={'https://docs.google.com/presentation/d/e/2PACX-1vQBWvGXfHpje0w_bnQinYYtx2z2CfTHZnkNy606IqN2V7N2sJTtBAqyHDVOHaboyu7_3Hn3KspEZTX-/embed?start=false&loop=false&delayms=15000'}
        />
        <Button
          img={'http://simpleicon.com/wp-content/uploads/camera.png'}
          style={{left: "35%", top: "40%", transform: 'translate(-50%, -50%)'}}
          contentStyle={{ width: "auto", height: '500px', margin: '-250px 70px' }}
          type={'image'}
          hoverInfo={'Posteri'}
          content={'https://i.imgur.com/XNDsEp8.jpg'}
        />
        <Button
          img={'https://i.imgur.com/OAC7N2v.png'}
          style={{left: "50%", top: "45%", transform: 'translate(-50%, -50%)'}}
          contentStyle={{margin: "-100px 60px"}}
          type={'iframe'}
          hoverInfo={'Esitysvideo'}
          content={'https://www.youtube.com/embed/t8ce7JS-ylI'}
        />
        <Button
          img={'https://i.imgur.com/OAC7N2v.png'}
          style={{left: "80%", top: "62%", transform: 'translate(-50%, -50%)'}}
          contentStyle={{margin: "-200px -530px" }}
          type={'iframe'}
          hoverInfo={'Video'}
          content={'https://www.youtube.com/embed/WlterZVnGDA'}
        />
        <Button
          img={'https://i.imgur.com/BgYdbVL.png'}
          style={{left: "15%", top: "15%", transform: 'translate(-50%, -50%)'}}
          type={'slides'}
          hoverInfo={'Aikatauluttaminen'}
          contentStyle={{}}
          content={'https://docs.google.com/presentation/d/e/2PACX-1vTEub7axS1Mg56nJclLZqfXiLEqoQxIEkOpLu7mMQtYZSm3On7VuWS9FzZtmhwe_pnrVOm-j6I1ym4i/embed?start=false&loop=false&delayms=15000'}
        />
        <Button
          img={'https://image.flaticon.com/icons/png/512/1600/1600977.png'}
          style={{left: "25%", top: "30%", transform: 'translate(-50%, -50%)'}}
          type={'slides'}
          hoverInfo={'Tietoteknilliset  taidot'}
          contentStyle={{}}
          content={'https://docs.google.com/presentation/d/e/2PACX-1vTcVjRnCRg_DDaV1hcJ4Zt1rjVVbX9_Jp0JFOooHUB7Q50mIHbBu1H_3zGsBK5EngV-_7Qvxk8RaORL/embed?start=false&loop=false&delayms=15000'}
        />
        <Button
          img={'https://i.imgur.com/FPplNxJ.png'}
          style={{left: "65%", top: "15%", transform: 'translate(-50%, -50%)'}}
          type={'slides'}
          hoverInfo={'Johtajuus'}
          contentStyle={{margin: "0 -500px"}}
          content={'https://docs.google.com/presentation/d/e/2PACX-1vScLhrnVZhFUJLPTgXKztmza54HCZEjSP9kqE0UR8z_6n4Yh9aRKOdMXMyQHh5LcVw7o3Yr_g5CfoaP/embed?start=false&loop=false&delayms=15000&slide=id.p'}
        />
      </div>
    );
  }
}
