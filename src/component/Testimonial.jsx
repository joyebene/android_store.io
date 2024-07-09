import { useState } from "react";

const Testimonial = () => {

    const[name, setName] = useState("");
    const[review, setReview] = useState("");
    const [addMessage, setAddMessage] = useState(false);

    const isDisable = !name || !review;


  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center">
          <h2> Testimonials </h2>
        </div>

        <div className="d-flex flex-wrap py-5">
            <div className="card m-4 shadow-lg">
                <div className="card body">
                    <h6 className="pt-2 px-2 bg-secondary py-2">Martha Prosper</h6>
                    <div className="px-3">
                        <p>
                            The phone i bought last week has no issue,<br /> i give android store 5 star. <br /> If i want to get a new phone i will surely contact you
                        </p>
                    </div>
                </div>
            </div>
            <div className="card m-4 shadow-lg">
                <div className="card body">
                    <h6 className="pt-2 px-2 bg-secondary py-2">Benjamin Paul</h6>
                    <div className="px-3">
                        <p>
                            I love this, The Camon 10 i bought since last year <br /> and still using it, the battery is still strong. <br /> Anyone wanting to get a device this is a right place 
                        </p>
                    </div>
                </div>
            </div>
            <div className="card m-4 shadow-lg">
                <div className="card body">
                    <h6 className="pt-2 px-2 bg-secondary py-2">Abdul Yahaya</h6>
                    <div className="px-3">
                        <p>
                            New age indeed, i cant  belive that my phone will last for<br />  a year. Am someone that usually get new phone every <br /> three months, but android store changed it. Thanks <br />android store for selling quality devices.
                        </p>
                    </div>
                </div>
            </div>

            <div className="card m-4 my-5 shadow-lg">
                <div className="card body">
                    <h6 className="pt-2 px-2 bg-secondary py-2">Prince</h6>
                    <div className="px-3">
                        <p>
                            Their products are good, but am giving it 3 rating <br />because the iTel A60 i bought is quite slow.
                        </p>
                    </div>
                </div>
            </div>
            {
                addMessage ? 
             (
            <div className="card m-4 my-5 shadow-lg">
                <div className="card body">
                    <h6 className="pt-2 px-2 bg-secondary py-2">{
                         name
                        }</h6>
                    <div className="px-3">
                        <p>
                            {
                                review
                            }
                        </p>
                    </div>
                </div>
            </div>
                 ) : ""
            }
            </div>
       

            <div className="m-3">
                <div className="my-4">
                    <h3>Enter your review</h3>
                </div>
                <div>
                <label htmlFor="name">Name: </label>
             <input type="text" name="name" className="input1" value={name} onChange={(e)=>{setName(e.target.value)}} /></div><br />
             <div>
             <label htmlFor="review">Review: </label>
             <input type="text" name="review" className="input2" value={review} onChange={(e)=>{setReview(e.target.value)}}/></div>
             <button className="input-btn" disabled={isDisable} onClick={()=>setAddMessage(!addMessage) }>send</button>
            </div>

        
      </div>
    </div>
  );
};

export default Testimonial;
