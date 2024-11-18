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
const viewFeedBtn = document.getElementById('view-feed')
const mainEl = document.querySelector('main')
const likeBtn = document.querySelector(".like")
const commentBtn = document.querySelector(".comment")
const dmBtn = document.querySelector(".dm")

viewFeedBtn.addEventListener('click', function() {
    document.querySelector(".btn").remove()
    generatePosts()
    
})

function generatePosts() {
    const feedContainer = document.querySelector('.feed-container')

    posts.forEach(post => {
        const postHTML = `
            <div class="container">
                <section class="poster-info">
                    <div class="avatar-images">
                        <img
                        src="${post.avatar}"
                        class="avatars"
                        alt="${post.name}'s avatar"
                        />
                    </div>
                    <div class="user-info">
                        <h1>${post.name}</h1>
                        <h2>${post.location}</h2>
                    </div>
                </section>

                    <img
                        src="${post.post}"
                        alt="self portrait by ${post.name}"
                        class="post-img"
                    />
            </div>
            <section class="comments">
                <div class="icons">
                    <button class="icon-img like"></button>
                    <button class="icon-img comment"></button>
                    <button class="icon-img dm"></button>
                </div>
                <div class="likes">
                    <h1>${post.likes.toLocaleString()}likes</h1>
                    <h1 class="last">
                        ${post.username}
                        <span class="comment">${post.comment}</span>
                    </h1>
                </div>
            </section>
        `

        const postElement = document.createElement('article')
        postElement.innerHTML = postHTML
        feedContainer.appendChild(postElement)
    })
    const likeBtns = document.querySelectorAll(".like")
    likeBtns.forEach(btn => {
        btn.addEventListener("click", likeMessage)
    })
}

function likeMessage() {
    const likeAlert = document.createElement('div') // creates a new div when likeMessage() is called
    likeAlert.className='like-alert' //add a classname to the div so it can be styled
    likeAlert.textContent="♥️ post liked" // sets the alert textContent
    // FInd the closest .icons section to the clicked button
    const iconsSection = event.target.closest('.icons')
    iconsSection.appendChild(likeAlert) // adds the likeAlert div to the body of the html file
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