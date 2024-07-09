
import { useState } from 'react';
import '../index.css';




const FAQ = () => {
    const [selected, setSelected] = useState(null);

    

    const data = [{
        id : "1",
        question : "Where are you located?",
        answer : "ans: Bida, Niger State, Nigeria."
},{
        id: "2",
        question: "Do you have any branch?",
        answer:  " ans: No, only have one store in bida,Niger State."
},{
        id: "3",
        question: "Have any customer complained about  your product?",
        answer: "ans: Nop. Not at all"
        
},{
        id: "4",
        question: "How long does delivey take?",
        answer: "ans: Depends on the location, but we dont keep our customer waiting for too long."
}
    ]

    const handleSingleSelection = (getCurrentId)=>{
        setSelected(getCurrentId === selected ? null: getCurrentId)
    }
    


  return (
    <div  id="FAQ"><div className="wrapper">
        <div className="container">
            <div className='p-3'><h1>Frequently Asked Questions</h1></div>
            
            <div className="accordion">
            {
                data && data.length > 0 ?
                
                    data.map((dataItem)=><div className='item'>
                        <div className="title" onClick={()=> handleSingleSelection(dataItem.id)}><h5>{dataItem.question}</h5></div>
                   

                    {
                        selected === dataItem.id ? <div className="content">{dataItem.answer}</div>
                        : null
                    }
                
           </div>     )

                : <div>No data found!</div>
            }
         </div>
    </div></div>
</div>
  )
}

export default FAQ