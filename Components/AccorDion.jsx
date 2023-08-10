import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

const AccorDion=()=>{
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    const [ categories, setCategories ] = useState([])
    const [ searchValue, setSearchValue ] = useState("")
    

    useEffect(() =>{
        dispatch( getProductsThunk())
        getCategories()
    }, [] )

    const getCategories = () => {

        axios
        .get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
        .then( resp => setCategories(resp?.data))
        .catch(error => console.error(error))
    }


    return(
<Accordion  alwaysOpen  className='accordion'>
                <Accordion.Item eventKey="0">
        <Accordion.Header className='accordionHeader'>Price</Accordion.Header>
        <Accordion.Body  className='accordionBody'> {/*----Body del precio del acordion */}

        <Form>
             <Form.Group>
            <Form.Label>From</Form.Label><Form.Control type="email" />

                     <Form.Text className="text-muted">
                  </Form.Text>
                  </Form.Group>

            <Form.Group>
            <Form.Label>To</Form.Label>
            <Form.Control type="email" />
                     <Form.Text className="text-muted">
                  </Form.Text>
            </Form.Group>
        </Form>
           
                  
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Category</Accordion.Header> {/* Se realiza un map para pintar las cetegorias en el acordion */}
        {
            
           categories?.map( category => (
            <Accordion.Body key={category.id } className='accordionBody'
            onClick={() => dispatch(filterProductsByCategoryThunk(category.id) )}   >
               {category.name}
            </Accordion.Body>
))
          
        }
        
      </Accordion.Item>
      </Accordion>

    )
}
export default AccorDion