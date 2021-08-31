function Stopwatch(){
    let start, stop, reset, duration = 0,counter = 0
    let c = document.getElementById('counter')
        let d = document.getElementById('duration')
    this.startwatch = function()
    {   
        
            function startw()
            {
                duration++
                if(duration>60)
                {
                    counter = counter + 1
                    duration = 0
                }
                show()
                
            }
            start = setInterval(startw,1000) 
    }
    this.stopwatch = function()
    {
        clearInterval(start)
    }
    this.reset  = function()
    {
        clearTimeout(start)
        duration = 0, counter = 0
        c.innerText=counter
        d.innerText=duration
    }
    function show(){
        
        c.innerText=counter
        d.innerText=duration
    }
}
let start = document.getElementById('start')
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")
console.log(start)
const sw = new Stopwatch()
counter = 0
start.addEventListener('click', function()
{
    if (counter==0)
    {

        sw.startwatch()
        counterv=1
    }

})
stop.addEventListener('click', function()
{
sw.stopwatch()
counter = 0

})
reset.addEventListener('click', function()
{
sw.reset()
counter = 0

})