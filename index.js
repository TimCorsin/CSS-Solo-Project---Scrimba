const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatars/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatars/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatars/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const likeBtn = document.querySelector(".like")
const commentBtn = document.querySelector(".comment")
const dmBtn = document.querySelector(".dm")

likeBtn.addEventListener("click", function() {

// console.log(" heart emoji clicked")

function likeMessage() {
    const likeAlert = document.createElement('div') // creates a new div when likeMessage() is called
    likeAlert.className='like-alert' //add a classname to the div so it can be styled
    likeAlert.textContent="♥️ post liked" // sets the alert textContent

    document.querySelector(".icons").appendChild(likeAlert)  // adds the likeAlert div to the body of the html file
    
    likeAlert.style.opacity = 0
    likeAlert.style.transition = 'opacity 0.fs ease-in-out'

    setTimeout(() => {
        likeAlert.style.opacity = 1

        setTimeout(() => {
            likeAlert.style.opacity = 0

            setTimeout(() => {
                document.querySelector(".icons").removeChild(likeAlert)
            }, 500)
        }, 2000)
    }, 0)
}

likeMessage()

})



// function generatePost() {
//     for (let i = 0; i < posts.length; i++) {
//         let post += `

//         `

//     }
// }