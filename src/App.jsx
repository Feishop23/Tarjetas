import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import users from './json/users.json'
 
const arrayColor = [
'#EF277E',
'#EAAC13',
'#E5D17C',
'#455CF2',
'#FDB9BF', 
'#A4C94C',
'#B2785F',
'#FF8AA4',
'#E0C4A3',
'#712D86',
'#9B97A9',
'#6E4D67',
'#D7D4EF',
'#8C61BA',
'#AA2D73',
'#FFB2F1',
'#F39918',
'#BFC7C8',
'#452E50',
'#DEBC4D',
'#9DF456',
'#CEB232',
'#0B69F7',
'#FD3177',
'#FCDEC6',
'#B46FD8',
'#0BF601',
'#7639D0',
'#0E2DC6',
'#0D53FF',
'#2A6121',
'#53E3E5',
'#17E430',
'#54653E',
'#2EBEB9',
'#EB42EA',
'#1228F4',
'#A1F2DA',
'#C21B0B',
'#B04EEA',
'#578C2F',
'#474C1A',
'#4DE09D',
'#FC33A2',
'#9308D2',
'#745BFF',
'#331CDF',
'#D82FC3',
'#92B606',
'#0AA7A2',
'#ADF2B1',
'#D49FBD',
'#983C03',
'#EB2357',
'#99096D',
'#4F5110',
'#2B78E6',
'#1B4B1A',
'#613153',
'#A76C68',
'#B119FA',
'#163AFE',
'#A2D971',
'#D4E83A',
'#0417EC',
'#392F85',
'#F540BA',
'#B2F8EE',
'#2A21D2',
'#0D3E45',
'#63A8BA',
'#EF0B23',
'#FCEF5C',
'#5C5DE6',
'#9C4E5D',
'#161578',
'#E9E3F5',
'#393BC7',
'#4D2C45',
'#606DDB',
'#C573BD',
'#92FB74',
'#FC96DE',
'#78F737',
'#8AB6F1',
'#180EEA',
'#151758',
'#A1FC5A',
'#E262DB',
'#9DACE3',
'#76FDAC',
'#762DBC',
'#7C55BB',
'#9217DD',
'#BA3F84',
'#4A3DA0',
'#9FE545',
'#5093E0',
'#766AB7',
'#D50556',
'#6C9856'
]



function App() {

  const creatNumberRandom = array => {
 //Numero random entre 0 y 1
  return Math.floor(Math.random() * array.length)
  }

const getUserRandom = array => {
  const i = creatNumberRandom(array)
  return array[i]     
}




  const [userRandom, setUserRandom] = useState(getUserRandom(users))
  const [ColorRandom, setColorRandom] = useState(getUserRandom(arrayColor))

const clickButton = () => {
  setUserRandom(getUserRandom(users))
  setColorRandom(getUserRandom(arrayColor))
}

  const appStyle = {
    backgroundColor: ColorRandom
  }

  return (
    <div style={appStyle}className="App">
    <Card
    userRandom={userRandom}
    ColorRandom={ColorRandom}
    clickButton={clickButton}
    />
  
    </div>
  )
}

export default App
