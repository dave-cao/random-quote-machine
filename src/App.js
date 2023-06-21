import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";

function TagSelector({ tags, handleSelection }) {
  const options = tags.map((tag) => {
    return (
      <option key={tag._id} value={tag.slug}>
        {tag.name}
      </option>
    );
  });
  return (
    <select
      className="form-select form-select-sm"
      style={{
        width: "135px",
        padding: "8px 16px",
      }}
      onChange={(e) => {
        handleSelection(e.target.value);
      }}
    >
      <option defaultValue>All</option>
      {options}
    </select>
  );
}

function TweetButton({ handleClick, color, quote }) {
  color === "#f2f2f2" ? (color = "#5A5A5A") : (color = color);
  return (
    <div className="text-center mt-auto">
      <a
        href={`https://twitter.com/intent/tweet?text=❝${quote.content}❞ ~ ${quote.author}`}
        target="_blank"
        id="tweet-quote"
        className="btn btn-primary btn-lg btn-block"
        onClick={handleClick}
        style={{ backgroundColor: color }}
        rel="noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
}

function NewQuoteButton({ handleClick, color }) {
  color === "#f2f2f2" ? (color = "#5A5A5A") : (color = color);
  return (
    <div className="text-center mt-auto">
      <button
        id="new-quote"
        className="btn btn-primary btn-lg btn-block"
        onClick={handleClick}
        style={{ backgroundColor: color }}
      >
        New Quote
      </button>
    </div>
  );
}

function Quote({ quote }) {
  return (
    <>
      <div id="text" className="quote-text text-center m-2">
        ❝{quote.content}❞
      </div>
      <div id="author" className="quote-author text-end mb-4">
        <em>~ {quote.author}</em>
      </div>
    </>
  );
}

function QuoteBox({ changeBackgroundColor, backgroundColor }) {
  const [quote, setQuote] = useState({});
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState("All");

  const updateCurrentTag = (tag) => {
    setCurrentTag(tag);
  };

  const updateQuote = () => {
    let endpoint = "https://api.quotable.io/quotes/random";

    currentTag === "All"
      ? (endpoint = endpoint)
      : (endpoint = `${endpoint}?tags=${currentTag}`);

    axios
      .get(endpoint)
      .then((data) => {
        // console.log(data.data[0]);
        setQuote(data.data[0]);
      })
      .catch((error) => {
        // console.log(error);
        setQuote({ content: "Error with API!", author: "Contact David :)" });
      });
  };

  const updateTags = () => {
    axios.get("https://api.quotable.io/tags").then((data) => {
      setTags(data.data);
    });
  };

  useEffect(updateQuote, []);
  useEffect(updateTags, []);

  return (
    <div
      id="quote-box"
      className="d-flex border m-4 flex-column justify-content-between"
      style={{
        minHeight: "40vh",
        maxWidth: "600px",
        width: "auto",
      }}
    >
      <div className="tag-selector-container">
        <TagSelector tags={tags} handleSelection={updateCurrentTag} />
      </div>
      <div className="container m-auto">
        <Quote quote={quote} color={backgroundColor} />
        <div className="clickableButtons">
          <TweetButton quote={quote} />

          <NewQuoteButton
            color={backgroundColor}
            handleClick={() => {
              updateQuote();
              changeBackgroundColor();
            }}
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#f2f2f2");

  const changeBackgroundColor = () => {
    const colorIndex = Math.floor(Math.random() * COLORS.length);
    const color = COLORS[colorIndex];
    setBackgroundColor(color);
  };

  return (
    <>
      <NavBar backgroundColor={backgroundColor} />
      <div
        className="page-container d-flex align-items-center justify-content-center flex-column"
        style={{ height: "100vh", backgroundColor: backgroundColor }}
      >
        <QuoteBox
          changeBackgroundColor={changeBackgroundColor}
          backgroundColor={backgroundColor}
        />
        <Footer />
      </div>
    </>
  );
}

const COLORS = [
  "#ff7f50",
  "#c2b97f",
  "#2f2f2f",
  "#29ab87",
  "#114b5f",
  "#e0b0ff",
  "#5d2f27",
  "#9C6398",
  "#6D8ACE",
  "#121D31",
  "#AE3F5A",
  "#2E1D2D",
  "#78314E",
  "#B9BCD5",
  "#4D4D83",
  "#28294C",
];

export default App;

// technology
// famous-quotes
// history
// civil-rights
