// callBacks

/*
Function that is passed as an argument in
another function is called callBack function
*/

sai(100,function(a1,b1)
{
    if(!b1)
    {
        sai2(a1,function(a2,b2)
        {
            if(!b2)
            {
                sai3(a2,function(a3,b3)
                {
                    if(!b3)
                    {
                        console.log("Ex1 :",a3)
                    }
                })
            }
        })
    }
})
function sai(value,output)
{
    output(value+100,false);
}

function sai2(value,output)
{
    output(value+100,false)
}
function sai3(value,output)
{
    output(value+700,false)
}

teja(10,function(a1,b1)
{
    if(!b1)
    {
        teja2(a1,function(a2,b2)
        {
            if(!b2)
            {
                teja3(a2,function(a3,b3)
                {
                    if(!b3)
                    {
                        console.log(`Example 2 :`,a3)
                    }
                })
            }
        })
    }
})
function teja(value,output)
{
    output(value+100,false)
}
function teja2(value,output)
{
    output(value+100,false)
}
function teja3(value,output)
{
    output(value+100,false)
}



ford(1000,function(FreeStyle,Ecosport)
{
    if(!Ecosport)
    {
        ford1(FreeStyle,function(FreeStyle1,Ecosport1)
        {
            if(!Ecosport1)
            {
                ford2(FreeStyle1,function(FreeStyle2,Ecosport2)
                {
                    if(!Ecosport2)
                    {
                        ford3(FreeStyle2,function(FreeStyle3,Ecosport3)
                        {
                            if(!Ecosport3)
                            {
                                console.log(`Example 3 :`,FreeStyle3)
                            }
                        })
                    }
                })
            }
        })
    }
})
function ford(value,output)
{
    output(value+1000,false)
}
function ford1(value,output)
{
    output(value+1000,false)
}
function ford2(value,output)
{
    output(value+1000,false)
}
function ford3(value,output)
{
    output(value+1000,false)
}

script(4000,function(a1,b1)
{
    if(!b1)
    {
        script1(a1,function(a2,b2)
        {
            if(!b2)
            {
                script2(a2,function(a3,b3)
                {
                    if(!b3)
                    {
                        script3(a3,function(a4,b4)
                        {
                            if(!b4)
                            {
                                script4(a4,function(a5,b5)
                                {
                                    if(!b5)
                                    {
                                        script5(a5,function(a6,b6)
                                        {
                                            if(!b6)
                                            {
                                                console.log(`Example 4:`,a6)
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})
function script(value,output)
{
    output(value+1000,false)
}
function script1(value,output)
{
    output(value+1000,false)
}
function script2(value,output)
{
    output(value+1000,false)
}
function script3(value,output)
{
    output(value+1000,false)
}
function script4(value,output)
{
    output(value+1000,false)
}
function script5(value,output)
{
    output(value+1000,false)
}