import './App.css'
import Card from './components/card/Card.tsx'
import StylizedForms from './components/StylizedForms/StylizedForms.tsx'
function App() {

  return (
    <>
      <div className='animated-background'></div>
      <div className='moving-gradient'></div>
      <Card title="Formulário de Lead">
        <p>Preencha o formulário abaixo para entrarmos em contato:</p>
        <br/><br/>
        <div className="form-container">
          <StylizedForms />
        </div>
      </Card>
    </>
  )
}

export default App
