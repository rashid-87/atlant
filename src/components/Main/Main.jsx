import Slider from "./Slider/Slider"
import Select from "./Select/Select"
import Advantages from "./Advantages/Advantages"
import Delivery from "./Delivery/Delivery"
import Price from "./Price/Price"
import Accordion from "./Answers/Accordion"
import Info from "./Info/Info"
import Partner from "./Partner/Partner"
import Address from "./Address/Address"

const Main = () => {
  return (
    <>
      <Delivery />
      <Price />
      <Advantages />
      <Select />
      <Slider />
      <Accordion />
      <Info />
      <Partner />
      <Address />
    </>
  )
}

export default Main
