import React,{useState, useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Lottie from 'react-lottie';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import BasicExample from '../Components/Table1'
import library_lottie from '../Assets/101342-library.json'
const Home = () => {

    const bookname = useRef("");
    const author = useRef("");
    const type =useRef("Coding");

    // const [bookname,setBookname] = useState("");
    // const [author, setAuthor]=useState("");
    // const [type, settype]=useState("coding");



    const [data,setData]=useState({});




    const formsubmit =(e)=>{
        e.preventDefault();
        setData({ 
            book: bookname.current.value,
            author:author.current.value,
            type:type.current.innerHTML
        })
        
    }
console.log(data)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: library_lottie,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <>
            <div className='container'>
                <h2 className='text-center text-secondary'> PrepBytes Library </h2>
                <hr />

                <div className='w-100 formshere '>
                    <Form className='w-50' onSubmit={ (e)=>{formsubmit(e)} }>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Book name</Form.Label>
                            <Form.Control type="type" placeholder="Harry potter" ref={bookname} />
                            <Form.Text className="text-muted">
                                We'll never share your book with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="J. K. Rowling" ref={author} />
                        </Form.Group>

                        <ButtonGroup aria-label="Basic example">
                            <Button variant="dark"  ref={type} >Coding</Button>
                            <Button variant="dark" ref={type}>Cooking</Button>
                            <Button variant="dark" ref={type}>Adventure</Button>
                        </ButtonGroup>

                        <br />
                        <br />
                        <Button variant="warning" type="submit">
                            Submit
                        </Button>
                    </Form>

                    <Lottie
                        options={defaultOptions}
                        height={450}
                        width={450}
                    />
                </div>


                <BasicExample />

            </div>

        </>
    );
}

export default Home;
