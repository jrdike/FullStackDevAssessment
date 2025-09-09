import type { Devcard } from './types/devcard'

const cards: Devcard[] = []
for (let i = 1; i <= 8; i++) {
    cards.push({
      id: i.toString(),
      clicks: 0,
      timestamp: null
  })
}

//I used this from https://flowbite.com/docs/components/buttons/ (specifically the one labelled alternative) as I'm not the best with styling
const defaultButtonCSS: string = "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"

function splitCards() {
  const highCards: Devcard[] = []
  const lowCards: Devcard[] = []
  for (let i = 0; i < cards.length / 2; i++) {
    highCards.push(cards[i])
    lowCards.push(cards[i + cards.length / 2])
  }
  return [highCards, lowCards]
}

function App() {
  let split: Devcard[][] = splitCards()
  let highCards: Devcard[] = split[0]
  let lowCards: Devcard[] = split[1]
  return (
    <>
      <div className="py-10 text-center">
        {highCards.map(card => (
          <button id={card.id} className={defaultButtonCSS}>
            <h3 className="">{card.id}</h3>
            <p>Clicks: {card.clicks}</p>
            <p>{card.timestamp == null ? "Never Clicked" : card.timestamp}</p>
          </button>
        ))}
        <br></br>
        {lowCards.map(card => (
          <button id={card.id} className={defaultButtonCSS}>
            <h3 className="">{card.id}</h3>
            <p>Clicks: {card.clicks}</p>
            <p>{card.timestamp == null ? "Never Clicked" : card.timestamp}</p>
          </button>
        ))}
      </div>
      <div className="text-center">
        <button id="sort1" className={defaultButtonCSS}>
          Sort by most clicked
        </button>
        <button id="sort2" className={defaultButtonCSS}>
          Sort by earliest clicked
        </button>

        <br></br>

        <button id="clear" className={defaultButtonCSS}>
          Clear
        </button>
      </div>
    </>
  )
}

export default App
