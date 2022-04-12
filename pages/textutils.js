import React, {useState} from 'react'
import TextForm from '../components/textutils'


function Textutils() {
const [text, setText] = useState('');
const [copied, setCopied] = useState(false);

const upperCasehandler = () => {
    const upperTxt = text.toUpperCase();
    setText(upperTxt);

}
const lowerCasehandler = () => {
    const lowerTxt = text.toLocaleLowerCase();
    setText(lowerTxt);

}
const sentenceCasehandler = () => {
    const sentenceCase = text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
    setText(sentenceCase)
}

const capitalCasehandler = () => {
    const capStr = text.split(' ');
    const newstr = capStr.map((str) => {
       const capStr = str.charAt(0).toUpperCase() + str.slice(1);
        return capStr;
    })
    const finalWord = newstr.join(' ');
    setText(finalWord);
}
const clear = () =>{
    setText('');
}
  return (
    <div>
      <TextForm 
      text={text} 
      setText={setText} 
      upperCasehandler={upperCasehandler}
      lowerCasehandler={lowerCasehandler}
      sentenceCasehandler={sentenceCasehandler}
      capitalCasehandler= {capitalCasehandler}
      setCopied= {setCopied}
      clear={clear}
      />
    </div>
  )
}

export default Textutils
