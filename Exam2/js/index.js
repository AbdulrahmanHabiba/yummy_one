let myRespose = [];
let Meals = [];
let arr = [];
/*
async function getMeal() {

    let apiResponce = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    myRespose = await apiResponce.json()
    Meals = myRespose.meals
    console.log(myRespose)
    let imgSrc = Meals.strMealThumb
    console.log(imgSrc)
    console.log(myRespose.meals)
    display()
}
//getMeal()

function display() {

    let temp = ``
    for (let i = 0; i < myRespose.length; i++) {
        console.log(myRespose[i].meals)
        temp += `
        <div class="col-md-3">
          <div class="item">
          <img src="${myRespose[i].meals.strMealThumb}"class=" w-100 "alt="">
          </div>
          </div>
    `
    }
    document.getElementById("row").innerHTML = temp
}

function dis() {
    //Meals.forEach(console.log(Meals.strMealThumb))
}
//dis()
//let imgUrl = apiResponce;

//console.log(imgUrl);


*/

//SLIDER
$("ul li").click(() => console.log("hisadk"));
$(".x-ico").click(() => {
    if ($(".fixed-slide").css("left") === "250px") {
        $(".fixed-slide").css({ left: "0px" });
        $(".slider-menu").css({ width: "0px" ,opacity:"1"});
        console.log("true");
        $("ul .li_1").animate({
            opacity: "0",
            paddingBottom: "0px",
        });
        $("ul .li_2").animate({
            opacity: "0",
            paddingBottom: "0px",
        });
        $("ul .li_3").animate({
            opacity: "0",
            paddingBottom: "0px",
        });
        $("ul .li_4").animate({
            opacity: "0",
            paddingBottom: "0px",
        });
        $("ul .li_5").animate({
            opacity: "0",
            paddingBottom: "0px",
        });
        $(".copyright").animate({
            opacity: "0",
            marginLeft: "-200px",
        });

        //$("ul li").animate({
        //    opacity: "0",
        //    //paddingBottom: "25px"
        //})
    } else if ($(".fixed-slide").css("left") !== "250") {
        $(".slider-menu").css({ width: "250px",opacity:"1" });
        $(".fixed-slide").css({ left: "250px" });
        $("ul .li_1").animate(
            {
                opacity: "1",
                paddingBottom: "25px",
            },
            1000
        );
        $("ul .li_2").animate(
            {
                opacity: "1",
                paddingBottom: "25px",
            },
            1100
        );
        $("ul .li_3").animate(
            {
                opacity: "1",
                paddingBottom: "25px",
            },
            1200
        );
        $("ul .li_4").animate(
            {
                opacity: "1",
                paddingBottom: "25px",
            },
            1300
        );

        $("ul .li_5").animate(
            {
                opacity: "1",
                paddingBottom: "25px",
            },
            1400
        );
        $(".copyright").animate({
            opacity: "1",
            marginLeft: "0px",
        });

        console.log("false");
    }
});

//search
//.css("left") !== "250"
$("ul .li_1").click(() => {
    if ($(".search ").css("display")=="none" ) {
        $(".search ").css({display:"block"})
    }
    else if ($(".search ").css("display") == "block") {
        $(".search ").css({ display: "none" })
    }
})
async function searchName(key) {
    $(".loading-container").fadeIn(100)
    let meals = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${key}`
    );
    meals = await meals.json();
    let data = meals.meals;
    displayMeals(data);
    console.log(data);
    $(".loading-container").fadeOut(400)
}
searchName("pi")
//getDetails(52772)
async function getDetails(ID) {
    $(".loading-container").fadeIn(100)
    let meal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`);
    meal = await meal.json();
    console.log(meal.meals[0]);
    console.log("Kumpir");
    let data = meal.meals
    displayDetails(data[0]);
    $(".loading-container").fadeOut(500)

}
function displayDetails(meal) {
    let recipes = ""
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            recipes += `<li class="my-3 mx-1 p-1 alert-success rounded">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
        }
    }

    let tags = meal.strTags?.split(",")
    let tagsStr = "" 
    for (let i = 0; i < tags?.length; i++) {
        tagsStr += `<li class="my-3 mx-1 p-1 alert-danger rounded">${tags[i]}</li>`
    }
    console.log(meal.strMealThumb)
    console.log("fn displayDetails");
    let meals = '';
    meals += `
        <div class="col-md-4 ps-1 text-white">
          <img src="${meal.strMealThumb}"  class="w-100" alt="" />
          <h2>${meal.strMeal}</h2>
        </div>
        <div class="ps-4 col-md-8 text-white">
          <h5 class="fs-4">Instructions</h5>
          <p class="py-2 lh-base">
           ${meal.strInstructions}
          </p>
          <p class="py-1 fw-bold text-white">
            Area : <span class="fw-light">${meal.strArea}</span>
          </p>
          <p class="fw-bold text-white">Category : <span class="fw-light">${meal.strCategory}</span></p>
          <h5 class="fs-4 mb-4">Recipes :</h5>
          <span id="recipe" class=" text-black rounded-2 py-1 ">
          <ul class="d-flex " id="recipes">
          </span>
        </ul>
        <h3 class="my-2 mx-1 p-1 text-white">Tags :</h3>
        <ul class="d-flex " id="tags">
        </ul>
        <a class="btn btn-success " target="_blank" href="http://${meal.strSource}">Source</a>
		<a class="btn btn-danger  ms-1" target="_blank" href="http://${meal.strYoutube}">Youtub</a>
          </div>
        `
    document.getElementById("myId").innerHTML = meals;
    document.getElementById("recipes").innerHTML = recipes
    document.getElementById("tags").innerHTML = tagsStr
    $("html, body").animate({
        scrollTop: 0
    }, 200)

   
}
// <a class="btn btn-success text-white" target="_blank" href="${meal.strSource}">Source</a>
//		  <a class="btn youtube text-white" target="_blank" href="${meal.strYoutube}">Youtub</a>

//document.getElementById("recipes").innerHTML = recipes
    //document.getElementById("tags").innerHTML = tagsStr
//getDetails  ();
$("#searchName").keyup((e) => {
    console.log("hi");
    searchName(e.target.value);
});
function displayMeals(arr) {
    let meals = ``;
    for (let i = 0; i < arr.length; i++) {
        meals += `
                <div class="col-md-6 col-lg-3 my-3 shadow ">
                <div class="post ">
                    <img src='${arr[i].strMealThumb}' onclick="${getDetails(52772)}" class="w-100 rounded" />
                    <div class="layer d-flex align-items-center rounded " >
                        <div class="info p-2">
                            <h2>${arr[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
              </div>
        `;
    }
    document.getElementById("myId").innerHTML = meals;
}
