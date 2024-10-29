const words = ["Web Designer", "Graphic Designer", "Web Developer", "Software Engineer", "Hardware Engineer"];
let i = 0;
let j = 0;
let currentWord = [];
let isDeleting = false;
let isEnd = false;

function loopTyping() {
    isEnd = false;
    document.querySelector(".typing").innerHTML = currentWord.join("");

    if (i < words.length) {

        if (!isDeleting && j <= words[i].length) {
            currentWord.push(words[i][j]);
            j++;
            document.querySelector(".typing").innerHTML = currentWord.join("");
        }

        if (isDeleting && j <= words[i].length) {
            currentWord.pop(words[i][j]);
            j--;
            document.querySelector(".typing").innerHTML = currentWord.join("");
        }

        if (j == words[i].length) {
            isEnd = true;
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentWord = [];
            isDeleting = false;
            i++;
            if (i == words.length) {
                i = 0;
            }
        }
    }
    const typingSpeed = isEnd ? 2000 : isDeleting ? 50 : 150;
    setTimeout(loopTyping, typingSpeed);
}

loopTyping();

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection =allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
        console.log(navList[i])
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            removeBackSection();
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                    {
                        addBackSection(j);
                        //allSection[j].classList.add("back-section");
                    }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();
            }
        })
    }

    function removeBackSection()
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(num)
    {
        allSection[num].classList.add("back-section");
    }
    function showSection(element)
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }

    function updateNav(element)
    {
        for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function()
    {
        const sectionIndex = this.getAttribute("data-section-index");
        //console.log(sectionIndex)
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () => 
            {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0; i<totalSection; i++)
                    {
                        allSection[i].classList.toggle("open");
                    }
            }