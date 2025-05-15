import './App.css';
import FilterRecipies from './questions/FilterRecipies';
// import GuessNumber from './questions/GuessNumber';
// import PasswordStrength from './questions/PasswordStrength';
// import ChipInput from './questions/ChipInput';
// import ToolTip from './questions/ToolTip';
function App() {
  return (
    // <ChipInput />
    // <ToolTip />
    // <GuessNumber />
    <div style={style.centerContainer}>

      {/* <PasswordStrength /> */}
      <FilterRecipies />

    </div>
  );
}

export default App;


const style = {
  centerContainer : {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'20px'
  }
}
