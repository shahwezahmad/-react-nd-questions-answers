import { useState } from "react";

const Chip = ({ item, handleDeleteChip }) => {
  return (
    <div
      style={{
        backgroundColor: "lightgray",
        borderRadius: "20px",
        padding: "5px 10px",
        display: "flex",
        alignItems:'center',
        columnGap: "10px",
        fronSize: "small",


      }}
    >
      <span>{item.inputValue}</span>
      <button
        onClick={() => handleDeleteChip(item.id)}
        style={{ cursor: "pointer" , color:'red', backgroundColor:'transparent', border:'none'}}
      >
        X
      </button>
    </div>
  );
};

export default function ChipInput() {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [chipId, setChipId] = useState(1)

  const handleKeyDown = (e) => {
    // e.preventDefault()
  
    if (e.key === "Enter" && inputValue.trim() !== "") {
        const newchip = {
            inputValue,
             id: chipId
        }
      setChips((prev) => [newchip, ...prev]);
      setChipId(prev => prev + 1)
      setInputValue("");
    }
  };

  const handleDeleteChip = (id) => {
    console.log(id);
    setChips((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <div style={styles.container}>
        <h1>Chip Inputs</h1>
        <input
          style={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <div style={styles.chipContainer}>
          {chips.length > 0 &&
            chips.map((item) => (
              <Chip
                key={item.id}
                item={item}
                handleDeleteChip={handleDeleteChip}
              />
            ))}
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexWrap:'wrap'
  },
  input: {
    height: "30px",
    width: "200px",
    paddingLeft: "5px",
  },
  chipContainer: {
    display:'flex',
    alignItems:'center',
    flexWrap:'wrap',
    columnGap:'20px',
    rowGap:'10px',
    marginTop:'10px',
    width:'200px'
  }
};

// Chip Input
// List chips
// onClick that chip should delete
