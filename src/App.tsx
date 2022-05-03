import PageLayout from 'layout/PageLayout'
import 'styles/global.css'

const App = () => {
  return (
    <PageLayout>
      <div className="py-16 px-4 mx-auto max-w-screen-xl sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
            CanTo DEX
          </h2>
        </div>
      </div>
    </PageLayout>
  )
}

export default App
