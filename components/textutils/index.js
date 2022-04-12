import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from '../../styles/Home.module.scss'

function TextForm(props) {

    return (
        <div className={`${styles.container} my-3 ${styles.maxHeight}`}>
        <h1 className='text-center my-5'>Type or paste your content to manage</h1>
            <div className="form-floating my-4">
                <textarea className="form-control"
                    placeholder="Type or Paste Your content here"
                    value={props.text}
                    id="floatingTextarea2" style={{ height: "150px" }}
                    onChange={(event) => props.setText(event.target.value)}
                />
                <label htmlFor="floatingTextarea2">Type or Paste Your content here </label>
            </div>
            <div className='btn-div d-flex mb-5'>
                <button type="button" className="btn btn-primary" onClick={(event) => props.upperCasehandler(event)}>Upper Case</button>
                <button type="button" className="btn btn-primary mx-2" onClick={(event) => props.lowerCasehandler(event)}>Lower Case</button>
                <button type="button" className="btn btn-primary mx-2" onClick={(event) => props.sentenceCasehandler(event)}>Sentence Case</button>
                <button type="button" className="btn btn-primary mx-2" onClick={(event) => props.capitalCasehandler(event)}>Capitalized Case</button>
                <CopyToClipboard text={props.text}>
                    <button type="button" className="btn btn-primary mx-2" onCopy={() => props.setCopied(trure)}>Copy text</button>
                </CopyToClipboard>
                <button type="button" className="btn btn-primary" onClick={(event) => props.clear(event)}>Clear</button>
            </div>
        </div>
    )
}

export default TextForm
