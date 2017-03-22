//declare samecolor() here
function samecolor()
{
    const doc = document;
    let the_div = doc.querySelectorAll("#samecolor > div"); //array
    for(let i = 0; i <the_div.length; i++)
    {
        let opacity = (0.25 * i) + 0.25;
        the_div[i].style.backgroundColor = '#f00';
        the_div[i].style.opacity = opacity;
        console.log(opacity);
    }
}

//declare diffcolor() here
