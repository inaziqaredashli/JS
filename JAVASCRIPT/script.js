const input = document.querySelector('#input')
        let x = +input.value
        function setValue(x) {
            input.value = x
        }
        function readInput() {
            x = +input.value
            setValue(x)
        }
        function increase(step) {
            readInput()
            if(x<10) {
            x = +input.value
                    x += step
                    setValue(x)}

        }
        function decrease(step) {
            readInput()
            if(x > 1) {
                x = +input.value
            x -= step
            setValue(x) }

        }
