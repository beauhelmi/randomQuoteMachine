function App() {

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex])
        }
        fetchData();
    }, [])

    const getNewQuote = () => {
        let randIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[randIndex])
    }


    return (
        <wrapper id="quote-box" className="container pt-5">
            <div id="text" className="jumbotron">
                <div className="card">
                    <div className="card-header">Inspirational Quotes</div>
                    <div className="card-body">
                        {randomQuote ? (
                            <>
                                <h5 id="author" className="card-title">- {randomQuote.author || "No Author"}</h5>
                                <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                            </>
                        ) : (
                            <h2>Loading</h2>
                        )}

                        <div className="row">
                            <button id="new-quote" onClick={getNewQuote} className="btn btn-primary ml-3" >New Quote</button>
                            <a id="tweet-quote" href={
                                "https://twitter.com/intent/tweet?hashtags=QuotesOfTheDay&related=freecodecamp&text=" +
                            encodeURIComponent (
                            '"' + randomQuote.text + '" ' + '-' + randomQuote.author
                            )
                                } 
                                target="_blank" className="btn btn-warning">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="" className="btn btn-danger"></a>
                    </div>
                </div>
            </div>
        </div>

        </wrapper >
    );
}


ReactDOM.render(<App />, document.getElementById('app'))