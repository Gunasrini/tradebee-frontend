import axios from "axios";
import { useEffect, useState } from "react";


function TestCompanyDetails() {

    const [post, setPost] = useState([]);

    const url1 = "https://api.binary-coders.in/businesskyc/loadcompanytypes";
    const url2 = "https://api.binary-coders.in/businesskyc/loadbusinessnature";
    const url3 = "https://api.binary-coders.in/businesskyc/loadindustrytypes";
    const url4 = "https://api.binary-coders.in/businesskyc/loadcollateraltypes";

    // axios.get(url4).then((response) => {
    //     console.log(response);
    //   });

      const promise1 = axios.get(url1);
const promise2 = axios.get(url2);
const promise3 = axios.get(url3);
const promise4 = axios.get(url4);

useEffect(() => {
    Promise.all([promise1, promise2, promise3, promise4]).then((res) => {
        setPost(res);
        console.log(res);
      console.log(res[0].data);
    });
}, []);

    return (
        <>
            <ul>
                <li>
                    {
                        
                    }
                </li>
            </ul>
            <div className="test-form">
                <form className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="date" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <select className="form-control">
                                <option value="">Company Type</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <select className="form-control">
                                <option value="">Nature of Business</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select className="form-control">
                                <option value="">Industry Type</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}



export default TestCompanyDetails