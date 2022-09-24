function initialize()
{
    const pmini = 
[   'logo.png',
    "This is the Phone Mini",
    "Our most revolutionary product yet",
    "phonemini2.jpeg",
    "The Best Camera System. Ever.",
    "All New 108 MP Sensor combined with our groundbreaking Photonic Fusion Engine brings the details to life. Never worry about space with unlimited cloud storage.",
    "Stay Connected",
    "With Enhanced Connectivity, you'll be connected no matter where you go. The next generation of Cell Connectivity allows for more range and faster speeds. Enjoy music, phone calls, video streaming and gaming from anywhere.",

];

    x=document.getElementById("phonemini");
    x.style.color='white';
    x.style.backgroundColor='orangered';

    fimg=document.getElementById("introImg");
    document.getElementById("text1").innerHTML=pmini[1];
    document.getElementById("text2").innerHTML=pmini[2];
    document.getElementById("featOneTitle").src=pmini[3];
    document.getElementById("featOneTitle").innerHTML=pmini[4];
    document.getElementById("featOneSubtitle").innerHTML=pmini[5];
    document.getElementById("featTwoTitle").innerHTML=pmini[6];
    document.getElementById("featTwoSubtitle").innerHTML=pmini[7];
    document.getElementById("featThreeTitle").innerHTML=pmini[8];
    document.getElementById("featThreeSubtitle").innerHTML=pmini[9];
}

function change(n)
    {
        document.getElementById('phonemini').style.color='black';
        document.getElementById('phonemini').style.backgroundColor='whitesmoke';

        document.getElementById('phonemax').style.color='black';
        document.getElementById('phonemax').style.backgroundColor='whitesmoke';

        document.getElementById('watch').style.color='black';
        document.getElementById('watch').style.backgroundColor='whitesmoke';

        document.getElementById('irpods').style.color='black';
        document.getElementById('irpods').style.backgroundColor='whitesmoke';


        x=document.getElementById(n);
        x.style.color='white';
        x.style.backgroundColor='orangered';

        if (n=='phonemini')
        {
            initialize()
            //switchMini function
        }
        if (n=='phonemax')
        {
            switchMax();
        }
        if (n=='watch')
        {
            switchWatch();
        }
        if (n=='irpods')
        {
            switchIrpods();
        }
    }

    function switchMax()
    {
        const pmax = ['logo.png',
        "This is the Phone Max",
        "Taken to a whole new level"
        ];

        document.getElementById("text1").innerHTML=pmax[1];
        document.getElementById("text2").innerHTML=pmax[2];
    }

    function switchWatch()
    {
        const pmax = ['logo.png',
        "This is the Watch",
        "The Biggest Screen Ever"
        ];

        document.getElementById("text1").innerHTML=pmax[1];
        document.getElementById("text2").innerHTML=pmax[2];
    }

    function switchIrpods()
    {
        const pmax = ['logo.png',
        "This is Irpods",
        "It's Magical"
        ];

        document.getElementById("text1").innerHTML=pmax[1];
        document.getElementById("text2").innerHTML=pmax[2];
    }