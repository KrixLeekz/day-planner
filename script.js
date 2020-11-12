$("document").ready(function(){
    var now = dayjs()
    currDay = $("#currentDay")
    currDay.html(now.format("MMMM/DD/YYYY"))

    var businessHours = [$("#nineAM"),$("#tenAM"),$("#elevenAM"),$("#twelvePM"),$("#onePM"),$("#twoPM"),$("#threePM"),$("#fourPM"),$("#fivePM")]

    function renderBusinessHours(){
        //loop through business hours
        //if the block is past, present, or future set the background color of that div to specified color
        //if there is something in local storage, get it and display it
        for(let i = 0; i < businessHours.length; i++){
            businessHours[i].children("input").css("color","white")
            if(now.hour() > businessHours[i].val()){
                businessHours[i].children("input").css("background-color","red")
            }else if(now.hour() < businessHours[i].val()){
                businessHours[i].children("input").css("background-color","green")
            }else{
                businessHours[i].children("input").css("background-color","blue")
            }
            businessHours[i].children("input").text(localStorage.getItem("storage"))
            console.log(JSON.stringify(localStorage.getItem("storage")))
        }
    }

    function saveEvent(){
        //loop through business hours to see which child buttons have been pressed
        var preStore = $(this).parent().children("input").val()
        storeText = preStore+$(this).parent().val()
        localStorage.setItem("storage", storeText)
    }


    $(".btn").on("click", saveEvent)
    renderBusinessHours()

    // businessHours[0].on("click", function(){
    //     console.log($(this).children()[1].value)
    // })
    










})