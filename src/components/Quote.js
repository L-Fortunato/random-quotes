import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Quote.css'


export const Quote = () => {
    const [quote, setquote] = useState([])

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    


    function setColor() {
        let color = getRandomColor()
        document.getElementById('quote').style.backgroundColor = 'white'
        document.getElementById('getQuote').style.backgroundColor = color
        document.getElementById('App').style.backgroundColor = color;
        document.getElementById('quote').style.color = color;
        document.getElementById('twitter').style.color = color;
    }


    const getQuotes = async () => {
        try {
            const quotes = await axios.get('http://api.quotable.io/random')
            setquote(quotes.data)
            setColor()
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getQuotes();

    }, [])




    return (
        <div id='card'>
            <div id='quote'>
                <h1 id='quotecontent'>"{quote.content}"</h1>
                <h4 id='quoteauthor'>-{quote.author}</h4>
            </div>
            <div id='buttons'>
                <a href={`https://twitter.com/intent/tweet?text="${quote.content}" -${quote.author}`} class="twitter-share-button" data-show-count="false" target="_blank" rel='noreferrer'><i id='twitter' class="fab fa-twitter-square fa-3x"></i></a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                <button id='getQuote' onClick={() => { getQuotes() }} >New Quote</button>
            </div>
        </div>
    )
}
