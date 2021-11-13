import {React, useState, useEffect} from 'react'
const Home = () => {
    const [color, setColor] = useState('#3cd6bf');
    const [row, setRow] = useState(1);
    const [col, setCol] = useState(1);
    const [ro, setro] = useState([0]);
    const [col1, setcol1] = useState([0]);
    const [name, setName] = useState("")
    const [st, setSt] = useState(false)
    const[arr, setArr] = useState([])
    useEffect(() => {
        let ar = []
        for (var i = 0; i < row; i++) {
            ar.push(i)
        }
        setro(ar)
        let col1ay = []
        for (i = 0; i < col; i++) {
            col1ay.push(i)
        }
        setcol1(col1ay)
      },[row, col])
    const onColorChange = (updatedColor) => {
        setColor(updatedColor);
    };
    const handleEvent = (e) => {
        e.preventDefault();
        setSt(!st)
        console.log("data saved");        
    }
    const e1 = async (e)=> {
        let onlyNum = e.target.value;
        setRow(onlyNum)
    }
    const e2 = (e)=> {
        let onlyNum = e.target.value;
        setCol(e.target.value)
    }
    const e3 = (e)=>{
        setName(e.target.value)
    }
    const selectCol = (e) => {
        let doc = document.getElementById(e.target.id)
        doc.style.backgroundColor = color
        let arrr = arr;
        arrr.push(e.target.id)
        setArr(arrr)
    }
    return (
        <>
            <main>
                <div className = "leftfor">
                   <h1> Planogram Box </h1>
                   {
                      ro.map((data)=><div className="flexBox">{
                          col1.map((data1)=>{
                            var str = data.toString() + ',' + data1.toString()
                              return <div className="boxer" id = {str} onClick = {selectCol}>
                                {data},{data1}
                              </div> 
                          })
                        }
                          </div>
                      )
                   }
                   
                </div>
                <div className = "right">
                <h1> Planogram UI </h1> 
                <form onSubmit={handleEvent}>
                <div className = "coloumn">
                   <div className="half">
                    <label>
                    Rows: <p></p>
                    <input type="text" name="row" value={row} onChange={e1} />
                    </label>
                   </div>
                   <div className="half">
                    <label>
                    Coloumn: <p></p>
                    <input type="text" name="col" value={col} onChange={e2}/>
                    </label>
                    </div>
                    </div>
                    <p></p>
                    <div className = "coloumn">
                   <div className="half">
                    <label>
                    Name: <p></p>
                    <input type="text" name="cat" value={name} onChange={e3} />
                    </label>
                    </div>
                    <div className="half">
                    <label>
                    Color: <p></p>
                    <div className="forBox" style={{backgroundColor : `${color}`, margin:"0px"}} id="color" ></div>
                    </label>
                    </div>
                    </div>
                    <input className="button" type="submit" value="Fix Selection"/>
                </form>
               
                </div>
  
            </main>
            <div className="react">
                {st ? `Category Name  = ${name}` : ""}
                {st ? `Category Color  = ${color}` : ""}
                {st ? `Row Col points  = ${arr}` : ""}
                </div>
        </>
    )
}
export default Home;