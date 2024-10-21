import C1 from '../../assets/images/c1.jpg'
import C2 from '../../assets/images/c2.jpg'
import C3 from '../../assets/images/c3.jpg'
function Carousal() {
  return (
  <>
  <div className="py-8">
    <img src={C1} width='100%' height={50}/>
    <div className="grid grid-cols-3 gap-1">
        <div><img src={C1} /></div>
        <div><img src={C2} /></div>
        <div><img src={C3} /></div>
    </div>
  </div>
  </>


  )
}

export default Carousal