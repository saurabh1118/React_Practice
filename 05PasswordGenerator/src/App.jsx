import { useState, useCallback , useEffect ,useRef} from "react";

function App() {
  //variables
  const [length, setlength] = useState(8);
  const [numAllow, setnumAllow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const [Password, setPassword] = useState("");

  //ref hook
  const passwordRef = useRef(null)
//usecallback hook
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllow) str += "0123456789";
    if (numAllow) str += "~!@#$%^&*+*/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass)
  }, [length, numAllow, charAllow, setPassword]);

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0,9);
    window.navigator.clipboard.writeText(Password)
  },[Password])
//useEffect hook
  useEffect(() =>
  {PasswordGenerator()} , [length , numAllow, charAllow, PasswordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-red-600 bg-blue-500">
        <h1 className="text-4xl text-center text-white my-3">
          PasswordGenerator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button
          onClick={copyPasswordToClipboard}
           className="outline-none bg-orange-500 text-white hover:bg-orange-400 px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className=" flex  items-center gap-x-2">
            <input
              type="range"
              max={100}
              min={6}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex text-sm gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              onChange={() => {
                setnumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex text-sm gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="charactorInput"
              onChange={() => {
                setcharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Charactors</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
