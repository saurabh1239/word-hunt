import React, { Fragment } from 'react'
import "./Defination.css"

const Defination = ({ word, language, meaning, lightTheme }) => {
    return (
        <div className='meanings'>
            {meaning[0] && word && language === "en" && (
                <audio
                    style={{ backgroundColor: "#fff", borderRadius: 10, width: "100%" }}
                    src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio}
                    controls
                >
                    Your browser does not support the audio element.
                </audio>
            )}
            {word === "" ? (
                <span className='subTitle'>Start typing in search box </span>
            ) :
                (
                    meaning.map((mean) =>
                        mean.meanings.map((item) =>
                            item.definitions.map((def, index) => (
                                <div
                                    key={index}
                                    className="singleMean"
                                    style={{
                                        backgroundColor: lightTheme ? "#3b5360" : "white",
                                        color: lightTheme ? "white" : "black",
                                    }}
                                >
                                    <b>{word} : {def.definition}</b>
                                    <hr style={{ backgroundColor: lightTheme ? "black" : "white", width: "100%" }} />
                                    {def.example && (
                                        <span>
                                            <b>Example :</b> {def.example}
                                            <hr style={{ backgroundColor: lightTheme ? "black" : "white", width: "100%" }} />
                                        </span>
                                    )}
                                    {def.synonyms && (
                                        <span>
                                            <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                                        </span>
                                    )}
                                </div>
                            )
                            )
                        )
                    )
                )
            }
        </div>
    )
}

export default Defination