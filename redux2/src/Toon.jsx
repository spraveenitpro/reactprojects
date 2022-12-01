import { Cat } from 'react-kawaii'
import { useSelector, useDispatch } from 'react-redux'
import { setmood } from './redux/toons'

import './App.css'

function Toon() {
    const dispatch = useDispatch()
    const { mood } = useSelector((state) => state.toon)
    const { color } = useSelector((state) => state.toon)
    let moods = [
        'sad',
        'shocked',
        'happy',
        'blissful',
        'lovestruck',
        'excited',
        'ko',
    ]

    const handleMood = (e) => {
        dispatch({ payload: e.target.value })
    }
    return (
        <div className="App">
            <Cat size={320} mood={mood} color={color} />
            <section>
                {moods.map((mood) => (
                    <button
                        onClick={() => dispatch(setmood(mood))}
                        key={mood}
                        data-type={mood}
                        value={mood}
                    >
                        {mood}
                    </button>
                ))}
            </section>
        </div>
    )
}

export default Toon
