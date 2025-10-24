import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [event, setEvent] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/event')
      .then(res => res.json())
      .then(data => setEvent(data))
      .catch(err => console.log(err));
  }, [])

  useEffect(() => {
    if (!event) return;

    const timer = setInterval(() => {
      const eventTime = new Date(event.datetime).getTime()
      const now = new Date().getTime()
      const diff = eventTime - now

      if (diff <= 0) {
        setTimeLeft({ eventDone: true })
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor(diff / 1000 % 60),
      })

    }, 1000)

    return () => clearInterval(timer)
  }, [event])

  return (
    <>
      {showModal && (
        <div id='overlay'>
          <div id='modal'>
            <h2>
              {event?.name}
              <button id="closeBtn" onClick={() => setShowModal(false)}>X</button>
            </h2>
            {timeLeft.eventDone ? (
              <p>Event Started</p>
            ) : (
              <h3>
                {timeLeft.days > 0 && `${timeLeft.days} ${timeLeft.days > 1 ? 'Days ' : 'Day '}`}

                {timeLeft.hours > 0 && `${timeLeft.hours} ${timeLeft.hours > 1 ? 'Hours ' : 'Hour '}`}

                {timeLeft.minutes > 0 && `${timeLeft.minutes} ${timeLeft.minutes > 1 ? 'Minutes ' : 'Minute '}`}

                {timeLeft.seconds > 0 && `${timeLeft.seconds} ${timeLeft.seconds > 1 ? 'Seconds ' : 'Second '}`}
              </h3>
            )}
          </div>
        </div >
      )}

      {
        !showModal && !timeLeft.eventDone && (
          <div id='badge' onClick={() => setShowModal(true)}>
            <h3>
              {timeLeft.days > 0 && `${timeLeft.days} ${timeLeft.days > 1 ? 'Days ' : 'Day '}`}

              {timeLeft.hours > 0 && `${timeLeft.hours} ${timeLeft.hours > 1 ? 'Hours ' : 'Hour '}`}

              {timeLeft.minutes > 0 && `${timeLeft.minutes} ${timeLeft.minutes > 1 ? 'Minutes ' : 'Minute '}`}

              {timeLeft.seconds > 0 && `${timeLeft.seconds} ${timeLeft.seconds > 1 ? 'Seconds ' : 'Second '}`}
            </h3>
          </div>
        )
      }
    </>
  )
}

export default App
